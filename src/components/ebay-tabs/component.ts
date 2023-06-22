import { createLinear } from "makeup-roving-tabindex";
import * as eventUtils from "../../common/event-utils";

export interface Panel extends Omit<Marko.Input<"div">, `on${string}`> {}

export interface Tab extends Omit<Marko.Input<"div">, `on${string}`> {}

interface TabsInput extends Omit<Marko.Input<"div">, `on${string}`> {
    tabs: Marko.AttrTag<Tab>[];
    panels: Marko.AttrTag<Panel>[];
    activation?: "auto" | "manual";
    fake?: boolean;
    "selected-index"?: number | string;
}

export interface Input extends WithNormalizedProps<TabsInput> {}

export interface State {
    selectedIndex: number;
}

export default class extends Marko.Component<Input, State> {
    declare _linearRovingTabindex: ReturnType<typeof createLinear>;

    /**
     * Handle a11y for heading
     * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
     */
    handleHeadingKeydown(dataIndex: number, event: KeyboardEvent) {
        eventUtils.handleActionKeydown(event, () => {
            event.preventDefault();
            this._setIndex(dataIndex);
        });

        eventUtils.handleArrowsKeydown(event, () => {
            event.preventDefault();

            const { input, state } = this;
            const len = input.tabs.length;
            const keyCode = event.charCode || event.keyCode;
            const direction = keyCode === 37 || keyCode === 38 ? -1 : 1;
            const selectedIndex = (state.selectedIndex + len + direction) % len;
            (this.getEl(`tabs-${selectedIndex}`) as HTMLElement)?.focus();

            if (!input.activation || input.activation === "auto") {
                this._setIndex(selectedIndex);
            }
        });
    }

    handleHeadingClick(selectedIndex) {
        this._setIndex(selectedIndex);
    }

    onCreate() {
        this.state = { selectedIndex: 0 };
    }

    onInput(input: Input) {
        const { state } = this;
        input.tabs = input.tabs || [];
        input.panels = input.panels || [];

        if (!isNaN(input.selectedIndex as number)) {
            state.selectedIndex =
                parseInt(input.selectedIndex as string, 10) %
                (input.tabs.length || 1);
        }
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

    _setIndex(selectedIndex: number) {
        const { state } = this;

        if (selectedIndex !== state.selectedIndex) {
            state.selectedIndex = selectedIndex;
            this.emit("select", { selectedIndex });
        }
    }

    _setupMakeup() {
        const { input, state } = this;

        if (!input.fake) {
            this._linearRovingTabindex = createLinear(
                this.getEl("tabs"),
                ".tabs__item",
                {
                    index: state.selectedIndex,
                    wrap: true,
                }
            );
        }
    }

    _cleanupMakeup() {
        if (this._linearRovingTabindex) {
            this._linearRovingTabindex.destroy();
            this._linearRovingTabindex = undefined;
        }
    }
}
