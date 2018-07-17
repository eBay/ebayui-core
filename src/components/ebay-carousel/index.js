const focusables = require('makeup-focusables');
const resizeUtil = require('../../common/event-utils').resizeUtil;
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const onScrollEnd = require('./utils/on-scroll-end');
const scrollTransition = require('./utils/scroll-transition');
const template = require('./template.marko');

// Used for carousel slide direction.
const LEFT = -1;
const RIGHT = 1;

function getInitialState(input) {
    const state = {
        config: {}, // A place to store values that should not trigger an update by themselves.
        gap: input.gap || 16,
        noDots: input.noDots,
        index: parseInt(input.index, 10) || 0,
        classes: ['carousel', input.class],
        itemsPerSlide: parseInt(input.itemsPerSlide, 10) || undefined,
        accessibilityPrev: input.accessibilityPrev || 'Previous Slide',
        accessibilityNext: input.accessibilityNext || 'Next Slide',
        accessibilityStatus: input.accessibilityStatus || 'Showing Slide {currentSlide} of {totalSlides} - Carousel',
        accessibilityCurrent: input.accessibilityCurrent || 'Current Slide {currentSlide} - Carousel',
        accessibilityOther: input.accessibilityOther || 'Slide {slide} - Carousel',
        accessibilityPause: input.accessibilityPause || 'Pause - Carousel',
        accessibilityPlay: input.accessibilityPlay || 'Play - Carousel',
        htmlAttributes: processHtmlAttributes(input),
        items: (input.items || []).map(item => ({
            htmlAttributes: processHtmlAttributes(item),
            renderBody: item.renderBody
        }))
    };

    const { items, itemsPerSlide } = state;
    if (itemsPerSlide) {
        state.classes.push('carousel--slides');
        // Remove any extra items when using explicit itemsPerSlide.
        items.length -= items.length % itemsPerSlide;
        // Only allow autoplay option for discrete carousels.
        if (input.autoplay) {
            state.autoplayInterval = parseInt(input.autoplay, 10) || 4000;
            state.classes.push('carousel__autoplay');
            state.paused = input.paused;
        }
    }

    return state;
}

