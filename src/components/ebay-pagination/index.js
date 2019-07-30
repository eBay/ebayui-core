const processHtmlAttributes = require('../../common/html-attributes');
const eventUtils = require('../../common/event-utils');
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
    this.pageContainerEl.style.flexWrap = 'nowrap';
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
        }
        this.pageEls[i].removeAttribute('hidden');
    }

    const totalPages = this.pageEls.length;
    const pageNumWidth = this.pageEls[0].children[0].offsetWidth + constants.margin;
    const numPagesAllowed = (((this.pageContainerEl.offsetWidth) / pageNumWidth));
    const adjustedNumPages = Math.floor(Math.min(constants.maxPagesAllowed,
        Math.max(numPagesAllowed, constants.minPagesRequired)));

    let start = 0;
    let end = adjustedNumPages;
    let rangeLeft = Math.floor(adjustedNumPages * 0.5);
    const rangeRight = Math.floor(adjustedNumPages * 0.5);

    if (rangeLeft + rangeRight + 1 > adjustedNumPages) {
        rangeLeft -= 1;
    }

    start = current - rangeLeft;
    end = current + rangeRight;

    if (totalPages < constants.maxPagesAllowed) {
        end = totalPages;
    }

    if (current + rangeRight >= totalPages) {
        end = totalPages;
        start = end - adjustedNumPages;
    }

    if (start <= 0) {
        end = adjustedNumPages - 1;
        start = 0;
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
    this.emit('pagination-select', {
        originalEvent,
        el: target,
        value: target.innerText
    });
}

function handleNextPage(originalEvent) {
    if (!this.state.nextItem.disabled) {
        this.emit('pagination-next', {
            originalEvent,
            el: this.nextPageEl
        });
    }
}

function handlePreviousPage(originalEvent) {
    if (!this.state.prevItem.disabled) {
        this.emit('pagination-previous', {
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
