import FloatingLabel from "makeup-floating-label";
import type { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";

export interface Option extends Omit<Marko.HTML.Option, `on${string}`> {
    optgroup?: string;
    text?: string;
}

interface SelectInput extends Omit<Marko.HTML.Select, `on${string}`> {
    option?: Marko.AttrTag<Option>;
    "floating-label"?: AttrString;
    "is-large"?: boolean;
    borderless?: boolean;
    "on-change"?: (event: {
        index: number;
        selected: string[];
        el: HTMLOptionElement;
    }) => void;
    "on-floating-label-init"?: () => void;
}

export interface Input extends WithNormalizedProps<SelectInput> {}

export interface State {
    selectedIndex: number;
}

class Select extends Marko.Component<Input, State> {
    declare _floatingLabel: any;

    get selectId() {
        return this.input.id || this.getElId("select");
    }

    handleChange(event: Event | { target: { selectedIndex: number } }) {
        const { selectedIndex } = event.target as HTMLSelectElement;
        const el = this.getEls("option")[selectedIndex];
        const option = [...(this.input.option || [])][selectedIndex];

        this.state.selectedIndex = selectedIndex;

        // TODO: we should not cast the selected value to a string here, but this is a breaking change.
        this.emit("change", {
            index: selectedIndex,
            selected: [String(option.value)],
            el,
        });
    }

    handleFloatingLabelInit() {
        this.emit("floating-label-init");
    }

    onCreate() {
        this.state = { selectedIndex: 0 };
    }

    onInput(input: Input) {
        this.state.selectedIndex = 0;
        let i = 0;
        for (const option of input.option || []) {
            if (option.selected) {
                this.state.selectedIndex = i;
                break;
            }
            i++;
        }
    }

    onMount() {
        this._setupMakeup();

        const parentForm = this.el!.closest("form");
        if (parentForm) {
            const { selectedIndex } = document.getElementById(
                this.selectId,
            ) as HTMLSelectElement;
            this.subscribeTo(parentForm).on("reset", () => {
                this.handleChange({ target: { selectedIndex } });
            });
        }
    }

    onUpdate() {
        this._setupMakeup();
    }

    _setupMakeup() {
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.handleFloatingLabelInit();
            } else if (document.readyState === "complete") {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.handleFloatingLabelInit();
                }
            } else {
                this.subscribeTo(window).once(
                    "load",
                    this._setupMakeup.bind(this),
                );
            }
        }
    }
}

export default Select;
