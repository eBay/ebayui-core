const focusables = require('makeup-focusables');
const resizeUtil = require('../../common/event-utils').resizeUtil;
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const constants = {
    types: {
        discrete: 'discrete',
        continuous: 'continuous'
    },
    margin: 16 // matches the css applied to each item
};

function getInitialState(input) {
    let items = (input.items || []).map(item => ({
        hidden: false,
        htmlAttributes: processHtmlAttributes(item),
        renderBody: item.renderBody
    }));
    const type = input.type || constants.types.continuous;
    const isDiscrete = type === constants.types.discrete;
    let itemsPerSlide;
    let totalSlides;

    if (isDiscrete) {
        itemsPerSlide = parseInt(input.itemsPerSlide) || 1;
        totalSlides = parseInt(items.length / itemsPerSlide);

        // remove trailing items that don't fit equally in slides
        items = items.filter((item, i) => i < totalSlides * itemsPerSlide);
    }

    return {
        index: parseInt(input.index) || 0,
        type,
        isContinuous: type === constants.types.continuous,
        isDiscrete,
        itemsPerSlide,
        totalSlides,
        lastIndex: items.length - 1,
        slide: parseInt(input.slide) || 1,
        activeDot: isDiscrete && 1,
        prevControlDisabled: true,
        nextControlDisabled: false,
        bothControlsDisabled: false,
        accessibilityPrev: input.accessibilityPrev || 'Previous Slide',
        accessibilityNext: input.accessibilityNext || 'Next Slide',
        accessibilityStatus: input.accessibilityStatus || 'Showing Slide {currentSlide} of {totalSlides} - Carousel',
        accessibilityCurrent: input.accessibilityCurrent || 'Current Slide {currentSlide} - Carousel',
        accessibilityOther: input.accessibilityOther || 'Slide {slide} - Carousel',
        classes: ['carousel', `carousel--${type}`, isDiscrete && `carousel--discrete-${itemsPerSlide}`, input.class],
        translation: 0,
        htmlAttributes: processHtmlAttributes(input),
        items
    };
}

function getTemplateData(state) {
    if (state.isDiscrete) {
        state.statusText = state.accessibilityStatus
            .replace('{currentSlide}', state.slide)
            .replace('{totalSlides}', state.totalSlides);
    }
    return state;
}

function init() {
    this.itemCache = [];
    this.listEl = this.el.querySelector('.carousel__list');
    this.itemEls = this.listEl.children;
    this.activeIndex = 0;
    this.firstVisibleIndex = 0;
    this.lastVisibleIndex = 0;

    const containerEl = this.el.querySelector('.carousel__container');
    this.usesNativeScroll = window.getComputedStyle && window.getComputedStyle(containerEl)['overflow-x'] === 'scroll';
    if (this.state.isDiscrete) {
        observer.observeRoot(this, ['slide'], () => {
            this.simulateDotClick(this.state.slide);
        });
    } else if (this.state.isContinuous) {
        observer.observeRoot(this, ['index']);
    }

    this.subscribeTo(resizeUtil).on('resize', refresh.bind(this));
}

function onRender({ firstRender }) {
    if (firstRender) {
        this.refresh();
    } else {
        this.processIndexChange();
    }
}

function onDestroy() {
    cancelAnimationFrame(this.processMovementFrame);
}

function refresh() {
    this.calculateWidths(true);
    if (this.state.isDiscrete) {
        this.simulateDotClick(this.state.slide);
    }
    this.processMovement();
}

/**
 * High level function called for movement upon changing index (via UI and API)
 * Exits early if there was no actual change to index
 */
