import * as eventUtils from "../../common/event-utils";
import { getMaxWidth } from "../../common/dom";
import type { AttrClass, AttrString } from "marko/tags-html";
import type { MenuEvent } from "../ebay-menu/component";
import type { WithNormalizedProps } from "../../global";

interface BreadcrumbsInput extends Omit<Marko.HTML.Nav, `on${string}`> {
    "a11y-heading-tag"?: keyof Marko.NativeTags;
    "a11y-heading-text"?: AttrString;
    "a11y-menu-button-text"?: AttrString;
    class?: AttrClass;
    item?: Marko.AttrTag<Marko.HTML.A | (Marko.HTML.Button & { href: never })>;
    "on-select"?: (event: { originalEvent: Event; el: HTMLElement }) => void;
}

export interface Input extends WithNormalizedProps<BreadcrumbsInput> {}

interface State {
    hiddenIndex: number[];
}

class Breadcrumbs extends Marko.Component<Input, State> {
    declare cachedWidths: number[];
    declare newInput: boolean;

    handleClick(originalEvent: KeyboardEvent) {
        this.emit("select", { originalEvent, el: originalEvent?.target });
    }

    handleMenuBreadcrumb(originalEvent: MenuEvent) {
        this.emit("select", { originalEvent, el: originalEvent?.el });
    }

    onCreate() {
        this.state = { hiddenIndex: [] };
    }

    onMount() {
        this._calculateMaxItems();
        this.subscribeTo(eventUtils.resizeUtil).on(
            "resize",
            this._calculateMaxItems.bind(this),
        );
    }

    onInput(input: Input) {
        this.cachedWidths = [];
        const hiddenIndex: number[] = [];
        const items = [...(input.item ?? [])];
        if ((items || []).length > 4) {
            // If we have more than 4 items, we automatically add them into hiddenIndexes.
            // The first, second to last, and last indexes will be shown automatically
            for (let i = 1; i < items.length - 2; i++) {
                hiddenIndex.push(i);
            }
        }
        this.state.hiddenIndex = hiddenIndex;
        this.newInput = true;
    }

    onUpdate() {
        if (this.newInput) {
            this.newInput = false;
            this._calculateMaxItems();
        }
    }

    _getItemWidths(itemContainer: HTMLElement) {
        let itemWidths = this.cachedWidths;
        if (itemWidths.length !== itemContainer.children.length) {
            itemWidths = [];
            for (let i = 0; i < itemContainer.children.length; i++) {
                const currentItem = itemContainer.children[i] as HTMLElement;
                // We need to remove the hidden attribute to get the width
                if (currentItem.hasAttribute("hidden")) {
                    currentItem.removeAttribute("hidden");
                    itemWidths[i] = currentItem.offsetWidth;
                    currentItem.setAttribute("hidden", "");
                } else {
                    itemWidths[i] = currentItem.offsetWidth;
                }
            }
            this.cachedWidths = itemWidths;
        }
        return itemWidths;
    }

    _calculateMaxItems() {
        const { input, state } = this;
        const items = [...(input.item ?? [])];

        if (!items.some((item) => !item.type)) {
            return;
        }

        const itemContainer = this.getEl("items") as HTMLElement;
        const maxWidth = getMaxWidth(itemContainer);
        const lastItemIndex = itemContainer.children.length - 1;

        const itemWidths = this._getItemWidths(itemContainer);

        const hasOverflowMenu = state.hiddenIndex.length > 0;
        // Skip the first element
        let startRange = 1;
        // End at the item before the last
        const endRange = lastItemIndex - 1;
        // Only show a maximum of root + 3 other items.
        const indexCutoff = endRange - 2;

        // Get the total width of the first and last item
        let runningTotalWidth = itemWidths[0] + itemWidths[lastItemIndex];

        // When we show the overflow menu, it is now rendered within the dom.
        // This increases the number of items by 1 in itemsContainer
        if (hasOverflowMenu) {
            // Add overflow menu to the count and increse the start range
            runningTotalWidth += itemWidths[startRange];
            startRange++;
        }

        const hiddenIndex: number[] = [];
        // We only need to check the length of the second to last and third to last items.
        // All other items will be truncated automatically. (due to indexCutoff variable)
        for (let i = endRange; i >= startRange; i--) {
            runningTotalWidth += itemWidths[i];
            if (runningTotalWidth > maxWidth || indexCutoff >= i) {
                // Since the overflow menu will cause a shift in indexes, we need to fix that
                // So that the indexes match the input.items
                hiddenIndex.unshift(hasOverflowMenu ? i - 1 : i);
            }
        }
        state.hiddenIndex = hiddenIndex;
    }
}

export default Breadcrumbs;
