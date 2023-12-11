import type {
    ToggleButtonEvent,
    Input as ToggleButtonInput,
} from "../ebay-toggle-button/component";

interface ToggleButtonGroupEvent {
    originalEvent: MouseEvent;
    pressed: number[];
}

interface ToggleButtonGroupInput
    extends Omit<Marko.Input<"span">, `on${string}`> {
    buttons: Omit<ToggleButtonInput, `on${string}`>[];
    columns?: number;
    variant?: "checkbox" | "radio" | "radio-toggle";
    layoutType?: ToggleButtonInput["layoutType"];
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
            input.buttons.map(({ pressed }, i) => [i, !!pressed]),
        );
    }

    handleToggle = (
        index: number,
        { originalEvent, pressed }: ToggleButtonEvent,
    ) => {
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
                .filter((i) => this.state.pressed[i])
                .map((i) => +i),
        } satisfies ToggleButtonGroupEvent);
    };
}

export default ToggleButtonGroup;