function processIndexChange() {
    // TODO: API manipulation is disabled in native scroll case
    if (this.usesNativeScroll) {
        return;
    }

    if (this.state.index > this.state.lastIndex) {
        this.setState('index', this.state.lastIndex);
    }

    if (this.containerWidth >= this.allItemsWidth || this.state.index < 0) {
        this.setState('index', 0);
    }

    const sameIndex = this.state.index === this.activeIndex;
    const isTranslated = (this.state.index === 0 && this.state.translation === 0) || this.state.translation !== 0;

    if (sameIndex && isTranslated) {
        return;
    }

    this.activeIndex = this.state.index;

    this.processMovement();
}

/**
 * Handle movement to current state.index
 */
function processMovement() {
    cancelAnimationFrame(this.processMovementFrame);
    this.processMovementFrame = requestAnimationFrame(() => {
        const oldFirstVisibleIndex = this.firstVisibleIndex;
        const oldLastVisibleIndex = this.lastVisibleIndex;
        this.moveToIndex(this.state.index);
        this.lastVisibleIndex = this.calculateLastVisibleIndex();
        this.setState('prevControlDisabled', this.state.index === 0);
        this.setState('nextControlDisabled', this.lastVisibleIndex === this.state.lastIndex);
        this.setState('bothControlsDisabled', this.state.prevControlDisabled && this.state.nextControlDisabled);

        // must calculate firstVisibleIndex after nextControlDisabled is set
        this.firstVisibleIndex = this.calculateFirstVisibleIndex();

        if (this.state.isDiscrete) {
            this.setState('activeDot', (this.lastVisibleIndex + 1) / this.state.itemsPerSlide);
        }

        if (this.firstVisibleIndex !== oldFirstVisibleIndex ||
            this.lastVisibleIndex !== oldLastVisibleIndex) {
            const visibleIndexes = [];
            for (let i = this.firstVisibleIndex; i <= this.lastVisibleIndex; i++) {
                visibleIndexes.push(i);
            }

            emitAndFire(this, 'carousel-update', { visibleIndexes });
        }

        this.state.items.forEach((item, i) => {
            item.hidden = (i < this.firstVisibleIndex || i > this.lastVisibleIndex);
        });
        this.setStateDirty('items');

        // update nested focusable elements via DOM (we don't control this content)
        // TODO: patch makeup-focusables to support more customized selectors?
        const hiddenItems = this.el.querySelectorAll('.carousel__list > li[aria-hidden="true"]') || [];
        const visibleItems = this.el.querySelectorAll('.carousel__list > li[aria-hidden="false"]') || [];
        hiddenItems.forEach(hiddenItem => {
            focusables(hiddenItem).forEach(focusable => focusable.setAttribute('tabindex', '-1'));
        });
        visibleItems.forEach(visibleItem => {
            focusables(visibleItem).forEach(focusable => focusable.removeAttribute('tabindex'));
        });
    });
}

/**
 * Move carousel position to an index
 */
function moveToIndex() {
    let translation = -1 * this.getWidthBetweenIndexes(0, this.state.index);
    const maxTranslation = -1 * (this.allItemsWidth - this.containerWidth);
    if (translation !== 0 && translation < maxTranslation) {
        translation = maxTranslation;
    }

    if (translation !== this.state.translation) {
        this.setState('translation', translation);
        emitAndFire(this, 'carousel-move');
    }
}

function calculateNextIndex() {
    return this.calculateLastVisibleIndex() + 1;
}

function calculatePrevIndex() {
    let index = this.state.index - 1;

    // check if we'll hit the left end
    const widthBeforeCurrentIndex = this.getWidthBetweenIndexes(0, this.state.index);
    if (widthBeforeCurrentIndex < this.containerWidth) {
        return 0;
    }

    if (this.state.nextControlDisabled) {
        index = this.calculateFirstVisibleIndex() - 1;
    }

    return this.widthLoop(index, -1) + 1;
}

function widthLoop(startIndex, direction) {
    let index = startIndex;
    let remainingWidth = this.containerWidth;

    while (remainingWidth > 0) {
        remainingWidth -= this.getItemWidth(index);
        if (index > this.state.lastIndex || index < 0 || remainingWidth < 0) {
            break;
        }
        remainingWidth -= constants.margin;
        index += direction;
    }

    return index;
}

