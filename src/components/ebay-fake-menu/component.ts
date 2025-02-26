import * as eventUtils from "../../common/event-utils";
import setupMenu, {
    type MenuItem,
    type BaseMenuInput,
    type MenuState,
    MenuUtils,
} from "../../common/menu-utils";
import type { WithNormalizedProps } from "../../global";

export interface MenuEvent {
    el?: HTMLElement;
    originalEvent?: Event;
    index?: number;
}

export interface Item extends MenuItem {
    disabled?: boolean;
    itemMatchesUrl?: boolean;
    current?: boolean;
    badgeNumber?: number;
}

export interface Separator {}
interface FakeMenuInput
    extends BaseMenuInput,
        Omit<Marko.HTML.Span, `on${string}`> {
    item?: Marko.AttrTag<Item>;
    "class-prefix"?: string;
    reverse?: boolean;
    "fix-width"?: boolean;
    fixed?: boolean;
    "on-keydown"?: (event: MenuEvent) => void;
    "on-select"?: (event: MenuEvent) => void;
}

export interface Input extends WithNormalizedProps<FakeMenuInput> {}

export default class extends MenuUtils<Input, MenuState> {
    declare items: Item[];

    onCreate() {
        setupMenu(this);
    }

    handleItemClick(index: number, originalEvent: MouseEvent, el: HTMLElement) {
        this.emitComponentEvent({
            eventType: "select",
            el,
            originalEvent,
            index,
        });
    }

    handleItemKeydown(
        index: number,
        originalEvent: KeyboardEvent,
        el: HTMLElement,
    ) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({
                eventType: "keydown",
                el,
                originalEvent,
                index,
            });
        });
    }

    emitComponentEvent({
        eventType,
        ...eventObj
    }: MenuEvent & { eventType: string }) {
        this.emit(`${eventType}`, eventObj);
    }

    onInput(input: Input) {
        this.items = [];
        for (const item of input.item || []) {
            if (!item.separator) {
                this.items.push(item);
            }
        }
    }
}
