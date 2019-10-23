const focusables = require('makeup-focusables');
const assign = require('core-js-pure/features/object/assign');
const resizeUtil = require('../../common/event-utils').resizeUtil;
const processHtmlAttributes = require('../../common/html-attributes');
const onScroll = require('./utils/on-scroll-debounced');
const scrollTransition = require('./utils/scroll-transition');
const template = require('./template.marko');

// Used for carousel slide direction.
const LEFT = -1;
const RIGHT = 1;

function getInitialState(input) {
    const gap = parseInt(input.gap, 10);
    const state = {
        htmlAttributes: processHtmlAttributes(input),
        classes: ['carousel', input.class],
        style: input.style,
        config: {}, // A place to store values that should not trigger an update by themselves.
        gap: isNaN(gap) ? 16 : gap,
        noDots: input.noDots,
        paddles: input.paddles || 'auto',
        index: parseInt(input.index, 10) || 0,
        itemsPerSlide: parseFloat(input.itemsPerSlide, 10) || undefined,
        a11yPreviousText: input.a11yPreviousText || 'Previous Slide',
        a11yNextText: input.a11yNextText || 'Next Slide',
        a11yStatusText: input.a11yStatusText || 'Showing Slide {currentSlide} of {totalSlides} - Carousel',
        a11yStatusTag: input.a11yStatusTag || 'span',
        a11yHeadingText: input.a11yHeadingText,
        a11yHeadingTag: input.a11yHeadingTag || 'h2',
        a11yCurrentText: input.a11yCurrentText || 'Current Slide {currentSlide} - Carousel',
        a11yOtherText: input.a11yOtherText || 'Slide {slide} - Carousel',
        a11yPauseText: input.a11yPauseText || 'Pause - Carousel',
        a11yPlayText: input.a11yPlayText || 'Play - Carousel'
    };

    const { itemsPerSlide } = state;
    if (itemsPerSlide) {
        state.peek = itemsPerSlide % 1;
        state.itemsPerSlide = itemsPerSlide - state.peek;
        state.classes.push('carousel--slides');

        if (state.peek) {
            state.classes.push('carousel--peek');
            state.noDots = true;
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
            htmlAttributes: processHtmlAttributes(item),
            class: isStartOfSlide ? ['carousel__snap-point', item.class] : item.class,
            style: item.style,
            renderBody: item.renderBody
        };
    });

    return state;
}

function getTemplateData(state) {
    const { config, autoplayInterval, items, itemsPerSlide, slideWidth, gap } = state;
    const hasOverride = config.offsetOverride !== undefined;
    const isSingleSlide = items.length <= itemsPerSlide;
    state.index = normalizeIndex(state, state.index);

    const offset = getOffset(state);
    const prevControlDisabled = isSingleSlide || !autoplayInterval && offset === 0;
    const nextControlDisabled = isSingleSlide || !autoplayInterval && offset === getMaxOffset(state);
    const bothControlsDisabled = prevControlDisabled && nextControlDisabled;
    let slide, itemWidth, totalSlides, a11yStatusText;

    if (itemsPerSlide) {
        const itemsInSlide = itemsPerSlide + state.peek;
        slide = getSlide(state);
        itemWidth = `calc(${100 / itemsInSlide}% - ${(itemsInSlide - 1) * gap / itemsInSlide}px)`;
        totalSlides = getSlide(state, items.length);
        a11yStatusText = state.a11yStatusText
            .replace('{currentSlide}', slide + 1)
            .replace('{totalSlides}', totalSlides);
    }

    items.forEach((item, i) => {
        const { style, transform } = item;
        const marginRight = i !== (items.length - 1) && `${gap}px`;

        // Account for users providing a style string or object for each item.
        if (typeof style === 'string') {
            item.style = `${style};flex-basis:${itemWidth};margin-right:${marginRight};`;
            if (transform) item.style += `transform:${transform}`;
        } else {
            item.style = assign({}, style, {
                'width': itemWidth,
                'margin-right': marginRight,
                transform
            });
        }

        item.fullyVisible = (
            item.left === undefined ||
            item.left - offset >= -0.01 &&
            item.right - offset <= slideWidth + 0.01
        );
    });

    const data = assign({}, state, {
        items,
        slide,
        offset: hasOverride ? config.offsetOverride : offset,
        disableTransition: hasOverride,
        showPaddles: itemsPerSlide ? items.length > itemsPerSlide : true,
        alwaysShowPaddles: state.paddles === 'on',
        totalSlides,
        a11yStatusText,
        prevControlDisabled,
        nextControlDisabled,
        bothControlsDisabled
    });

    return data;
}

