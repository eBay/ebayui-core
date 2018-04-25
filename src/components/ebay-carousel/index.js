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
    let items = (input.items || []).map((item) => ({
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
        firstVisibleIndex: 0,
        lastVisibleIndex: 0,
        type,
        isContinuous: type === constants.types.continuous,
        isDiscrete,
        itemsPerSlide,
        totalSlides,
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
    this.lastIndex = this.itemEls.length - 1;

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
    this.refresh();
}

function refresh() {
    this.calculateWidths(true);
    if (this.state.isDiscrete) {
        this.simulateDotClick(this.state.slide);
    } else if (this.state.isContinuous) {
        this.performSlide();
    }
}

function update_index() { // eslint-disable-line camelcase
    this.performSlide();
}

function handleNext() {
    if (!this.state.nextControlDisabled) {
        if (this.state.isDiscrete) {
            this.simulateDotClick(this.state.slide + 1);
        } else if (this.state.isContinuous) {
            this.setState('index', this.calculateNextIndex());
        }
        emitAndFire(this, 'carousel-next');
    }
}

function handlePrev() {
    if (!this.state.prevControlDisabled) {
        if (this.state.isDiscrete) {
            this.simulateDotClick(this.state.slide - 1);
        } else if (this.state.isContinuous) {
            this.setState('index', this.calculatePrevIndex());
        }
        emitAndFire(this, 'carousel-prev');
    }
}

// TODO: add carousel-dot event and remove simulated dot clicks
function handleDotClick(e) {
    const newSlide = parseInt(e.target.getAttribute('data-slide'));
    emitAndFire(this, 'carousel-slide', { slide: newSlide });
    this.setState('slide', newSlide);
    this.setState('index', (this.state.itemsPerSlide * (newSlide - 1)));
    this.update_index(); // FIXME: why isn't this called from this.setState('index')?
}

function simulateDotClick(slide) {
    if (slide >= 1 && slide <= this.state.totalSlides) {
        this.el.querySelector(`[data-slide="${slide}"]`).click();
    }
}

function updateDots() {
    this.setState('activeDot', (this.state.lastVisibleIndex + 1) / this.state.itemsPerSlide);
}

/**
 * High level slide called for initialization and data change to index (via UI and API)
 * @param {Integer} index
 */
function performSlide() {
    // FIXME: API manipulation is disabled in native scroll case
    if (this.state.index >= 0 && this.state.index <= this.lastIndex && !this.usesNativeScroll) {
        const oldFirstVisibleIndex = this.state.firstVisibleIndex;
        const oldLastVisibleIndex = this.state.lastVisibleIndex;
        this.moveToIndex(this.state.index);
        this.setState('lastVisibleIndex', this.calculateLastVisibleIndex());
        this.setState('prevControlDisabled', this.state.index === 0);
        this.setState('nextControlDisabled', this.state.lastVisibleIndex === this.lastIndex);
        this.setState('bothControlsDisabled', this.state.prevControlDisabled && this.state.nextControlDisabled);

        // must calculate firstVisibleIndex after nextControlDisabled is set
        this.setState('firstVisibleIndex', this.calculateFirstVisibleIndex());

        if (this.state.firstVisibleIndex !== oldFirstVisibleIndex ||
            this.state.lastVisibleIndex !== oldLastVisibleIndex) {
            const visibleIndexes = [];
            for (let i = this.state.firstVisibleIndex; i <= this.state.lastVisibleIndex; i++) {
                visibleIndexes.push(i);
            }
            emitAndFire(this, 'carousel-update', { visibleIndexes });
        }

        this.state.items.forEach((item, i) => {
            item.hidden = (i < this.state.firstVisibleIndex || i > this.state.lastVisibleIndex);
        });
        this.setStateDirty('items');

        if (this.state.isDiscrete) {
            this.updateDots();
        }

        this.update(); // FIXME: why won't it rerender on its own?
    }

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
}

/**
 * Move carousel position to an index
 * @param {Integer} index
 */
function moveToIndex(index) {
    let translation = -1 * this.getWidthBetweenIndexes(0, index);
    const maxTranslation = -1 * (this.allItemsWidth - this.containerWidth);
    if (translation !== 0 && translation < maxTranslation) {
        translation = maxTranslation;
    }

    if (translation !== this.state.translation) {
        this.setState('translation', translation);
        emitAndFire(this, 'carousel-translate');
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
        if (index > this.lastIndex || index < 0 || remainingWidth < 0) {
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
    return this.widthLoop(this.lastIndex, -1) + 1;
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
    if (endIndex > this.lastIndex) {
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
    for (let i = 0; i <= this.lastIndex; i++) {
        this.getItemWidth(i, forceUpdate);
    }
    this.allItemsWidth = this.getWidthBetweenIndexes(0, this.lastIndex + 1);
}

/**
 * Get single item width based on index
 * @params {Integer} index: Index of the carousel item
 * @params {Boolean} forceUpdate: Trigger fetch update of cache values
 */
function getItemWidth(index, forceUpdate) {
    if (this.itemCache && this.itemCache[index] && !forceUpdate) {
        return this.itemCache[index];
    } else if (index >= 0 && index <= this.lastIndex) {
        this.itemCache[index] = this.itemEls[index].getBoundingClientRect().width;
        return this.itemCache[index];
    }

    return 0;
}

module.exports = require('marko-widgets').defineComponent({
    template,
    init,
    getInitialState,
    getTemplateData,
    update_index,
    refresh,
    handleNext,
    handlePrev,
    handleDotClick,
    simulateDotClick,
    performSlide,
    updateDots,
    calculateNextIndex,
    calculatePrevIndex,
    moveToIndex,
    widthLoop,
    calculateFirstVisibleIndex,
    calculateLastVisibleIndex,
    getWidthBetweenIndexes,
    calculateWidths,
    getItemWidth
});

module.exports.privates = { constants };
