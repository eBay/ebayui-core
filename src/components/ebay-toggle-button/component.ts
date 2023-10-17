export interface ToggleButtonEvent {
    originalEvent: MouseEvent;
    pressed: boolean;
}

interface ToggleButtonInput extends Omit<Marko.Input<"span">, `on${string}`> {
    pressed?: boolean;
    layoutType?: string;
    icon?: Marko.Renderable;
    img?: {
        src: string;
        alt: string;
        fillPlacement?: string;
    };
    subtitle?: string | Marko.Renderable;
    renderBody?: Marko.Body;
    "on-toggle"?: (event: ToggleButtonEvent) => void;
}

export interface Input extends WithNormalizedProps<ToggleButtonInput> {}

interface State {
    pressed: boolean;
}

export default class extends Marko.Component<Input, State> {
    onInput(input: Input) {
        this.state = { pressed: !!input.pressed };
    }

    handleClick(ev: MouseEvent) {
        this.state.pressed = !this.state.pressed;
        this.emit("toggle", {
            originalEvent: ev,
            pressed: this.state.pressed,
        } satisfies ToggleButtonEvent);
    }
}
