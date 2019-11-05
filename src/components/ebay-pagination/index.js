const processHtmlAttributes = require('../../common/html-attributes');
const eventUtils = require('../../common/event-utils');
const template = require('./template.marko');

const constants = {
    indexForNavigation: 2,
    minPagesRequired: 3,
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
            htmlAttributes: processHtmlAttributes(item, [
                'class',
                'style',
                'current',
                'disabled',
                'href',
                'type',
                'role'
            ]),
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
        htmlAttributes: processHtmlAttributes(input, [
            'class',
            'style',
            'a11yPreviousText',
            'a11yNextText',
            'a11yCurrentText',
            'hijax',
            'items'
        ]),
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
    this.pageContainerEl.style.overflow = 'hidden';
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
    this.pageContainerEl.style.overflow = 'visible';
}

/**
 * Handle normal mouse click for item, next page and previous page respectively.
 * @param {MouseEvent} originalEvent
 */
function handlePageNumber(originalEvent, el) {
    if (!isSyntheticClick(originalEvent)) {
        this.emit('pagination-select', {
            el,
            originalEvent,
            value: el.innerText
        });
    }
}

function handleNextPage(originalEvent, el) {
    if (!this.state.nextItem.disabled && !isSyntheticClick(originalEvent)) {
        this.emit('pagination-next', {
            el,
            originalEvent
        });
    }
}

function handlePreviousPage(originalEvent, el) {
    if (!this.state.prevItem.disabled && !isSyntheticClick(originalEvent)) {
        this.emit('pagination-previous', {
            el,
            originalEvent
        });
    }
}

/**
 * Handle a11y for item, next page and previous page respectively.
 * @param {KeyboardEvent} originalEvent
 */
function handlePageNumberKeyDown(originalEvent, el) {
    eventUtils.handleActionKeydown(originalEvent, () => {
        this.handlePageNumber(originalEvent, el);
    });
}

function handleNextPageKeyDown(originalEvent, el) {
    eventUtils.handleActionKeydown(originalEvent, () => {
        this.handleNextPage(originalEvent, el);
    });
}

function handlePreviousPageKeyDown(originalEvent, el) {
    eventUtils.handleActionKeydown(originalEvent, () => {
        this.handlePreviousPage(originalEvent, el);
    });
}

function isSyntheticClick(event) {
    // Keydown events can fire a click event on buttons, which caused this component
    // to emit two events. Here we use the event.detail property to check that there was
    // actually a click. https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
    return event.type === 'click' && event.detail === 0;
}

module.exports = require('marko-widgets').defineComponent({
    template,
    init,
    onUpdate,
    onBeforeUpdate,
    onDestroy,
    refresh,
    handlePageNumber,
    handleNextPage,
    handlePreviousPage,
    handlePageNumberKeyDown,
    handleNextPageKeyDown,
    handlePreviousPageKeyDown,
    getInitialState,
    getTemplateData
});
