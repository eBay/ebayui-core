import focusables from 'makeup-focusables';
// TODO check carousel
import { resizeUtil } from '../../common/event-utils';
import { processHtmlAttributes } from '../../common/html-attributes';
import { onScrollDebounced as onScroll } from './utils/on-scroll-debounced';
import { scrollTransition } from './utils/scroll-transition';

// Used for carousel slide direction.
const LEFT = -1;
const RIGHT = 1;

function getTemplateData(state) {
    const { config, autoplayInterval, items, itemsPerSlide, slideWidth, gap } = state;
    const hasOverride = config.offsetOverride !== undefined;
    const isSingleSlide = items.length <= itemsPerSlide;
    state.index = normalizeIndex(state, state.index);

    const offset = getOffset(state);
    const prevControlDisabled = isSingleSlide || (!autoplayInterval && offset === 0);
    const nextControlDisabled =
        isSingleSlide || (!autoplayInterval && offset === getMaxOffset(state));
    // If left/right is undefined, the carousel is moving at that moment. We should keep the old disabled state
    const bothControlsDisabled = isAnimating(state)
        ? state.bothControlsDisabled
        : prevControlDisabled && nextControlDisabled;
    let slide, itemWidth, totalSlides;

    if (itemsPerSlide) {
        const itemsInSlide = itemsPerSlide + state.peek;
        slide = getSlide(state);
        itemWidth = `calc(${100 / itemsInSlide}% - ${((itemsInSlide - 1) * gap) / itemsInSlide}px)`;
        totalSlides = getSlide(state, items.length);
    }

    items.forEach((item, i) => {
        const { style, transform } = item;
        const marginRight = i !== items.length - 1 && `${gap}px`;

        // Account for users providing a style string or object for each item.
        if (typeof style === 'string') {
            item.style = `${style};flex-basis:${itemWidth};margin-right:${marginRight};`;
            if (transform) item.style += `transform:${transform}`;
        } else {
            item.style = Object.assign({}, style, {
                width: itemWidth,
                'margin-right': marginRight,
                transform,
            });
        }

        item.fullyVisible =
            item.left === undefined ||
            (item.left - offset >= -0.01 && item.right - offset <= slideWidth + 0.01);
    });

    const data = Object.assign({}, state, {
        items,
        slide,
        offset: hasOverride ? config.offsetOverride : offset,
        disableTransition: hasOverride,
        totalSlides,
        prevControlDisabled,
        nextControlDisabled,
        bothControlsDisabled,
    });

    return data;
}

function onRender() {
    const { containerEl, listEl, state } = this;
    const { config, items, autoplayInterval, paused, interacting } = state;

    // Do nothing for empty carousels.
    if (!items.length) {
        return;
    }

    // Force a rerender to start the offset override animation.
    if (config.offsetOverride) {
        config.offsetOverride = undefined;
        this.renderFrame = requestAnimationFrame(() => this.setStateDirty());
        return;
    }

    // Track if we are on a normal render or a render caused by recalculating.
    if (config.preserveItems) {
        config.preserveItems = false;

        // Ensure only visible items within the carousel are focusable.
        // We don't have access to these items in the template so me must update manually.
        this.focusFrame = requestAnimationFrame(() => {
            forEls(listEl, (itemEl) => {
                focusables(itemEl).forEach(
                    itemEl.getAttribute('aria-hidden') !== 'true'
                        ? // Default the child tabindex to data-carousel-tabindex if it exists, or remove it
                          (child) =>
                              child.hasAttribute('data-carousel-tabindex')
                                  ? child.setAttribute(
                                        'tabindex',
                                        child.getAttribute('data-carousel-tabindex')
                                    )
                                  : child.removeAttribute('tabindex')
                        : (child) => child.setAttribute('tabindex', '-1')
                );
            });
        });

        if (config.nativeScrolling) {
            if (this.skipScrolling) {
                this.emitUpdate();
            } else {
                const offset = getOffset(state);
                if (offset !== listEl.scrollLeft) {
                    // Animate to the new scrolling position and emit update events afterward.
                    config.scrollTransitioning = true;
                    this.cancelScrollTransition = scrollTransition(listEl, offset, this.emitUpdate);
                } else if (this.isMoving) {
                    // Animate to the new scrolling position and emit update events afterward.
                    config.scrollTransitioning = true;
                    this.cancelScrollTransition = scrollTransition(
                        listEl,
                        getOffset(state),
                        this.emitUpdate
                    );
                }
            }
        }

        if (autoplayInterval && !paused && !interacting) {
            const moveRight = this.move.bind(this, RIGHT);
            this.autoplayTimeout = setTimeout(() => {
                if (this.isMoving) {
                    return this.once('move', moveRight);
                }
                moveRight();
            }, autoplayInterval);
        }

        return;
    }

    // Otherwise recalculates the items / slide sizes.
    this.renderFrame = requestAnimationFrame(() => {
        const { width: containerWidth } = containerEl.getBoundingClientRect();
        const { left: currentLeft } = listEl.firstElementChild.getBoundingClientRect();

        this.setStateDirty('slideWidth', containerWidth);
        config.preserveItems = true;
        config.nativeScrolling = isNativeScrolling(listEl);

        // Update item positions in the dom.
        forEls(listEl, (itemEl, i) => {
            const item = items[i];
            const { left, right } = itemEl.getBoundingClientRect();
            item.left = left - currentLeft;
            item.right = right - currentLeft;
        });
    });
}

