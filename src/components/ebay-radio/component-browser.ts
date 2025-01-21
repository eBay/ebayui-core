import type { WithNormalizedProps } from "../../global";

export interface RadioEvent {
    originalEvent: Event;
    value: string;
}
interface RadioInput extends Omit<Marko.HTML.Input, `on${string}`> {
    "icon-style"?: "rounded" | "square";
    "on-change"?: (e: RadioEvent, el: HTMLInputElement) => void;
    "on-focus"?: (e: RadioEvent, el: HTMLInputElement) => void;
    "on-keydown"?: (e: RadioEvent, el: HTMLInputElement) => void;
}

export interface Input extends WithNormalizedProps<RadioInput> {}

class Radio extends Marko.Component<Input> {
    forwardEvent(
        eventName: string,
        originalEvent: Event,
        el: HTMLInputElement,
    ) {
        this.emit(
            eventName,
            {
                originalEvent,
                value: (el || this.el?.querySelector("input"))?.value,
            } satisfies RadioEvent,
            el,
        );
    }
}

export default Radio;
