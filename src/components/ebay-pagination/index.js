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

    for (let i = 0; i < inputItems.length; ++i) {
        const item = inputItems[i];
        const href = item.href;
        const current = item.current;
        const tempItem = {
            htmlAttributes: processHtmlAttributes(item),
            style: item.style,
            renderBody: item.renderBody,
            href,
            current
        };

        if (item.type === 'previous') {
            prevItem = tempItem;
            prevItem.class = ['pagination__previous', item.class];
            prevItem.disabled = item.disabled;
            continue;
        } else if (item.type === 'next') {
            nextItem = tempItem;
            nextItem.class = ['pagination__next', item.class];
            nextItem.disabled = item.disabled;
            continue;
        } else {
            tempItem.class = ['pagination__item', item.class];
            tempItem.current = item.current;
        }

        items.push(tempItem);
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        classes: ['pagination', input.class],
        style: input.style,
        nextItem: nextItem || { class: 'pagination__next', disabled: true, htmlAttributes: {} },
        prevItem: prevItem || { class: 'pagination__previous', disabled: true, htmlAttributes: {} },
        items,
        a11yPreviousText: input.a11yPreviousText || 'Previous page',
        a11yNextText: input.a11yNextText || 'Next page',
        a11yCurrentText: input.a11yCurrentText || 'Results Pagination - Page 1'
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    this.pageContainerEl = this.el.querySelector('.pagination__items');
    this.pageEls = this.pageContainerEl.children;
    this.containerEl = this.el;
    this.previousPageEl = this.el.querySelector('.pagination__previous');
    this.nextPageEl = this.el.querySelector('.pagination__next');
    this.subscribeTo(eventUtils.resizeUtil).on('resize', refresh.bind(this));
    this.timeoutRef = 0;
    this.refresh();
}

function onBeforeUpdate() {
    clearTimeout(this.timeoutRef);
}

function onDestroy() {
    clearTimeout(this.timeoutRef);
}

function onUpdate() {
    this.timeoutRef = setTimeout(this.refresh.bind(this), 0);
}

function refresh() {
    let current = 0;
    for (let i = 0; i < this.state.items.length; i++) {
        if (this.state.items[i].current) {
            current = i;
        } else {
            // remove all hidden attribues to get accurate widths
            this.pageEls[i].removeAttribute('hidden');
        }
    }
    const totalPages = this.pageEls.length;
    const pageNumWidth = this.pageEls[current].offsetWidth + constants.margin;
    const containerWidth = this.containerEl.offsetWidth - pageNumWidth * 2;
    const numPagesAllowed = Math.floor((containerWidth) / (pageNumWidth));
    const adjustedNumPages = Math.min(constants.maxPagesAllowed - 1,
        Math.max(numPagesAllowed, constants.minPagesRequired));

    let start = 0;
    let end = adjustedNumPages;
    const rangeLeft = Math.floor(adjustedNumPages * 0.5);
    const rangeRight = Math.floor(adjustedNumPages * 0.5);

    start = current - rangeLeft;
    end = current + rangeRight;
    if (end > totalPages) {
        start -= (end - totalPages);
    }

    if (totalPages < constants.maxPagesAllowed) {
        end = totalPages;
    }

    if (totalPages - current < rangeRight) {
        start -= (rangeRight - (totalPages - current));
    }

    if (start < 0) {
        end -= start;
        start = 0;
    }

    if (end - start < constants.minPagesRequired && end === totalPages && start > 0) {
        start = end - constants.minPagesRequired;
    }

    for (let i = 0; i < totalPages; i++) {
        if (i < start || i > end) {
            this.pageEls[i].setAttribute('hidden', true);
        } else {
            this.pageEls[i].removeAttribute('hidden');
        }
    }
}

/**
 * Handle normal mouse click for item, next page and previous page respectively.
 * @param {MouseEvent} event
 */
function handlePageClick(originalEvent) {
    const target = originalEvent.target;
    emitAndFire(this, 'pagination-select', {
        originalEvent,
        el: target,
        value: target.innerText
    });
}

function handleNextPage(originalEvent) {
    if (!this.state.nextItem.disabled) {
        emitAndFire(this, 'pagination-next', {
            originalEvent,
            el: this.nextPageEl
        });
    }
}

function handlePreviousPage(originalEvent) {
    if (!this.state.prevItem.disabled) {
        emitAndFire(this, 'pagination-previous', {
            originalEvent,
            el: this.previousPageEl
        });
    }
}

/**
 * Handle a11y for item, next page and previous page respectively.
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
    onUpdate,
    onBeforeUpdate,
    onDestroy,
    refresh,
    handlePageClick,
    handleNextPage,
    handlePreviousPage,
    handlePageKeyDown,
    handleNextPageKeyDown,
    handlePreviousPageKeyDown,
    getInitialState,
    getTemplateData
});
