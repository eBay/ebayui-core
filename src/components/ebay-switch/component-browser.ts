export interface SwitchEvent {
    originalEvent: Event;
    value: string;
    checked: boolean;
}

interface SwitchInput extends Omit<Marko.Input<"input">, `on${string}`> {
    toJSON?: any;
    "on-change"?: (event: SwitchEvent) => void;
}

export interface Input extends WithNormalizedProps<SwitchInput> {}

export default class extends Marko.Component<Input> {
    handleChange(originalEvent: Event & { target: HTMLInputElement }) {
        if (!this.input.disabled) {
            this.emit("change", {
                originalEvent,
                value: originalEvent.target.value,
                checked: originalEvent.target.checked,
            } satisfies SwitchEvent);
        }
    }
}
