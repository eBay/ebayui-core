import Expander from "makeup-expander";
import * as eventUtils from "../../common/event-utils";
import { MenuEvent } from "../ebay-menu/component";
import {
    Input as FakeMenuInput,
    Item as FakeMenuItem,
} from "../ebay-fake-menu/component";

export interface FakeMenuButtonInput
    extends Omit<Marko.Input<"span">, `on${string}`> {
    text?: string;
    size?: "none" | "large";
    "prefix-id"?: string;
    variant?: "overflow" | "form" | "button" | "icon";
    priority?: "primary" | "secondary" | "delete" | "tertiary" | "none";
    borderless?: boolean;
    transparent?: boolean;
    icon?: Marko.Renderable;
    "a11y-text"?: string;
    disabled?: boolean;
    "no-toggle-icon"?: boolean;
    label?: { renderBody?: Marko.Body };
    "text-align"?: "center";
    type?: FakeMenuInput["type"];
    reverse?: boolean;
    "fix-width"?: boolean;
    items?: Marko.RepeatableAttrTag<FakeMenuItem>;
    "on-expand"?: (event: MenuEvent) => void;
    "on-collapse"?: (event: MenuEvent) => void;
    "on-select"?: (event: MenuEvent) => void;
    "on-mousedown"?: (event: MenuEvent) => void;
}

export interface Input extends WithNormalizedProps<FakeMenuButtonInput> {}

export default class extends Marko.Component<Input> {
    declare expander: Expander;

    handleMenuKeydown({ el, originalEvent, index }) {
        eventUtils.handleActionKeydown(originalEvent, () => {
            this.handleMenuSelect({ index, originalEvent, el });
        });

        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.expander.expanded = false;
            this.focus();
        });
    }

    focus() {
        (this.getComponent("button")!.el as HTMLElement).focus();
    }

    handleButtonEscape() {
        this.expander.expanded = false;
    }

    handleExpand() {
        this.emitComponentEvent({ eventType: "expand" });
    }

    handleCollapse() {
        this.emitComponentEvent({ eventType: "collapse" });
    }

    handleMenuSelect({ el, originalEvent, index }) {
        this.emitComponentEvent({
            eventType: "select",
            el,
            originalEvent,
            index,
        });
    }

    handleMousedown(originalEvent: MouseEvent, el: HTMLElement) {
        this.emitComponentEvent({ eventType: "mousedown", el, originalEvent });
    }

    emitComponentEvent({
        eventType,
        el,
        originalEvent,
        index,
    }: MenuEvent & { eventType: string }) {
        const eventObj: MenuEvent = {
            el,
            originalEvent,
            index,
        };
        this.emit(`${eventType}`, eventObj);
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._cleanupMakeup();
        }
    }

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _setupMakeup() {
        // In expander we set focusManagement to interactive for fake menu
        // This is related to setting the tabindex=-1 on menu-button div container for fake menu
        // In Safari and Firefox when clicking on a button/anchor focus is triggered on
        // the closest element with tabindex=-1 if there are any above it.
        // This would cause the menu to close before events are fired

        this.expander = new Expander(this.el, {
            hostSelector: ".fake-menu-button__button",
            contentSelector: ".fake-menu-button__menu",
            focusManagement: "interactive",
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });
    }

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.destroy();
        }
    }
}
