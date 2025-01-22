import type { AttrTriState } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";

export interface TriStateCheckboxEvent {
    originalEvent: Event;
    value: string;
    checked: AttrTriState;
}

interface TriStateCheckboxInput
    extends Omit<Marko.HTML.Input, `on${string}` | "checked" | "type"> {
    checked?: AttrTriState;
    "skip-mixed"?: boolean;
    size?: "regular" | "large";
    "on-change"?: (event: TriStateCheckboxEvent) => void;
    "on-keydown"?: (event: TriStateCheckboxEvent) => void;
    "on-focus"?: (event: TriStateCheckboxEvent) => void;
}

export interface Input extends WithNormalizedProps<TriStateCheckboxInput> {}

interface State {
    checked: AttrTriState;
}

class TriStateCheckbox extends Marko.Component<Input, State> {
    onInput(input: Input) {
        this.state = { checked: input.checked || "false" };
    }

    triggerChange() {
        if (this.state.checked === "true") {
            this.state.checked = "false";
        } else if (this.state.checked === "false" && !this.input.skipMixed) {
            this.state.checked = "mixed";
        } else {
            this.state.checked = "true";
        }
    }

    handleChange(ev: Event, el: HTMLInputElement) {
        ev.preventDefault();
        this.triggerChange();
        this.forwardEvent("change", ev, el);
    }

    handleKeydown(ev: Event, el: HTMLInputElement) {
        this.forwardEvent("keydown", ev, el);
    }

    handleFocus(ev: Event, el: HTMLInputElement) {
        this.forwardEvent("focus", ev, el);
    }

    forwardEvent(
        eventName: string,
        originalEvent: Event,
        el: HTMLInputElement,
    ) {
        const value = (el || this.el?.querySelector("input")).value;
        const checked = this.state.checked;
        this.emit(`${eventName}`, {
            originalEvent,
            value,
            checked,
        } satisfies TriStateCheckboxEvent);
    }
}

export default TriStateCheckbox;
