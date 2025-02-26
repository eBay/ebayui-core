import Expander from "makeup-expander";
import * as eventUtils from "../../common/event-utils";
import { DropdownUtil } from "../../common/dropdown";
import setupMenu, {
    MenuUtils,
    type BaseMenuInput,
    type MenuState,
} from "../../common/menu-utils";
import type { MenuEvent } from "../ebay-menu/component";
import type { Input as EbayButtonInput } from "../ebay-button/index.marko";
import { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";

export interface MenuButtonEvent {
    el?: Element;
    originalEvent?: Event;
    indexes?: number[];
    checked?: number[];
    checkedValues?: string[];
    /** @deprecated in v5 */
    index?: number;
}

interface MenuButtonInput
    extends BaseMenuInput,
        Omit<Marko.HTML.Span, `on${string}`> {
    "collapse-on-select"?: boolean;
    "prefix-id"?: string;
    variant?: "overflow" | "form" | "button" | "icon";
    borderless?: boolean;
    partiallyDisabled?: EbayButtonInput["partiallyDisabled"];
    priority?: "primary" | "secondary" | "tertiary" | "delete" | "none";
    size?: EbayButtonInput["size"];
    transparent?: boolean;
    "a11y-text"?: AttrString;
    disabled?: boolean;
    split?: string;
    "no-toggle-icon"?: boolean;
    label?: Marko.AttrTag<{
        renderBody?: Marko.Body;
    }>;
    "prefix-label"?: AttrString;
    icon?: Marko.AttrTag<{ renderBody?: Marko.Body }>;
    text?: AttrString;
    reverse?: boolean;
    strategy?: "absolute" | "fixed";
    "fix-width"?: boolean;
    "on-expand"?: (event: MenuButtonEvent) => void;
    "on-collapse"?: (event: MenuButtonEvent) => void;
    "on-change"?: (event: MenuButtonEvent) => void;
    "on-select"?: (event: MenuButtonEvent) => void;
    "on-mousedown"?: (event: MenuButtonEvent) => void;
}

export interface Input extends WithNormalizedProps<MenuButtonInput> {}

export default class extends MenuUtils<Input, MenuState> {
    declare expander: any;
    declare dropdownUtil: DropdownUtil;

    onCreate() {
        setupMenu(this);
    }

    toggleItemChecked(
        index: number,
        itemEl: Element | undefined,
        originalEvent?: Event,
    ) {
        // This needs to be at start since toggleChecked swaps the checkedIndex
        // and then the right events will not fire correctly
        const shouldEmitRadio =
            this.isRadio() && index !== this.state.checkedIndex;
        this.toggleChecked(index);

        if (shouldEmitRadio) {
            if (this.input.collapseOnSelect) {
                this.expander.expanded = false;
            }
            this.emitComponentEvent({
                index,
                eventType: "change",
                el: itemEl,
                originalEvent,
            });
        } else if (this.type !== "radio") {
            if (this.input.collapseOnSelect) {
                this.expander.expanded = false;
            }
            this.emitComponentEvent({
                index,
                eventType: !this.type ? "select" : "change",
                el: itemEl,
                originalEvent,
            });
        }
    }

    handleItemClick(index: number, e: Event, itemEl?: Element) {
        this.toggleItemChecked(index, itemEl, e);
    }

    handleMenuKeydown({ el, originalEvent, index }: MenuEvent) {
        if (originalEvent === undefined) return;

        eventUtils.handleActionKeydown(originalEvent as KeyboardEvent, () => {
            this.handleItemClick(index ?? 0, originalEvent, el);
        });

        eventUtils.handleEscapeKeydown(originalEvent as KeyboardEvent, () => {
            this.expander.expanded = false;
            this.focus();
        });
    }

    focus() {
        (
            (this.getComponent("button") as Marko.Component).el as HTMLElement
        ).focus();
    }

    handleButtonEscape() {
        this.expander.expanded = false;
    }

    handleExpand() {
        if (this.input.disabled) {
            return;
        }
        this.dropdownUtil.show();
        this.emitComponentEvent({ eventType: "expand" });
    }

    handleCollapse() {
        if (this.input.disabled) {
            return;
        }
        this.dropdownUtil.hide();
        this.emitComponentEvent({ eventType: "collapse" });
    }

    handleMenuChange({ el, originalEvent, index }: MenuEvent) {
        this.toggleItemChecked(index ?? 0, el, originalEvent);
    }

    handleMenuSelect({ el, originalEvent, index }: MenuEvent) {
        if (this.input.collapseOnSelect) {
            this.expander.expanded = false;
        }

        this.emitComponentEvent({
            eventType: "select",
            el,
            originalEvent,
            index,
        });
    }
    handleMousedown(originalEvent: MouseEvent, el: HTMLSpanElement) {
        this.emitComponentEvent({ eventType: "mousedown", el, originalEvent });
    }
    emitComponentEvent({
        eventType,
        el,
        originalEvent,
        index,
    }: {
        eventType: string;
        el?: Element;
        originalEvent?: Event;
        index?: number;
    }) {
        const checkedIndexes = this.getCheckedIndexes();
        const isCheckbox = this.type === "checkbox";

        const eventObj = {
            el,
            originalEvent,
        } satisfies MenuButtonEvent;

        if (isCheckbox && checkedIndexes && checkedIndexes.length > 1) {
            Object.assign(eventObj, {
                indexes: this.getCheckedIndexes(), // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues(), // DEPRECATED in v5
            });
        } else if (isCheckbox || this.isRadio()) {
            Object.assign(eventObj, {
                index, // DEPRECATED in v5
                checked: this.getCheckedIndexes(), // DEPRECATED in v5 (keep but change from indexes to values)
                checkedValues: this.getCheckedValues(), // DEPRECATED in v5
            });
        } else if (eventType !== "expand" && eventType !== "collapse") {
            Object.assign(eventObj, {
                index, // DEPRECATED in v5
                checked: [index], // DEPRECATED in v5 (keep but change from indexes to values)
            });
        }

        this.emit(`${eventType}`, eventObj);
    }

    onInput(input: Input) {
        this.state = this.getInputState(input);
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
        this.expander = new Expander(this.el, {
            hostSelector: ".menu-button__button",
            contentSelector: ".menu-button__menu",
            focusManagement: "focusable",
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        });

        this.dropdownUtil = new DropdownUtil(
            this.getEl("button"),
            this.getEl("content"),
            {
                reverse: this.input.reverse,
                strategy: this.input.strategy,
            },
        );
    }

    _cleanupMakeup() {
        if (this.expander) {
            this.expander.destroy();
        }

        this.dropdownUtil?.cleanup?.();
    }
}
