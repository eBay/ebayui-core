import * as eventUtils from "../../common/event-utils";

export interface Input extends Omit<Marko.Input<"button">, `on${string}`> {
    toJSON?: any;
    variant?: "inline" | "standalone";
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
    onClick?: this["on-click"];
    "on-escape"?: (event: { originalEvent: KeyboardEvent }) => void;
    onEscape?: this["on-escape"];
    "on-focus"?: (event: { originalEvent: FocusEvent }) => void;
    onFocus?: this["on-focus"];
    "on-blur"?: (event: { originalEvent: FocusEvent }) => void;
    onBlur?: this["on-blur"];
}

export default class extends Marko.Component<Input> {
    handleClick(originalEvent: MouseEvent) {
        if (!this.input.disabled) {
            this.emit("click", { originalEvent });
        }
    }

    handleKeydown(originalEvent: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            if (!this.input.disabled) {
                this.emit("escape", { originalEvent });
            }
        });
    }
    handleFocus(originalEvent: FocusEvent) {
        this.emit("focus", { originalEvent });
    }
    handleBlur(originalEvent: FocusEvent) {
        this.emit("blur", { originalEvent });
    }
}
