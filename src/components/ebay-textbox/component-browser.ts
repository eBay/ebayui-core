import FloatingLabel from "makeup-floating-label";
import type { WithNormalizedProps } from "../../global";
import type {
    AttrOnOff,
    AttrString,
    AttrStringOrNumber,
} from "marko/tags-html";

export interface TextboxEvent {
    originalEvent: Event;
    value: string;
}

interface TextboxInput extends Omit<Marko.HTML.Input, `on${string}`> {
    multiline?: boolean;
    type?: Marko.HTML.Input["type"];
    "input-size"?: "regular" | "large";
    fluid?: boolean;
    "opaque-label"?: boolean;
    "floating-label"?: AttrString;
    "floating-label-static"?: boolean;
    "prefix-icon"?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    "prefix-text"?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    "postfix-text"?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    "postfix-icon"?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    invalid?: boolean;
    "button-aria-label"?: AttrString;
    "on-floating-label-init"?: () => void;
    "on-keydown"?: (event: TextboxEvent) => void;
    "on-keypress"?: (event: TextboxEvent) => void;
    "on-keyup"?: (event: TextboxEvent) => void;
    "on-change"?: (event: TextboxEvent) => void;
    "on-input-change"?: (event: TextboxEvent) => void;
    "on-focus"?: (event: TextboxEvent) => void;
    "on-blur"?: (event: TextboxEvent) => void;
    "on-invalid"?: (event: TextboxEvent) => void;
    "on-button-click"?: (event: TextboxEvent) => void;
    // Fields in textarea that aren't in input that we need to include
    autocorrect?: AttrOnOff;
    cols?: AttrStringOrNumber;
    rows?: AttrStringOrNumber;
}

export interface Input extends WithNormalizedProps<TextboxInput> {}

class Textbox extends Marko.Component<Input> {
    declare _floatingLabel: any;

    onMount() {
        this._setupMakeup();
    }

    onUpdate() {
        this._setupMakeup();
    }

    focus() {
        (this.getEl("input") as HTMLInputElement).focus();
    }

    /** Can be removed after `:has` is fully supported */
    onFocus(e: FocusEvent, el: HTMLInputElement) {
        this.forwardEvent("focus", e, el);
        el.parentElement?.classList.add("textbox--focus");
    }

    /** Can be removed after `:has` is fully supported */
    onBlur(e: FocusEvent, el: HTMLInputElement) {
        this.forwardEvent("blur", e, el);
        el.parentElement?.classList.remove("textbox--focus");
    }

    _setupMakeup() {
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel && !this.input.floatingLabelStatic) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.emit("floating-label-init");
            } else if (document.readyState === "complete") {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.emit("floating-label-init");
                }
            } else {
                this.subscribeTo(window).once(
                    "load",
                    this._setupMakeup.bind(this),
                );
            }
        }
    }

    forwardEvent(
        eventName: string,
        originalEvent: Event,
        el: HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement,
    ) {
        this.emit(eventName, {
            originalEvent,
            value: (el || this.el?.querySelector("input, textarea"))?.value,
        } satisfies TextboxEvent);
    }
}

export default Textbox;
