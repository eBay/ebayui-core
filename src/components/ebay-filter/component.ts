import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";

export interface FilterInput extends Omit<Marko.HTML.Button, `on${string}`> {
    selected?: boolean;
    href?: string;
    "use-aria-pressed"?: boolean;
    "a11y-selected-text"?: AttrString;
    "on-click"?: (event: {
        selected: boolean;
        originalEvent: MouseEvent;
    }) => void;
}

export interface Input extends WithNormalizedProps<FilterInput> {}

interface State {
    selected: boolean;
}

class Filter extends Marko.Component<Input, State> {
    handleButtonClick(originalEvent: MouseEvent) {
        if (!this.input.disabled) {
            const selected = !this.state.selected;
            this.state.selected = selected;
            this.emit("click", {
                selected,
                originalEvent,
            });
        }
    }

    onInput(input: Input) {
        this.state = {
            selected: input.selected || false,
        };
    }
}

export default Filter;
