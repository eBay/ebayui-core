import type { WithNormalizedProps } from "../../global";

export interface ToggleButtonEvent {
    originalEvent: MouseEvent;
    pressed: boolean;
}

interface ToggleButtonInput extends Omit<Marko.HTML.Span, `on${string}`> {
    pressed?: boolean;
    "layout-type"?: string;
    icon?: Marko.AttrTag<Marko.Renderable>;
    img?: Marko.AttrTag<{
        src: string;
        alt: string;
        fillPlacement?: string;
    }>;
    subtitle?: string | Marko.AttrTag<Marko.Renderable>;
    renderBody?: Marko.Body;
    "on-toggle"?: (event: ToggleButtonEvent) => void;
}

export interface Input extends WithNormalizedProps<ToggleButtonInput> {}

interface State {
    pressed: boolean;
}

class ToggleButton extends Marko.Component<Input, State> {
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

export default ToggleButton;
