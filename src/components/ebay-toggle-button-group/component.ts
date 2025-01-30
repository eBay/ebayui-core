import type { WithNormalizedProps } from "../../global";
import type {
    ToggleButtonEvent,
    Input as ToggleButtonInput,
} from "../ebay-toggle-button/component";

export interface ToggleButtonGroupEvent {
    originalEvent: MouseEvent;
    pressed: number[];
}

interface ToggleButtonGroupInput extends Omit<Marko.HTML.Span, `on${string}`> {
    button?: Marko.AttrTag<Omit<ToggleButtonInput, `on${string}`>>;
    variant?: "checkbox" | "radio" | "radio-toggle";
    "a11y-text"?: string;
    "a11y-label-id"?: string;
    columnsMin?: number;
    columnsXS?: number;
    columnsSM?: number;
    columnsMD?: number;
    columnsXL?: number;
    layoutType?: ToggleButtonInput["layoutType"];
    "on-change"?: (event: ToggleButtonGroupEvent) => void;
}

export interface Input extends WithNormalizedProps<ToggleButtonGroupInput> {}

interface State {
    pressed: { [index: number]: boolean };
}

class ToggleButtonGroup extends Marko.Component<Input, State> {
    onCreate() {
        this.state = { pressed: {} };
    }

    onInput(input: Input) {
        this.state.pressed = Object.fromEntries(
            [...(input.button || [])].map(({ pressed }, i) => [i, !!pressed]),
        );
    }

    handleToggle(index: number, { originalEvent, pressed }: ToggleButtonEvent) {
        if (this.input.variant === "radio") {
            // radio buttons may not be deselected, so `pressed` is not necessary
            this.state.pressed = { [index]: true };
        } else if (this.input.variant === "radio-toggle") {
            this.state.pressed = { [index]: pressed };
        } else {
            // act as a normal checkbox
            this.state.pressed = { ...this.state.pressed, [index]: pressed };
        }
        this.emit("change", {
            originalEvent,
            pressed: Object.keys(this.state.pressed)
                .filter((i) => this.state.pressed[+i])
                .map((i) => +i),
        } satisfies ToggleButtonGroupEvent);
    }
}

export default ToggleButtonGroup;
