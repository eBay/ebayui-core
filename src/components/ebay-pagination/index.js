const processHtmlAttributes = require('../../common/html-attributes');
const eventUtils = require('../../common/event-utils');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

const constants = {
    indexForNavigation: 2,
    minPagesRequired: 5,
    maxPagesAllowed: 9,
    margin: 8
};

function getInitialState(input) {
    let prevItem;
    let nextItem;
    const items = [];
    const inputItems = input.items || [];
    const hijax = input.hijax || false;
    let role;

    if (hijax) {
        role = 'button';
    }

    for (let i = 0; i < inputItems.length; ++i) {
        const item = inputItems[i];
        const href = item.href;
        const current = item.current;

        const tempItem = {
            role,
            href,
            current: Boolean(current) || false,
            htmlAttributes: processHtmlAttributes(item),
            renderBody: item.renderBody
        };
        if (item.type === 'previous') {
            prevItem = tempItem;
            prevItem.class = 'pagination__previous';
            prevItem.disabled = Boolean(item.disabled) || !href;
            continue;
        } else if (item.type === 'next') {
            nextItem = tempItem;
            nextItem.class = 'pagination__next';
            nextItem.disabled = Boolean(item.disabled) || !href;
            continue;
        } else {
            tempItem.class = ['pagination__item', item.class];
        }
        items.push(tempItem);
    }

    return {
        hijax,
        nextItem: nextItem || { class: 'pagination__next', disabled: true },
        prevItem: prevItem || { class: 'pagination__previous', disabled: true },
        items,
        accessibilityPrev: input.accessibilityPrev || 'Previous page',
        accessibilityNext: input.accessibilityNext || 'Next page',
        accessibilityCurrent: input.accessibilityCurrent || 'Results Pagination - Page 1',
        classes: ['pagination', input.class],
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.pageContainerEl = this.el.querySelector('.pagination__items');
    this.pageEls = this.pageContainerEl.children;
    this.containerEl = this.el;
    this.subscribeTo(eventUtils.resizeUtil).on('resize', refresh.bind(this));
    this.refresh();
}

function refresh() {
    const containerWidth = this.containerEl.offsetWidth;
    const pageNumWidth = this.pageEls[0].offsetWidth + constants.margin;
    const numPagesAllowed = Math.floor(containerWidth / pageNumWidth) - constants.indexForNavigation;
    const adjustedNumPages = Math.min(constants.maxPagesAllowed,
        Math.max(numPagesAllowed, constants.minPagesRequired));
    const totalPages = this.pageEls.length;

    // Let's show all the pages that we can.
    for (let i = 5; i < adjustedNumPages && i < totalPages; ++i) {
        if (this.pageEls[i].hasAttribute('hidden')) {
            this.pageEls[i].removeAttribute('hidden');
        }
    }

    // Now that we are showing all the pages that we can, lets hide remaining pages.
    for (let i = adjustedNumPages; i < totalPages; ++i) {
        this.pageEls[i].setAttribute('hidden', true);
    }
}

/**
 * Handle normal mouse click for item, next page and previous page respectively.
 * @param {MouseEvent} event
 */
function handlePageClick(event) {
    eventUtils.preventDefaultIfHijax(event, this.state.hijax);
    emitAndFire(this, 'pagination-select', { el: event.target, value: event.target.innerText });
}

function handleNextPage(event) {
    eventUtils.preventDefaultIfHijax(event, this.state.hijax);
    emitAndFire(this, 'pagination-next', { el: getCorrectElement(event) });
}

function handlePreviousPage(event) {
    eventUtils.preventDefaultIfHijax(event, this.state.hijax);
    emitAndFire(this, 'pagination-previous', { el: getCorrectElement(event) });
}

/**
 * gets the correct target for pagination arrow button
 */
function getCorrectElement(event) {
    if (event.target.nodeName.toUpperCase() === 'SPAN') {
        return event.target.parentNode;
    }
    return event.target;
}

/**
 * Handle accessibility for item, next page and previous page respectively.
 * @param {KeyboardEvent} event
 */
function handlePageKeyDown(event) {
    eventUtils.handleActionKeydown(event, () => {
        this.handlePageClick(event);
    });
}

function handleNextPageKeyDown(event) {
    eventUtils.handleActionKeydown(event, () => {
        this.handleNextPage(event);
    });
}

function handlePreviousPageKeyDown(event) {
    eventUtils.handleActionKeydown(event, () => {
        this.handlePreviousPage(event);
    });
}

module.exports = require('marko-widgets').defineComponent({
    template,
    init,
    refresh,
    handlePageClick,
    handleNextPage,
    handlePreviousPage,
    getCorrectElement,
    handlePageKeyDown,
    handleNextPageKeyDown,
    handlePreviousPageKeyDown,
    getInitialState,
    getTemplateData
});
