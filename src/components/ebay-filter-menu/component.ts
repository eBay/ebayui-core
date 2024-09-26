import * as scrollKeyPreventer from "makeup-prevent-scroll-keys";
import { createLinear } from "makeup-roving-tabindex";
import * as eventUtils from "../../common/event-utils";
import setupMenu, {
    MenuUtils,
    type BaseMenuInput,
    type MenuState,
} from "../../common/menu-utils";
import type { RadioEvent } from "../ebay-radio/component-browser";
import type { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";

export interface FilterMenuEvent<T extends Event = Event> {
    el?: Element;
    checked?: string[];
    checkedIndex?: number[];
    originalEvent: T;
    index?: number;
    currentChecked?: boolean;
}

interface FilterMenuInput
    extends BaseMenuInput,
        Omit<Marko.Input<"span">, `on${string}`> {
    variant?: "form";
    "class-prefix"?: string;
    "form-name"?: string;
    "form-action"?: string;
    "form-method"?: string;
    "footer-text"?: AttrString;
    "a11y-footer-text"?: AttrString;
    footer?: WithNormalizedProps<
        Omit<Marko.Input<"button">, `on${string}`> & {
            "a11y-footer-text"?: AttrString;
        }
    >;
    "render-body"?: Marko.Body;
    "on-footer-click"?: (event: FilterMenuEvent) => void;
    "on-form-submit"?: (event: FilterMenuEvent) => void;
    "on-change"?: (event: FilterMenuEvent) => void;
    "on-keydown"?: (event: FilterMenuEvent) => void;
}

export interface Input extends WithNormalizedProps<FilterMenuInput> {}

export default class extends MenuUtils<Input, MenuState> {
    declare _rovingTabIndex: ReturnType<typeof createLinear>;
    declare lastTabIndexPosition: number;

    onCreate() {
        setupMenu(this);
    }

    resetIndex() {
        this._rovingTabIndex.index = 0;
        this.lastTabIndexPosition = 0;
    }

    handleRadioClick(index: number, ev: RadioEvent, itemEl: Element) {
        this._toggleItemChecked(index, ev.originalEvent, itemEl);
    }

    handleItemClick(index: number, ev: MouseEvent, itemEl: Element) {
        const targetEv = (ev as any).originalEvent || ev;
        if (
            this.input.variant !== "form" ||
            targetEv.target.tagName !== "INPUT"
        ) {
            this._toggleItemChecked(index, ev, itemEl);
        }
    }

    handleItemKeydown(index: number, ev: KeyboardEvent, itemEl: Element) {
        eventUtils.handleEscapeKeydown(ev, () => {
            // TODO: this event is not documented.
            // Do we need it? (it is only used by the filter-menu-button)
            this._emitComponentEvent("keydown", ev, { index });
        });

        if (this.input.variant !== "form") {
            eventUtils.handleActionKeydown(ev, () => {
                this._toggleItemChecked(index, ev, itemEl);
            });
        }
        eventUtils.handleArrowsKeydown(ev, () => {
            setTimeout(() => {
                if (this._rovingTabIndex.index !== index) {
                    this._emitComponentEvent("keydown", ev, {
                        index: this._rovingTabIndex.index,
                    });
                }
            });
        });
    }

    handleFooterButtonClick(originalEvent: Event) {
        this._emitComponentEvent("footer-click", originalEvent);
    }

    handleFormSubmit(originalEvent: Event) {
        this._emitComponentEvent("form-submit", originalEvent);
    }

    onInput(input: Input) {
        this.state = super.getInputState(input);
    }

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._cleanupMakeup();
        }
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _toggleItemChecked(index: number, originalEvent: Event, el: Element) {
        if (this.isDisabled(index)) {
            return;
        }
        this.toggleChecked(index);
        this._emitComponentEvent("change", originalEvent, { el, index });
    }

    _emitComponentEvent(
        eventType: string,
        originalEvent: Event,
        args?: { el?: Element; index?: number },
    ) {
        const { el, index } = args || {};
        const checked = this.getCheckedValues() as string[];
        const checkedIndex = this.getCheckedIndexes();
        const currentChecked =
            index === undefined ? undefined : this.isChecked(index);

        this.emit(`${eventType}`, {
            el,
            checked,
            checkedIndex,
            originalEvent,
            index,
            currentChecked,
        } satisfies FilterMenuEvent);
    }

    _setupMakeup() {
        if (this.input.variant !== "form") {
            this._rovingTabIndex = createLinear(this.getEl("menu"), "div", {
                autoInit: this.lastTabIndexPosition || "interactive",
            });

            scrollKeyPreventer.add(this.getEl("container"));
        }
    }

    _cleanupMakeup() {
        if (this._rovingTabIndex) {
            this.lastTabIndexPosition = this._rovingTabIndex.index;
            this._rovingTabIndex.destroy();
            this._rovingTabIndex = undefined;
            scrollKeyPreventer.remove(this.getEl("container"));
        }
    }
}
