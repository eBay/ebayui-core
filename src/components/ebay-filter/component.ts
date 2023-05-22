export interface Input extends Omit<Marko.Input<"button">, `on${string}`> {
    selected?: boolean;
    href?: string;
    useAriaPressed?: boolean;
    a11ySelectedText?: string;
    "on-click"?: (event: {
        selected: boolean;
        originalEvent: MouseEvent;
    }) => void;
    onClick?: this["on-click"];
}

interface State {
    selected: boolean;
}

export default class extends Marko.Component<Input, State> {
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
