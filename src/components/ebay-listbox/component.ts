import { createLinear } from "makeup-active-descendant";
import type { AttrString, AttrStringOrNumber } from "marko/tags-html";
import typeahead from "makeup-typeahead";
import { scroll } from "../../common/element-scroll";
import * as eventUtils from "../../common/event-utils";
import type { WithNormalizedProps } from "../../global";
const TYPEAHEAD_TIMEOUT_LENGTH = 1300;

export interface ChangeEvent {
    index: number;
    wasClicked: boolean;
    selected: AttrStringOrNumber[];
    el: HTMLOptionElement;
}

export interface Option extends Omit<Marko.HTML.Option, `on${string}`> {
    disabled?: boolean;
    text?: AttrString;
    description?: Marko.AttrTag<{ renderBody?: Marko.Body }>;
    icon?: Marko.AttrTag<{ renderBody?: Marko.Body }>;
}

interface ListboxInput extends Omit<Marko.HTML.Div, `on${string}`> {
    "list-selection"?: "auto" | "manual";
    "typeahead-timeout-length"?: number;
    option?: Marko.AttrTag<Option>;
    name?: string;
    disabled?: boolean;
    "on-change"?: (event: ChangeEvent) => void;
    "on-escape"?: () => void;
}

export interface Input extends WithNormalizedProps<ListboxInput> {}

interface State {
    selectedIndex: number;
}

class Listbox extends Marko.Component<Input, State> {
    declare wasClicked: boolean;
    declare _activeDescendant: ReturnType<typeof createLinear>;
    declare getTypeaheadIndex: ReturnType<typeof typeahead>["getIndex"];
    declare destroyTypeahead: ReturnType<typeof typeahead>["destroy"];

    get isAutoSelection() {
        return this.input.listSelection === "auto";
    }

    elementScroll() {
        scroll(this.getEls("option")[this.state.selectedIndex] as HTMLElement);
    }

    handleChange(index: number, wasClicked: boolean) {
        if (this.state.selectedIndex !== index) {
            const option = [...(this.input.option || [])][index];
            if (option.disabled) {
                return;
            }
            this.state.selectedIndex = index;
            this.once("update", () => {
                this.emit("change", {
                    index,
                    wasClicked,
                    selected: [option.value],
                    el: this.getEls("option")[index] as HTMLOptionElement,
                } satisfies ChangeEvent);
            });
        }
    }

    handleClick(index: number) {
        this.handleChange(index, true);
    }

    handleMouseDown() {
        this.wasClicked = true;
    }

    handleKeyDown(originalEvent: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emit("escape");
        });

        eventUtils.handleActionKeydown(originalEvent, () =>
            this.handleChange(this._activeDescendant.index, false),
        );

        const itemIndex = this.getTypeaheadIndex(
            (this.getEl("options") as HTMLElement).children,
            originalEvent.key,
            this.input.typeaheadTimeoutLength || TYPEAHEAD_TIMEOUT_LENGTH,
        );

        if (itemIndex !== -1) {
            this._activeDescendant.index = itemIndex;
            const container = this.getEl<HTMLElement>("options");
            container.scrollTop =
                this.getEls<HTMLElement[]>("option")[itemIndex].offsetTop -
                container.offsetHeight / 2;
        }
    }

    handleListboxChange(event: CustomEvent) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls("option")[selectedIndex];
        const wasClicked = this.wasClicked;

        scroll(el as HTMLElement);

        if (this.wasClicked) {
            this.wasClicked = false;
        }
        this.handleChange(selectedIndex, wasClicked);
    }

    onCreate() {
        this.state = {
            selectedIndex: -1,
        };
    }

    onInput(input: Input) {
        const { state } = this;
        input.option = input.option || ([] as any);
        state.selectedIndex = -1;
        let i = 0;
        for (const option of input.option || []) {
            if (option.selected) {
                state.selectedIndex = i;
                break;
            }
            i++;
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

    _setupMakeup() {
        const { input, state } = this;

        if ((input.option as any)?.length && !input.disabled) {
            const container = this.getEl("options");
            const optionsContainer = this.getEl("options");
            this._activeDescendant = createLinear(
                container,
                optionsContainer,
                optionsContainer,
                ".listbox__option[role=option]",
                {
                    activeDescendantClassName: "listbox__option--active",
                    autoInit: state.selectedIndex,
                    autoReset: null,
                    autoScroll: !this.isAutoSelection,
                },
            );
            const { getIndex: getTypeaheadIndex, destroy: destroyTypeahead } =
                typeahead();
            this.getTypeaheadIndex = getTypeaheadIndex;
            this.destroyTypeahead = destroyTypeahead;
        }
    }

    _cleanupMakeup() {
        if (this._activeDescendant) {
            this._activeDescendant.reset();
            this._activeDescendant.destroy();
            this._activeDescendant = undefined;
        }
    }
}

export default Listbox;
