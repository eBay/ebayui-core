export interface SwitchEvent {
    originalEvent: Event;
    value: string;
    checked: boolean;
}

export interface Input extends Omit<Marko.Input<'input'>, `on${string}`> {
    toJSON?: any;
    'on-change'?: (event: SwitchEvent) => void;
    onChange?: this['on-change'];
}

export default class extends Marko.Component<Input> {
    handleChange(originalEvent: Event & { target: HTMLInputElement }) {
        if (!this.input.disabled) {
            this.emit('change', {
                originalEvent,
                value: originalEvent.target.value,
                checked: originalEvent.target.checked,
            } satisfies SwitchEvent);
        }
    }
}