function getTemplateData(state) {
    let { index } = state;
    const { offsetOverride, autoplayInterval, items, itemsPerSlide, slideWidth, gap } = state;
    const hasOverride = offsetOverride !== undefined;
    const totalItems = items.length;
    index %= totalItems || 1; // Ensure index is within bounds.
    index -= index % (itemsPerSlide || 1); // Round index to the nearest valid slide index.
    state.index = Math.abs(index); // Ensure positive and save back to state.
    const offset = getOffset(state);
    const prevControlDisabled = !autoplayInterval && offset === 0;
    const nextControlDisabled = !autoplayInterval && offset === getMaxOffset(state);
    const bothControlsDisabled = prevControlDisabled && nextControlDisabled;
    let slide, itemWidth, totalSlides, accessibilityStatus;

    if (itemsPerSlide) {
        slide = getSlide(state);
        itemWidth = `calc(${100 / itemsPerSlide}% - ${(itemsPerSlide - 1) * gap / itemsPerSlide}px)`;
        totalSlides = getSlide(state, items.length);
        accessibilityStatus = state.accessibilityStatus
            .replace('{currentSlide}', slide + 1)
            .replace('{totalSlides}', totalSlides);
    } else {
        itemWidth = 'auto';
    }

    items.forEach((item, i) => {
        const { htmlAttributes: { style }, transform } = item;
        const marginRight = i !== items.length && `${gap}px`;

        // Account for users providing a style string or object for each item.
        if (typeof style === 'string') {
            item.style = `${style};flex-basis:${itemWidth};margin-right:${marginRight};transform:${transform}`;
        } else {
            item.style = Object.assign({}, style, {
                'flex-basis': itemWidth,
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

    const data = Object.assign({}, state, {
        items,
        slide,
        offset: hasOverride ? state.offsetOverride : offset,
        disableTransition: hasOverride,
        totalSlides,
        accessibilityStatus,
        prevControlDisabled,
        nextControlDisabled,
        bothControlsDisabled
    });

    return data;
}

function init() {
    const { state: { config, autoplayInterval } } = this;
    this.listEl = this.getEl('list');
    this.nextEl = this.getEl('next');
    this.containerEl = this.getEl('container');
    this.emitUpdate = emitUpdate.bind(this);
    this.subscribeTo(resizeUtil).on('resize', onRender.bind(this));
    observer.observeRoot(this, ['index']);
    if (autoplayInterval) observer.observeRoot(this, ['paused']);

    if (!autoplayInterval && getComputedStyle(this.listEl).getPropertyValue('overflow-x') !== 'visible') {
        config.nativeScrolling = true;
    } else {
        this.subscribeTo(this.listEl).on('transitionend', this.emitUpdate);
    }
}

function onRender() {
    const { containerEl, listEl, state } = this;
    const { config, items, autoplayInterval, paused, offsetOverride } = state;
    const hasOverride = offsetOverride !== undefined;

    // Do nothing for empty carousels.
    if (!items.length) return;

    // When there is an offset override (used for infinite scroll) we reset it
    // after rendering to restore the expected carousel state.
    if (hasOverride) {
        config.preserveItems = true;
        this.renderFrame = requestAnimationFrame(() => this.setState('offsetOverride', undefined));
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
            const offset = hasOverride ? offsetOverride : getOffset(state);
            // Listen for future scroll events and snap to the closest point.
            this.cancelScrollHandler = onScrollEnd(listEl, handleScrollEnd.bind(this));
            // Animate to the new scrolling position and emit update events afterward.
            this.cancelScrollTransition = scrollTransition(listEl, offset, this.emitUpdate);
        }

        if (autoplayInterval && !paused) {
            this.autoplayTimeout = setTimeout(() => this.move(RIGHT), autoplayInterval);
        }

        return;
    }

    // Otherwise recalculates the items / slide sizes.
    this.renderFrame = requestAnimationFrame(() => {
        const { width: containerWidth } = containerEl.getBoundingClientRect();
        const { left: currentLeft } = listEl.firstElementChild.getBoundingClientRect();

        this.setStateDirty('slideWidth', containerWidth);
        config.preserveItems = true;

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
    if (this.cancelScrollHandler) this.cancelScrollHandler();
    if (this.cancelScrollTransition) this.cancelScrollTransition();
    this.cancelScrollHandler = this.cancelScrollTransition = undefined;
}

function emitUpdate() {
    const { state: { items } } = this;
    emitAndFire(this, 'carousel-update', {
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
    if (this.isMoving) return;
    const { state } = this;
    const direction = parseInt(target.getAttribute('data-direction'), 10);
    const nextIndex = this.move(direction);
    const slide = getSlide(state, nextIndex);
    emitAndFire(this, 'carousel-slide', { slide: slide + 1, originalEvent });
    emitAndFire(this, `carousel-${direction === 1 ? 'next' : 'prev'}`, { originalEvent });
}

/**
 * Moves the carousel to the slide at `data-slide` for the clicked element if possible.
 *
 * @param {MouseEvent} originalEvent
 * @param {HTMLElement} target
 */
function handleDotClick(originalEvent, target) {
    const { state: { config, itemsPerSlide } } = this;
    const slide = parseInt(target.getAttribute('data-slide'), 10);
    config.preserveItems = true;
    this.setState('index', slide * itemsPerSlide);
    emitAndFire(this, 'carousel-slide', { slide: slide + 1, originalEvent });
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
    if (paused) this.move(RIGHT);
    emitAndFire(this, `carousel-${paused ? 'play' : 'pause'}`, { originalEvent });
}

/**
 * Find the closest item index to the scroll offset and triggers an update.
 *
 * @param {number} scrollLeft The current scroll position of the carousel.
 */
function handleScrollEnd(scrollLeft) {
    if (this.cancelScrollTransition) {
        this.cancelScrollTransition();
        this.cancelScrollTransition = undefined;
    }

    const { state } = this;
    const { config, items } = state;

    // Find the closest item using a binary search.
    let start = 0;
    let end = items.length - 1;
    let remaining;
    let closest;

    while (end - start > 1) {
        remaining = end - start;
        const middle = start + Math.floor(remaining / 2);
        if (scrollLeft < items[middle].left) end = middle;
        else start = middle;
    }

    if (remaining === 0) {
        closest = start;
    } else {
        const deltaStart = Math.abs(scrollLeft - items[start].left);
        const deltaEnd = Math.abs(scrollLeft - items[end].left);
        closest = deltaStart < deltaEnd ? start : end;
    }

    const closestOffset = items[closest].left;
    const maxOffset = getMaxOffset(state);

    // If we are closer to the end than the closest item, then we just go to the end.
    if (Math.abs(maxOffset - scrollLeft) < Math.abs(closestOffset - scrollLeft)) {
        closest = items.length - 1;
    }

    // Always update with the new index to ensure the scroll animations happen.
    config.preserveItems = true;
    this.setStateDirty('index', closest);
}

/**
 * Causes the carousel to move to the provided index.
 *
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number} the updated index.
 */
function move(delta) {
    const { state } = this;
    const { index, items, itemsPerSlide, autoplayInterval, slideWidth, gap, config } = state;
    const nextIndex = getNextIndex(state, delta);
    let offsetOverride;

    config.preserveItems = true;
    this.isMoving = true;

    // When we are in autoplay mode we overshoot the desired index to land on a clone
    // of one of the ends. Then after the transition is over we update to the proper position.
    if (autoplayInterval) {
        if (delta === RIGHT && nextIndex < index) {
            // Transitions to one slide before the beginning.
            offsetOverride = -slideWidth;

            // Move the items in the last slide to be before the first slide.
            for (let i = itemsPerSlide; i--;) {
                const item = items[items.length - i - 1];
                item.transform = `translateX(${(getMaxOffset(state) + slideWidth + gap) * -1}px)`;
            }
        } else if (delta === LEFT && nextIndex > index) {
            // Transitions one slide past the end.
            offsetOverride = getMaxOffset(state) + slideWidth;

            // Moves the items in the first slide to be after the last slide.
            for (let i = itemsPerSlide; i--;) {
                const item = items[i];
                item.transform = `translateX(${(getMaxOffset(state) + slideWidth + gap)}px)`;
            }
        }

        this.setState('offsetOverride', offsetOverride);
    }

    this.setState('index', nextIndex);
    this.once('carousel-update', () => {
        this.isMoving = false;

        if (offsetOverride !== undefined) {
            // If we are in autoplay mode and went outside of the normal offset
            // We make sure to restore all of the items that got moved around.
            items.forEach(item => { item.transform = undefined; });
            config.preserveItems = true;
            this.setStateDirty('items');
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
    if (!items.length) return 0;
    return Math.min(items[index].left, getMaxOffset(state)) || 0;
}

/**
 * Given the current widget state, finds the last valid offset.
 *
 * @param {object} state The widget state.
 * @return {number}
 */
function getMaxOffset({ items, slideWidth }) {
    if (!items.length) return 0;
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
    if (!itemsPerSlide) return;
    return Math.ceil(i / itemsPerSlide);
}

/**
 * Calculates the next valid index in a direction.
 *
 * @param {object} state The widget state.
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number}
 */
function getNextIndex({ index, items, slideWidth }, delta) {
    let i = index;
    let item;

    // If going backward from 0, we go to the end.
    if (delta === LEFT && i === 0) return items.length - 1;

    // Find the index of the next item that is not fully in view.
    do item = items[i += delta]; while (item && item.fullyVisible);

    // If going right, then we just want the next item not fully in view.
    if (delta === RIGHT) return i % items.length;

    // If going left, go as far left as possible while keeping this item fully in view.
    const targetOffset = item.right - slideWidth;
    do item = items[--i]; while (item && item.left >= targetOffset);
    return i + 1;
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
    togglePlay
});