/**
 * Called before updates and before the widget is destroyed to remove any pending async timers / actions.
 */
function cleanupAsync() {
    clearTimeout(this.autoplayTimeout);
    cancelAnimationFrame(this.renderFrame);
    cancelAnimationFrame(this.focusFrame);

    if (this.cancelScrollTransition) {
        this.cancelScrollTransition();
        this.cancelScrollTransition = undefined;
    }
}

function emitUpdate() {
    const {
        state: { config, items },
    } = this;
    config.scrollTransitioning = false;
    this.emit('move', {
        visibleIndexes: items
            .filter(({ fullyVisible }) => fullyVisible)
            .map((item) => items.indexOf(item)),
    });
}

/**
 * Moves the carousel in the `data-direction` of the clicked element if possible.
 *
 * @param {MouseEvent} originalEvent
 * @param {HTMLElement} target
 */
function handleMove(direction, originalEvent) {
    if (this.isMoving) {
        return;
    }
    const { state } = this;
    const nextIndex = this.move(direction);
    const slide = getSlide(state, nextIndex);
    this.emit('slide', { slide: slide + 1, originalEvent });
    this.emit(`${direction === 1 ? 'next' : 'previous'}`, { originalEvent });
}

/**
 * Toggles the play state of an autoplay carousel.
 *
 * @param {MouseEvent} originalEvent
 */
function togglePlay(originalEvent) {
    const {
        state: { config, paused },
    } = this;
    config.preserveItems = true;
    this.setState('paused', !paused);
    if (paused && !this.isMoving) {
        this.move(RIGHT);
    }
    this.emit(`${paused ? 'play' : 'pause'}`, { originalEvent });
}

/**
 * Find the closest item index to the scroll offset and triggers an update.
 *
 * @param {number} scrollLeft The current scroll position of the carousel.
 */
function handleScroll(scrollLeft) {
    const { state } = this;
    const { config, items, gap } = state;
    let closest;

    if (scrollLeft >= getMaxOffset(state) - gap) {
        closest = items.length - 1;
    } else {
        // Find the closest item using a binary search on each carousel slide.
        const itemsPerSlide = state.itemsPerSlide || 1;
        const totalItems = items.length;
        let low = 0;
        let high = Math.ceil(totalItems / itemsPerSlide) - 1;

        while (high - low > 1) {
            const mid = Math.floor((low + high) / 2);
            if (scrollLeft > items[mid * itemsPerSlide].left) {
                low = mid;
            } else {
                high = mid;
            }
        }

        const deltaLow = Math.abs(scrollLeft - items[low * itemsPerSlide].left);
        const deltaHigh = Math.abs(scrollLeft - items[high * itemsPerSlide].left);
        closest = normalizeIndex(state, (deltaLow > deltaHigh ? high : low) * itemsPerSlide);
    }

    if (state.index !== closest) {
        this.skipScrolling = true;
        config.preserveItems = true;
        this.setState('index', closest);
        this.emit('scroll', { index: closest });
    }
}

function handleStartInteraction() {
    this.setState('interacting', true);
}

function handleEndInteraction() {
    this.setState('interacting', false);
}

/**
 * Causes the carousel to move to the provided index.
 *
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number} the updated index.
 */
