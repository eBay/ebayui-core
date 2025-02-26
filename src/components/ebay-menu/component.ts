import * as scrollKeyPreventer from "makeup-prevent-scroll-keys";
import { createLinear } from "makeup-roving-tabindex";
import typeahead from "makeup-typeahead";
import * as eventUtils from "../../common/event-utils";
import setupMenu, {
    type MenuItem,
    type BaseMenuInput,
    type MenuState,
    MenuUtils,
} from "../../common/menu-utils";
import type { WithNormalizedProps } from "../../global";

const TYPEAHEAD_TIMEOUT_LENGTH = 1300;

export interface MenuEvent<T extends Event = Event> {
    el?: HTMLElement;
    checked?: string[];
    checkedIndex?: number[];
    originalEvent?: T;
    index?: number;
    currentChecked?: boolean;
}

export interface Item extends MenuItem {
    badgeNumber?: number;
}

interface MenuInput
    extends BaseMenuInput,
        Omit<Marko.HTML.Span, `on${string}`> {
    item?: Marko.AttrTag<Item>;
    "class-prefix"?: string;
    "typeahead-timeout-length"?: number;
    reverse?: boolean;
    fixed?: boolean;
    "fix-width"?: boolean;
    renderBody?: Marko.Body;
    "on-keydown"?: (event: MenuEvent) => void;
    "on-change"?: (event: MenuEvent) => void;
    "on-select"?: (event: MenuEvent) => void;
}

export interface Input extends WithNormalizedProps<MenuInput> {}

export default class extends MenuUtils<Input, MenuState> {
    declare rovingTabindex: ReturnType<typeof createLinear>;
    declare tabindexPosition: number;
    declare contentEl: HTMLElement;
    declare getTypeaheadIndex: ReturnType<typeof typeahead>["getIndex"];
    declare destroyTypeahead: ReturnType<typeof typeahead>["destroy"];
    declare items: Item[];

    onCreate() {
        setupMenu(this);
    }

    toggleItemChecked(
        index: number,
        originalEvent: Event,
        itemEl: HTMLElement,
    ) {
        // This needs to be at start since toggleChecked swaps the checkedIndex
        // and then the right events will not fire correctly
        const shouldEmitRadio =
            this.isRadio() && index !== this.state.checkedIndex;
        this.toggleChecked(index);

        if (shouldEmitRadio) {
            this.emitComponentEvent({
                index,
                eventType: "change",
                el: itemEl,
                originalEvent,
            });
        } else if (this.type !== "radio") {
            this.emitComponentEvent({
                index,
                eventType: !this.type ? "select" : "change",
                el: itemEl,
                originalEvent,
            });
        }

        if (this.rovingTabindex) {
            this.tabindexPosition = this.rovingTabindex.items.findIndex(
                (el: HTMLElement) => el.tabIndex === 0,
            );
        }
    }

    handleItemClick(
        index: number,
        originalEvent: MouseEvent,
        itemEl: HTMLElement,
    ) {
        this.toggleItemChecked(index, originalEvent, itemEl);
    }

    handleItemKeydown(
        index: number,
        originalEvent: KeyboardEvent,
        itemEl: HTMLElement,
    ) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({
                eventType: "keydown",
                originalEvent,
                index,
            });
        });

        eventUtils.handleActionKeydown(originalEvent, () =>
            this.toggleItemChecked(index, originalEvent, itemEl),
        );

        eventUtils.handleArrowsKeydown(originalEvent, () => {
            setTimeout(() => {
                if (index !== this.rovingTabindex.index) {
                    this.emitComponentEvent({
                        eventType: "keydown",
                        originalEvent,
                        index: this.rovingTabindex.index,
                    });
                }
            });
        });
    }

    handleItemKeypress({ key }: KeyboardEvent) {
        const itemIndex = this.getTypeaheadIndex(
            (this.getEl("menu") as HTMLElement).children,
            key,
            this.input.typeaheadTimeoutLength || TYPEAHEAD_TIMEOUT_LENGTH,
        );

        if (itemIndex !== -1) {
            this.tabindexPosition = this.rovingTabindex.index = itemIndex;
        }
    }

    emitComponentEvent({
        eventType,
        el,
        originalEvent,
        index,
    }: {
        eventType: string;
        el?: HTMLElement;
        originalEvent: Event;
        index?: number;
    }) {
        const checkedIndexes = this.getCheckedIndexes();
        const isCheckbox = this.type === "checkbox";

        const eventObj = {
            el,
            originalEvent,
        } satisfies MenuEvent;

        if (isCheckbox && checkedIndexes && checkedIndexes.length > 1) {
            Object.assign(eventObj, {
                index,
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
        } else {
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
        this.tabindexPosition = 0;
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    onDestroy() {
        this._cleanupMakeup();
    }

    _setupMakeup() {
        this.contentEl = this.getEl("menu");

        this.rovingTabindex = createLinear(this.contentEl, "div", {
            index: this.tabindexPosition,
            autoReset: null,
        });

        scrollKeyPreventer.add(this.contentEl);

        const { getIndex: getTypeaheadIndex, destroy: destroyTypeahead } =
            typeahead();
        this.getTypeaheadIndex = getTypeaheadIndex;
        this.destroyTypeahead = destroyTypeahead;
    }

    _cleanupMakeup() {
        if (this.rovingTabindex) {
            this.rovingTabindex.destroy();
            scrollKeyPreventer.remove(this.contentEl);
        }
        if (this.destroyTypeahead) {
            this.destroyTypeahead();
        }
    }
}
