export interface Input extends Marko.Input<'button'> {
    selected?: boolean;
    href?: string;
    useAriaPressed?: boolean;
    a11ySelectedText?: string;
}

interface State {
    selected: boolean;
}

export default class extends Marko.Component<Input, State> {
    handleButtonClick(originalEvent: MouseEvent) {
        if (!this.input.disabled) {
            const selected = !this.state.selected;
            this.state.selected = selected;
            this.emit('click', {
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
