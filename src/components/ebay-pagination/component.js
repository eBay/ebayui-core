import * as eventUtils from '../../common/event-utils';
import { getMaxWidth } from '../../common/dom';
const MAX_PAGES = 9;
const MIN_PAGES = 5;

export default {
    /**
     * Handle normal mouse click for item, next page and previous page respectively.
     * @param {MouseEvent} originalEvent
     */
    handlePageNumberClick(index, originalEvent, el) {
        this.emit('select', {
            el,
            originalEvent,
            value: el.innerText,
            index,
        });
    },

    handleMenuPageNumber({ originalEvent, el }) {
        const index = parseInt(el.getAttribute('data-page-number'), 10);
        this.emit('select', {
            el,
            originalEvent,
            value: el.innerText,
            index,
        });
        // Have to set timeout becasue menu will also trigger focus back to menu container
        setTimeout(() => this.getEl('pageItem[]', index).focus(), 0);
    },

    handleNextPageClick(originalEvent, el) {
        if (!el.hasAttribute('aria-disabled')) {
            this.emit('next', {
                el,
                originalEvent,
            });
        }
    },

    handlePreviousPageClick(originalEvent, el) {
        if (!el.hasAttribute('aria-disabled')) {
            this.emit('previous', {
                el,
                originalEvent,
            });
        }
    },

    onCreate() {
        this.state = { maxItems: 0 };
    },

    onMount() {
        this._calculateMaxItems();
        this.subscribeTo(eventUtils.resizeUtil).on('resize', this._calculateMaxItems.bind(this));
    },

    getItemTag(item) {
        if (item.variant) {
            return item.variant === 'link' ? 'a' : 'button';
        }
        return !!item.href ? 'a' : 'button';
    },

    /**
     * Calculates the start and end offsets given the current maximum items
     * that can be displayed.
     */
    _getVisibleRange(items) {
        const { state, input } = this;
        const { maxItems } = state;
        const { variant } = input;
        const hasDots = variant === 'show-last' || variant === 'overflow';
        const hasLeadingDots = variant === 'overflow';
        const hasOverflow = variant === 'overflow';
        const lastIndex = items.length - 1;
        const dotsIndex = hasDots ? lastIndex : -1;
        const leadingDotsIndex = hasLeadingDots ? 1 : -1;
        let hideDots = false;
        let hideLeadingDots = false;

        if (!maxItems) {
            return {
                start: 0,
                end: lastIndex,
                hideDots: true,
                dotsIndex,
                leadingDotsIndex,
                hasOverflow,
            };
        }

        const i = items.findIndex((item) => item.current);
        const range = Math.floor(maxItems / 2);
        let start = i - range;
        let end = i + range;

        if (start <= 0) {
            end = maxItems - 1;
            start = 0;
        } else if (end >= lastIndex) {
            end = lastIndex;
            start = lastIndex - (maxItems - 1);
        } else if (maxItems % 2 === 0) {
            start++;
        }

        if (hasDots) {
            if (i + range >= lastIndex || end >= lastIndex) {
                hideDots = true;
            } else if (i <= end - 2) {
                end -= 2;
            } else {
                start += 1;
                end -= 1;
            }
        }

        if (hasLeadingDots) {
            if (i - range <= 0) {
                hideLeadingDots = true;
            } else if (i >= start - 1) {
                start += 2;
            } else {
                end -= 1;
                start -= 1;
            }
        }

        return { start, end, hideDots, dotsIndex, hasOverflow, leadingDotsIndex, hideLeadingDots };
    },

    _calculateMaxItems() {
        const { input, state } = this;
        const items = input.items || [];

        if (!items.some((item) => !item.type)) {
            return;
        }

        const itemContainer = this.getEl('items');
        const root = this.getEl('root');
        const itemWidth =
            this._itemWidth || // Cache the item width since it should be static.
            (this._itemWidth = itemContainer.firstElementChild.offsetWidth);
        // subtract 2 from the rounded results to take into account previous/next page buttons
        state.maxItems = Math.max(
            MIN_PAGES,
            Math.min(MAX_PAGES, Math.floor(getMaxWidth(root) / itemWidth) - 2)
        );
    },
};