function calculateFirstVisibleIndex() {
    if (!this.state.nextControlDisabled) {
        return this.state.index;
    }

    // if continuous carousel is all the way on right end, need to calculate manually
    return this.widthLoop(this.state.lastIndex, -1) + 1;
}

function calculateLastVisibleIndex() {
    return this.widthLoop(this.state.index, 1) - 1;
}

/**
 * Get the aggregate width of all items in the carousel between these indexes.
 * Calculation is from left edge of item at startIndex item until left edge of item at endIndex
 * @param {Integer} startIndex
 * @param {Integer} endIndex
 */
function getWidthBetweenIndexes(startIndex, endIndex) {
    let width = 0;
    for (let i = startIndex; i < endIndex; i++) {
        width += this.getItemWidth(i) + constants.margin;
    }

    // subtract trailing margin if we hit right end
    if (endIndex > this.state.lastIndex) {
        width -= constants.margin;
    }

    return width;
}

/**
 * Calculate and store widths of container and items
 * @params {Boolean} forceUpdate: Updates the cache with new values
 */
function calculateWidths(forceUpdate) {
    this.containerWidth = this.listEl.getBoundingClientRect().width;
    for (let i = 0; i <= this.state.lastIndex; i++) {
        this.getItemWidth(i, forceUpdate);
    }
    this.allItemsWidth = this.getWidthBetweenIndexes(0, this.state.lastIndex + 1);
}

/**
 * Get single item width based on index
 * @params {Integer} index: Index of the carousel item
 * @params {Boolean} forceUpdate: Trigger fetch update of cache values
 */
function getItemWidth(index, forceUpdate) {
    if (this.itemCache && this.itemCache[index] && !forceUpdate) {
        return this.itemCache[index];
    } else if (index >= 0 && index <= this.state.lastIndex) {
        this.itemCache[index] = this.itemEls[index].getBoundingClientRect().width;
        return this.itemCache[index];
    }

    return 0;
}

function handleNext(originalEvent) {
    if (!this.state.nextControlDisabled) {
        if (this.state.isDiscrete) {
            this.simulateDotClick(this.state.slide + 1);
        } else if (this.state.isContinuous) {
            this.setState('index', this.calculateNextIndex());
        }
        emitAndFire(this, 'carousel-next', { originalEvent });
    }
}

function handlePrev(originalEvent) {
    if (!this.state.prevControlDisabled) {
        if (this.state.isDiscrete) {
            this.simulateDotClick(this.state.slide - 1);
        } else if (this.state.isContinuous) {
            this.setState('index', this.calculatePrevIndex());
        }
        emitAndFire(this, 'carousel-prev', { originalEvent });
    }
}

// TODO: add carousel-dot event and remove simulated dot clicks
function handleDotClick(e) {
    const newSlide = parseInt(e.target.getAttribute('data-slide'));
    emitAndFire(this, 'carousel-slide', { slide: newSlide });
    this.setState('slide', newSlide);
    this.setState('index', (this.state.itemsPerSlide * (newSlide - 1)));
}

function simulateDotClick(slide) {
    if (slide >= 1 && slide <= this.state.totalSlides) {
        this.el.querySelector(`[data-slide="${slide}"]`).click();
    }
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    init,
    onRender,
    onDestroy,
    refresh,
    processIndexChange,
    processMovement,
    calculateNextIndex,
    calculatePrevIndex,
    moveToIndex,
    widthLoop,
    calculateFirstVisibleIndex,
    calculateLastVisibleIndex,
    getWidthBetweenIndexes,
    calculateWidths,
    getItemWidth,
    handleNext,
    handlePrev,
    handleDotClick,
    simulateDotClick
});

module.exports.privates = { constants };