function init() {
    const { state: { config } } = this;
    this.listEl = this.getEl('list');
    this.nextEl = this.getEl('next');
    this.containerEl = this.getEl('container');
    this.emitUpdate = emitUpdate.bind(this);
    this.subscribeTo(resizeUtil).on('resize', () => {
        cleanupAsync.call(this);
        onRender.call(this);
    });

    if (isNativeScrolling(this.listEl)) {
        config.nativeScrolling = true;
        this.once('destroy', onScroll(this.listEl, () => {
            if (!config.scrollTransitioning) {
                handleScroll.call(this, this.listEl.scrollLeft);
            }
        }));
    } else {
        this.subscribeTo(this.listEl).on('transitionend', ({ target }) => {
            if (target === this.listEl) {
                this.emitUpdate();
            }
        });
    }
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
        forEls(listEl, itemEl => {
            focusables(itemEl).forEach(itemEl.getAttribute('aria-hidden') !== 'true'
                ? child => child.removeAttribute('tabindex')
                : child => child.setAttribute('tabindex', '-1')
            );
        });

        if (config.nativeScrolling) {
            if (config.skipScrolling) {
                this.emitUpdate();
                config.skipScrolling = false;
            } else {
                const offset = getOffset(state);
                if (offset !== listEl.scrollLeft) {
                    // Animate to the new scrolling position and emit update events afterward.
                    config.scrollTransitioning = true;
                    this.cancelScrollTransition = scrollTransition(listEl, offset, this.emitUpdate);
                }
            }
        }

        if (autoplayInterval && !paused && !interacting) {
            const moveRight = this.move.bind(this, RIGHT);
            this.autoplayTimeout = setTimeout(() => {
                if (this.isMoving) {
                    return this.once('carousel-update', moveRight);
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

    if (this.cancelScrollTransition) {
        this.cancelScrollTransition();
        this.cancelScrollTransition = undefined;
    }
}

function emitUpdate() {
    const { state: { config, items } } = this;
    config.scrollTransitioning = false;
    this.emit('carousel-update', {
        visibleIndexes: items
            .filter(({ fullyVisible }) => fullyVisible)
            .map(item => items.indexOf(item))
    });
}

/**
 * Moves the carousel in the `data-direction` of the clicked element if possible.
 *
 * @param {MouseEvent} originalEvent
 * @param {HTMLElement} target
 */
function handleMove(originalEvent, target) {
    if (this.isMoving) {
        return;
    }
    const { state } = this;
    const direction = parseInt(target.getAttribute('data-direction'), 10);
    const nextIndex = this.move(direction);
    const slide = getSlide(state, nextIndex);
    this.emit('carousel-slide', { slide: slide + 1, originalEvent });
    this.emit(`carousel-${direction === 1 ? 'next' : 'previous'}`, { originalEvent });
}

/**
 * Moves the carousel to the slide at `data-slide` for the clicked element if possible.
 *
 * @param {MouseEvent} originalEvent
 * @param {HTMLElement} target
 */
function handleDotClick(originalEvent, target) {
    if (this.isMoving) {
        return;
    }
    const { state: { config, itemsPerSlide } } = this;
    const slide = parseInt(target.getAttribute('data-slide'), 10);
    config.preserveItems = true;
    this.setState('index', slide * itemsPerSlide);
    this.emit('carousel-slide', { slide: slide + 1, originalEvent });
}

/**
 * Toggles the play state of an autoplay carousel.
 *
 * @param {MouseEvent} originalEvent
 */
function togglePlay(originalEvent) {
    const { state: { config, paused } } = this;
    config.preserveItems = true;
    this.setState('paused', !paused);
    if (paused && !this.isMoving) {
        this.move(RIGHT);
    }
    this.emit(`carousel-${paused ? 'play' : 'pause'}`, { originalEvent });
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
        config.skipScrolling = true;
        config.preserveItems = true;
        this.setState('index', closest);
        this.emit('carousel-scroll', { index: closest });
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

    // When we are in autoplay mode we overshoot the desired index to land on a clone
    // of one of the ends. Then after the transition is over we update to the proper position.
    if (autoplayInterval) {
        if (delta === RIGHT && nextIndex < index) {
            // Transitions to one slide before the beginning.
            offsetOverride = -slideWidth - gap;

            // Move the items in the last slide to be before the first slide.
            for (let i = Math.ceil(itemsPerSlide + peek); i--;) {
                const item = items[items.length - i - 1];
                item.transform = `translateX(${(getMaxOffset(state) + slideWidth + gap) * -1}px)`;
            }
        } else if (delta === LEFT && nextIndex > index) {
            // Transitions one slide past the end.
            offsetOverride = getMaxOffset(state) + slideWidth + gap;

            // Moves the items in the first slide to be after the last slide.
            for (let i = Math.ceil(itemsPerSlide + peek); i--;) {
                const item = items[i];
                item.transform = `translateX(${(getMaxOffset(state) + slideWidth + gap)}px)`;
            }
        }

        config.offsetOverride = offsetOverride;
    }

    this.setState('index', nextIndex);
    this.once('carousel-update', () => {
        this.isMoving = false;

        if (offsetOverride !== undefined) {
            // If we are in autoplay mode and went outside of the normal offset
            // We make sure to restore all of the items that got moved around.
            items.forEach(item => { item.transform = undefined; });
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
            item = items[i += delta];
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
 * Checks if an element is using native scrolling.
 *
 * @param {HTMLElement} el the element to check
 * @return {boolean}
 */
function isNativeScrolling(el) {
    return getComputedStyle(el).overflowX !== 'visible';
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onRender,
    onBeforeUpdate: cleanupAsync,
    onBeforeDestroy: cleanupAsync,
    move,
    handleMove,
    handleDotClick,
    handleStartInteraction,
    handleEndInteraction,
    togglePlay
});
