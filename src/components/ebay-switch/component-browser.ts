import type { WithNormalizedProps } from "../../global";

export interface SwitchEvent {
    originalEvent: Event;
    value: string;
    checked: boolean;
}

interface SwitchInput extends Omit<Marko.HTML.Input, `on${string}`> {
    "on-change"?: (event: SwitchEvent) => void;
}

export interface Input extends WithNormalizedProps<SwitchInput> {}

class Switch extends Marko.Component<Input> {
    handleChange(originalEvent: Event, target: HTMLInputElement) {
        if (!this.input.disabled) {
            this.emit("change", {
                originalEvent,
                value: target.value,
                checked: target.checked,
            } satisfies SwitchEvent);
        }
    }
}

export default Switch;
