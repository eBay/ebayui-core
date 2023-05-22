import * as eventUtils from "../../common/event-utils";
import setupMenu, {
    type MenuItem,
    type MenuInput,
    type MenuState,
    MenuUtils,
} from "../../common/menu-utils";

export interface MenuEvent {
    el: Element;
    originalEvent: Event;
    index: number;
}

export interface Item extends MenuItem {
    disabled?: boolean;
    itemMatchesUrl?: boolean;
    current?: boolean;
    badgeNumber?: number;
}

export interface Separator {}
export interface Input
    extends MenuInput,
        Omit<Marko.Input<"span">, `on${string}`> {
    items?: Marko.RepeatableAttrTag<Item>;
    separator?: Marko.RepeatableAttrTag<Separator>;
    classPrefix?: string;
    reverse?: boolean;
    fixWidth?: boolean;
    "on-keydown"?: (event: MenuEvent) => void;
    onKeydown?: this["on-keydown"];
    "on-select"?: (event: MenuEvent) => void;
    onSelect?: this["on-select"];
}

export default class extends MenuUtils<Input, MenuState> {
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
        el: HTMLElement
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
        this.items = ((input.items as Marko.AttrTag<Item>[]) || []).filter(
            (item) => !item.separator
        );
    }
}
