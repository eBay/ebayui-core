import { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import { handleEnterKeydown } from "../../common/event-utils";

export interface ChipsComboboxEvent {
    selected: string[];
}

interface ChipsComboboxInput extends Omit<Marko.HTML.Input, `on${string}`> {
    expanded?: boolean;
    fluid?: boolean;
    error?: boolean;
    "list-selection"?: "manual" | "automatic";
    option?: Marko.AttrTag<{ text: string }>;
    selected?: string[];
    roledescription?: AttrString;
    "a11y-delete-button-text"?: AttrString;
    "on-expand"?: () => void;
    "on-collapse"?: () => void;
    "on-change"?: (event: ChipsComboboxEvent) => void;
}

export interface Input extends WithNormalizedProps<ChipsComboboxInput> {}

interface State {
    selected: string[];
}

export default class Combobox extends Marko.Component<Input, State> {
    onCreate(input: Input) {
        this.state = {
            selected: input.selected ?? [],
        };
    }

    onInput(input: Input) {
        if (input.selected === null) {
            this.state.selected = [];
        } else if (input.selected) {
            this.state.selected = input.selected;
        }
    }

    handleKeydown(e: KeyboardEvent) {
        handleEnterKeydown(e, () => {
            const value = (e.target as HTMLInputElement).value;
            e.preventDefault();
            if (value) {
                this.selectChip(value);
            }
        });
    }

    selectChip(text: string) {
        if (!this.state.selected.includes(text)) {
            this.state.selected = [...this.state.selected, text];
            this.emit("change", {
                selected: this.state.selected,
            } satisfies ChipsComboboxEvent);
        }
    }

    handleDelete(index: number) {
        this.state.selected = [
            ...this.state.selected.slice(0, index),
            ...this.state.selected.slice(index + 1),
        ];
        this.emit("change", {
            selected: this.state.selected,
        } satisfies ChipsComboboxEvent);
    }

    getDropdownEl() {
        return () => this.getEl("root") as HTMLElement;
    }
}