function move(delta) {
    const { state } = this;
    const { index, items, itemsPerSlide, autoplayInterval, slideWidth, gap, peek, config } = state;
    const nextIndex = getNextIndex(state, delta);
    let offsetOverride;

    config.preserveItems = true;
    this.isMoving = true;
    this.skipScrolling = false;

    // When we are in autoplay mode we overshoot the desired index to land on a clone
    // of one of the ends. Then after the transition is over we update to the proper position.
    if (autoplayInterval) {
        if (delta === RIGHT && nextIndex < index) {
            // Transitions to one slide before the beginning.
            offsetOverride = -slideWidth - gap;

            // Move the items in the last slide to be before the first slide.
            for (let i = Math.ceil(itemsPerSlide + peek); i--; ) {
                const item = items[items.length - i - 1];
                item.transform = `translateX(${(getMaxOffset(state) + slideWidth + gap) * -1}px)`;
            }
        } else if (delta === LEFT && nextIndex > index) {
            // Transitions one slide past the end.
            offsetOverride = getMaxOffset(state) + slideWidth + gap;

            // Moves the items in the first slide to be after the last slide.
            for (let i = Math.ceil(itemsPerSlide + peek); i--; ) {
                const item = items[i];
                item.transform = `translateX(${getMaxOffset(state) + slideWidth + gap}px)`;
            }
        }

        config.offsetOverride = offsetOverride;
    }

    this.setState('index', nextIndex);
    this.once('move', () => {
        this.isMoving = false;

        if (offsetOverride !== undefined) {
            // If we are in autoplay mode and went outside of the normal offset
            // We make sure to restore all of the items that got moved around.
            items.forEach((item) => {
                item.transform = undefined;
            });
        }
    });

    return nextIndex;
}

/**
 * Given the current widget state, finds the active offset left of the selected item.
 * Also automatically caps the offset at the max offset.
 *
 * @param {object} state The widget state.
 * @return {number}
 */
function getOffset(state) {
    const { items, index } = state;
    if (!items.length) {
        return 0;
    }
    return Math.min(items[index].left, getMaxOffset(state)) || 0;
}

/**
 * Given the current widget state, finds the last valid offset.
 *
 * @param {object} state The widget state.
 * @return {number}
 */
function getMaxOffset({ items, slideWidth }) {
    if (!items.length) {
        return 0;
    }
    return Math.max(items[items.length - 1].right - slideWidth, 0) || 0;
}

/**
 * Gets the slide for a given index.
 * Defaults to the current index if none provided.
 *
 * @param {object} state The widget state.
 * @param {number?} i the index to get the slide for.
 * @return {number}
 */
function getSlide({ index, itemsPerSlide }, i = index) {
    if (!itemsPerSlide) {
        return;
    }

    return Math.ceil(i / itemsPerSlide);
}

/**
 * Ensures that an index is valid.
 *
 * @param {object} state The widget state.
 * @param {number} index the index to normalize.
 */
function normalizeIndex({ items, itemsPerSlide }, index) {
    if (index > 0) {
        let result = index;
        result %= items.length || 1; // Ensure index is within bounds.
        result -= result % (itemsPerSlide || 1); // Round index to the nearest valid slide index.
        result = Math.abs(result); // Ensure positive value.
        return result;
    }

    return 0;
}

/**
 * Calculates the next valid index in a direction.
 *
 * @param {object} state The widget state.
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number}
 */
function getNextIndex(state, delta) {
    const { index, items, slideWidth, itemsPerSlide } = state;
    let i = index;
    let item;

    // If going backward from 0, we go to the end.
    if (delta === LEFT && i === 0) {
        i = items.length - 1;
    } else {
        // Find the index of the next item that is not fully in view.
        do {
            item = items[(i += delta)];
        } while (item && item.fullyVisible);

        if (delta === LEFT && !itemsPerSlide) {
            // If going left without items per slide, go as far left as possible while keeping this item fully in view.
            const targetOffset = item.right - slideWidth;
            do {
                item = items[--i];
            } while (item && item.left >= targetOffset);
            i += 1;
        }
    }

    return normalizeIndex(state, i);
}

/**
 * Calls a function on each element within a parent element.
 *
 * @param {HTMLElement} parent The parent to walk through.
 * @param {(el: HTMLElement, i: number) => any} fn The function to call.
 */
function forEls(parent, fn) {
    let i = 0;
    let child = parent.firstElementChild;
    while (child) {
        fn(child, i++);
        child = child.nextElementSibling;
    }
}

/**
 * Checks if the left/right offset is undefined
 *
 * @param {*} state  The widget state
 * @returns
 */
