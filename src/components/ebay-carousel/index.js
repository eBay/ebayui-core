const throttle = require('lodash.throttle');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

const constants = {
    classes: {
        list: 'carousel__list'
    },
    types: {
        discrete: 'discrete',
        continuous: 'continuous'
    },
    margin: 8 // matches the css applied to each item
};
const defaults = {
    index: 0,
    type: constants.types.continuous
};

function getInitialState(input) {
    const items = (input.items || []).map((item) => ({
        htmlAttributes: processHtmlAttributes(item),
        renderBody: item.renderBody
    }));
    const index = parseInt(input.index) || defaults.index;
    const type = input.type || defaults.type;
    return {
        index,
        type,
        prevControlDisabled: index === 0,
        nextControlDisabled: false,
        ariaLabelPrev: input.ariaLabelPrev,
        ariaLabelNext: input.ariaLabelNext,
        classes: ['carousel', `carousel--${type}`, input.class],
        htmlAttributes: processHtmlAttributes(input),
        items
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.itemCache = [];
    this.setupItems();
    this.bindEventListeners();
    observer.observeRoot(this, ['index']);
    this.triggerItemSizeCaching();
    this.performSlide(this.state.index);
}

function update_index(newIndex) { // eslint-disable-line camelcase
    this.performSlide(parseInt(newIndex));
}

function setupItems() {
    this.listEl = this.el.querySelector(`.${constants.classes.list}`);
    this.childrenEls = this.listEl.children;
    this.setState('totalItems', this.childrenEls.length);
    this.updateContainerSize();
}

function bindEventListeners() {
    this.subscribeTo(window).on('resize', throttle(() => {
        this.updateContainerSize();
        this.triggerItemSizeCaching(true);
        this.performSlide(parseInt(this.state.index));
    }));
}

function handleNext() {
    emitAndFire(this, 'carousel-next');

    const lastIndex = this.state.totalItems - 1;
    let newIndex = -1;

    if (this.state.index === lastIndex) {
        return;
    }

    if (this.state.type === constants.types.continuous) {
        newIndex = this.state.index + this.calculateScrollOffset(this.state.index, 1);
    } else if (this.state.type === constants.types.discrete) {
        newIndex = this.state.index + 1;
    }

    if (newIndex > lastIndex) {
        newIndex = lastIndex;
    }

    this.setState('index', newIndex);
}

function handlePrev() {
    emitAndFire(this, 'carousel-prev');

    const firstIndex = 0;
    let newIndex = -1;

    if (this.state.index === firstIndex) {
        return;
    }

    if (this.state.type === constants.types.continuous) {
        newIndex = this.state.index - this.calculateScrollOffset(this.state.index, -1);
    } else if (this.state.type === constants.types.discrete) {
        newIndex = this.state.index - 1;
    }

    if (newIndex < firstIndex) {
        newIndex = firstIndex;
    }

    this.setState('index', newIndex);
}

function performSlide(index) {
    if (index >= 0 && index < this.state.totalItems) {
        this.moveToIndex(index);
        this.updateControls();
    }
}

/**
 * Update button attributes based on current position
 */
function updateControls() {
    let stopValue;
    this.setState('prevControlDisabled', this.state.index === 0);
    if (this.state.type === constants.types.continuous) {
        stopValue = this.state.totalItems;
    } else if (this.state.type === constants.types.discrete) {
        stopValue = this.state.totalItems - 1;
    }
    this.setState('nextControlDisabled', this.state.stop === stopValue);
    this.update(); // FIXME: why won't it rerender on its own?
}

/**
 * Calculate the number of cards to scroll from startIndex based on their sizes
 * @param {Number} startIndex: Index position to calculate from
 * @param {Number} direction: 1 for forward, -1 for backward
 */
function calculateScrollOffset(startIndex, direction) {
    let increment = 0;
    let index = startIndex;

    if (startIndex < 0) {
        return increment;
    }

    const containerSize = this.getContainerSize();

    while (containerSize.width > 0) {
        if (index > this.state.totalItems || index < 0) {
            break;
        }
        containerSize.width = containerSize.width - this.getSingleItemSize(index).width;
        increment += 1;
        index += direction;
    }

    return increment - 1;
}

/**
 * Move carousel position to an index
 * @param {Number} index
 */
function moveToIndex(index) {
    if (index < 0) {
        this.setState('index', 0);
        return;
    }

    if (index >= this.state.totalItems) {
        this.setState('index', this.state.totalItems - 1);
        return;
    }

    const endIndex = index + this.calculateScrollOffset(index, 1) + 1;
    this.setState('stop', endIndex - 1);

    if (endIndex > this.state.totalItems) {
        this.setState('stop', this.state.totalItems);
    }

    // TODO (look into this) case where items are smaller than available width
    if (this.state.index === 0 && this.state.stop === this.state.totalItems) {
        return;
    }

    const coords = this.getCoordinates(index);
    const offset = this.getOffset(coords, index, endIndex);
    coords.x = coords.x || 0;
    offset.x = offset.x || 0;
    this.listEl.style.transform = `translateX(${(-1 * coords.x) + offset.x}px)`;
    emitAndFire(this, 'carousel-translate');
}

/**
 * Get the offset that the carousel needs to push forward by based on index
 */
function getOffset({ x, y }, startIndex, endIndex) {
    const offset = { x: 0, y: 0 };
    const endCoords = this.getCoordinates(endIndex);

    if (endIndex > (this.state.totalItems) && (startIndex < this.state.totalItems)) {
        const containerSize = this.containerSize;

        offset.x = containerSize.width - (endCoords.x - x) + constants.margin;
        offset.y = containerSize.height - y;
    }

    return offset;
}

/**
 * Get the coordinates of a carousel item based on index
 */
function getCoordinates(index) {
    const itemSize = this.getItemSizes(index);

    if (!itemSize) {
        return;
    }

    return {
        x: itemSize.width,
        y: 0
    };
}

/**
 * Get the aggregate size of all items in the carousel until this index
 */
function getItemSizes(index) {
    const size = { width: 0, height: 0 };

    if (!index || (index < 0)) {
        return size;
    }
    for (let i = 0; i < index; i++) {
        const rect = this.getSingleItemSize(i);
        const itemMargin = constants.margin;

        size.width += rect.width + itemMargin;
        size.height = rect.heigth || 0;
    }
    return size;
}

/**
 * Trigger a one time caching of all elements within the carousel
 * @params {Boolean} forceUpdate: Updates the cache with new values
 */
function triggerItemSizeCaching(forceUpdate) {
    for (let i = 0; i < this.state.totalItems; i++) {
        this.getSingleItemSize(i, forceUpdate);
    }
}

/**
 * Get single item size based on index
 * @params {Number} index: Index of the carousel item
 * @params {Boolean} forceUpdate: Trigger fetch update of cache values
 */
function getSingleItemSize(index, forceUpdate) {
    if (this.itemCache && this.itemCache[index] && !forceUpdate) {
        return this.itemCache[index];
    } else if (index < this.state.totalItems && index >= 0) {
        const rect = this.childrenEls[index].getBoundingClientRect();
        this.itemCache[index] = { width: rect.width || 0, height: rect.height || 0 };
        return this.itemCache[index];
    }

    return { width: 0, height: 0 };
}

function updateContainerSize() {
    this.containerSize = this.getContainerSize();
}

function getContainerSize() {
    const rect = this.listEl.getBoundingClientRect();
    return {
        width: rect.width || 0,
        height: rect.width || 0
    };
}

module.exports = require('marko-widgets').defineComponent({
    template,
    init,
    getInitialState,
    getTemplateData,
    update_index,
    setupItems,
    bindEventListeners,
    handleNext,
    handlePrev,
    performSlide,
    updateControls,
    calculateScrollOffset,
    moveToIndex,
    getOffset,
    getCoordinates,
    getItemSizes,
    triggerItemSizeCaching,
    getSingleItemSize,
    updateContainerSize,
    getContainerSize
});

module.exports.privates = { constants, defaults };
