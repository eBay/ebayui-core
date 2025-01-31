import * as eventUtils from "../../common/event-utils";
import { getMaxWidth } from "../../common/dom";
import type { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";

const MAX_PAGES = 9;
const MIN_PAGES = 5;

export interface SelectEvent {
    el?: HTMLElement;
    originalEvent?: Event;
    value: string;
    index: number;
}

export interface NavigationEvent {
    el: HTMLElement;
    originalEvent: Event;
}

export interface Item extends Omit<Marko.HTML.Button, "type" | `on${string}`> {
    type?: "previous" | "next" | "page";
    current?: boolean;
    href?: string;
    variant?: "link" | "button";
}

interface PaginationInput extends Omit<Marko.HTML.Nav, `on${string}`> {
    item?: Marko.AttrTag<Item>;
    variant?: "show-range" | "show-last" | "overflow";
    "a11y-current-text"?: AttrString;
    "a11y-previous-text"?: AttrString;
    "a11y-next-text"?: AttrString;
    "on-select"?: (event: SelectEvent) => void;
    "on-next"?: (event: NavigationEvent) => void;
    "on-previous"?: (event: NavigationEvent) => void;
}

export interface Input extends WithNormalizedProps<PaginationInput> {}

interface State {
    maxItems: number;
}

class Pagination extends Marko.Component<Input, State> {
    declare _itemWidth: number;

    handlePageNumberClick(
        index: number,
        originalEvent: MouseEvent,
        el: HTMLElement,
    ) {
        this.emit("select", {
            el,
            originalEvent,
            value: el.innerText,
            index,
        } satisfies SelectEvent);
    }

    handleMenuPageNumber({
        originalEvent,
        el,
    }: {
        originalEvent?: Event;
        el?: HTMLElement;
    }) {
        const index = parseInt(el?.getAttribute("data-page-number")!, 10);
        this.emit("select", {
            el,
            originalEvent,
            value: el?.innerText ?? "",
            index,
        } satisfies SelectEvent);
        // Have to set timeout becasue menu will also trigger focus back to menu container
        setTimeout(
            () => (this.getEl("pageItem[]", index) as HTMLElement).focus(),
            0,
        );
    }

    handleNextPageClick(originalEvent: MouseEvent, el: HTMLElement) {
        if (!el.hasAttribute("aria-disabled")) {
            this.emit("next", {
                el,
                originalEvent,
            });
        }
    }

    handlePreviousPageClick(originalEvent: MouseEvent, el: HTMLElement) {
        if (!el.hasAttribute("aria-disabled")) {
            this.emit("previous", {
                el,
                originalEvent,
            });
        }
    }

    onCreate() {
        this.state = { maxItems: MIN_PAGES };
    }

    onMount() {
        this._calculateMaxItems();
        this.subscribeTo(eventUtils.resizeUtil).on(
            "resize",
            this._calculateMaxItems.bind(this),
        );
    }

    getItemTag(item: Item) {
        if (item.variant) {
            return item.variant === "link" ? "a" : "button";
        }
        return !!item.href ? "a" : "button";
    }

    /**
     * Calculates the start and end offsets given the current maximum items
     * that can be displayed.
     */
    _getVisibleRange(items: Item[]) {
        const { state, input } = this;
        const { maxItems } = state;
        const { variant } = input;
        const hasDots = variant === "show-last" || variant === "overflow";
        const hasLeadingDots = variant === "overflow";
        const hasOverflow = variant === "overflow";
        const lastIndex = items.length - 1;
        const dotsIndex = hasDots ? lastIndex : -1;
        const leadingDotsIndex = hasLeadingDots ? 1 : -1;
        let hideDots = false;
        let hideLeadingDots = false;

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

        return {
            start,
            end,
            hideDots,
            dotsIndex,
            hasOverflow,
            leadingDotsIndex,
            hideLeadingDots,
        };
    }

    _calculateMaxItems() {
        const { input, state } = this;
        const items = input.item || [];

        if (!(items as Item[]).some((item) => !item.type)) {
            return;
        }

        const root = this.getEl<HTMLElement>("root");
        if (!this._itemWidth) {
            // calculate the width of the first visible item
            const { children: items } = this.getEl<HTMLElement>("items");
            for (let i = 0; i < items.length; i++) {
                const item = items[i] as HTMLElement;
                if (item.offsetWidth) {
                    this._itemWidth = item.offsetWidth;
                    break;
                }
            }
        }
        // subtract 2 from the rounded results to take into account previous/next page buttons
        state.maxItems = Math.max(
            MIN_PAGES,
            Math.min(
                MAX_PAGES,
                Math.floor(getMaxWidth(root) / this._itemWidth) - 2,
            ),
        );
    }
}

export default Pagination;
