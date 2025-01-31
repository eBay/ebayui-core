import type { WithNormalizedProps } from "../../global";

export interface CheckboxEvent {
    originalEvent: Event;
    value: string;
    checked: boolean;
}
interface CheckboxInput extends Omit<Marko.HTML.Input, `on${string}`> {
    "icon-style"?: "rounded" | "square";
    "on-change"?: (e: CheckboxEvent) => void;
    "on-focus"?: (e: CheckboxEvent) => void;
    "on-keydown"?: (e: CheckboxEvent) => void;
}

export interface Input extends WithNormalizedProps<CheckboxInput> {}

class Checkbox extends Marko.Component<Input> {
    forwardEvent(
        eventName: string,
        originalEvent: Event,
        el: HTMLInputElement,
    ) {
        const elRef = el || this.el!.querySelector("input");
        const value = elRef.value;
        const checked = elRef.checked;
        this.emit(`${eventName}`, {
            originalEvent,
            value,
            checked,
        } satisfies CheckboxEvent);
    }
}

export default Checkbox;