function isAnimating(state) {
    const { items, index } = state;
    if (!items.length) {
        return false;
    }
    const currentItem = items[index];
    return currentItem.left === undefined || currentItem.right === undefined;
}

/**
 * Checks if an element is using native scrolling.
 *
 * @param {HTMLElement} el the element to check
 * @return {boolean}
 */
function isNativeScrolling(el) {
    return getComputedStyle(el).overflowX !== 'visible';
}

export default {
    getTemplateData,
    move,
    handleMove,
    handleStartInteraction,
    handleEndInteraction,
    togglePlay,

    onInput(input) {
        const gap = parseInt(input.gap, 10);
        const state = {
            htmlAttributes: processHtmlAttributes(input, [
                'class',
                'style',
                'index',
                'type',
                'slide',
                'gap',
                'autoplay',
                'paused',
                'itemsPerSlide',
                'a11yPreviousText',
                'a11yNextText',
                'a11yPlayText',
                'a11yPauseText',
                'items',
                'hiddenScrollbar',
            ]),
            classes: [
                'carousel',
                input.hiddenScrollbar && 'carousel--hidden-scrollbar',
                input.class,
            ],
            style: input.style,
            config: {}, // A place to store values that should not trigger an update by themselves.
            gap: isNaN(gap) ? 16 : gap,
            index: parseInt(input.index, 10) || 0,
            itemsPerSlide: parseFloat(input.itemsPerSlide, 10) || undefined,
            a11yPreviousText: input.a11yPreviousText || 'Previous Slide',
            a11yNextText: input.a11yNextText || 'Next Slide',
            a11yPauseText: input.a11yPauseText || 'Pause',
            a11yPlayText: input.a11yPlayText || 'Play',
            ariaRoleDescription: input['aria-roledescription'] || 'Carousel',
        };

        const itemSkippedAttributes = ['class', 'style', 'key'];
        const { itemsPerSlide } = state;
        if (itemsPerSlide) {
            state.peek = itemsPerSlide % 1;
            state.itemsPerSlide = itemsPerSlide - state.peek;
            state.classes.push('carousel--slides');

            if (!state.peek && !input.autoplay && !input.noPeek) {
                state.peek = 0.1;
            }

            if (state.peek) {
                state.classes.push('carousel--peek');
            }

            // Only allow autoplay option for discrete carousels.
            if (input.autoplay) {
                const isSingleSlide = input.items.length <= itemsPerSlide;
                state.autoplayInterval = parseInt(input.autoplay, 10) || 4000;
                state.classes.push('carousel__autoplay');
                state.paused = isSingleSlide || input.paused; // Force paused state if not enough slides provided;
                state.interacting = false;
            }
        }

        state.items = (input.items || []).map((item, i) => {
            const isStartOfSlide = state.itemsPerSlide ? i % state.itemsPerSlide === 0 : true;
            return {
                htmlAttributes: processHtmlAttributes(item, itemSkippedAttributes),
                class: isStartOfSlide ? ['carousel__snap-point', item.class] : item.class,
                key: item.key || i,
                style: item.style,
                renderBody: item.renderBody,
            };
        });

        this.state = state;
    },

    onRender() {
        if (typeof window !== 'undefined') {
            cleanupAsync.call(this);
        }
    },

    onMount() {
        const {
            state: { config },
        } = this;
        this.listEl = this.getEl('list');
        this.nextEl = this.getEl('next');
        this.containerEl = this.getEl('container');
        this.emitUpdate = emitUpdate.bind(this);
        this.subscribeTo(resizeUtil).on('resize', () => {
            cleanupAsync.call(this);
            onRender.call(this);
        });
        this.skipScrolling = false;

        if (isNativeScrolling(this.listEl)) {
            config.nativeScrolling = true;
            this.once(
                'destroy',
                onScroll(this.listEl, () => {
                    if (!config.scrollTransitioning) {
                        handleScroll.call(this, this.listEl.scrollLeft);
                    }
                })
            );
        } else {
            this.subscribeTo(this.listEl).on('transitionend', ({ target }) => {
                if (target === this.listEl) {
                    this.emitUpdate();
                }
            });
        }

        this.onRenderLegacy({
            firstRender: true,
        });
    },

    onUpdate() {
        this.onRenderLegacy({
            firstRender: false,
        });
    },

    onDestroy() {
        cleanupAsync.call(this);
    },

    onRenderLegacy() {
        onRender.call(this);
    },
};
