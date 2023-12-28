import * as eventUtils from "../../common/event-utils";
import { validSizes } from "./constants";

export interface ButtonEvent<T extends Event> {
    originalEvent: T;
}

interface ButtonInput extends Omit<Marko.Input<"button">, `on${string}`> {
    href?: string;
    toJSON?: () => Object;
    size?: (typeof validSizes)[number];
    priority?: "primary" | "secondary" | "tertiary" | "none";
    variant?: "standard" | "destructive" | "form";
    "body-state"?: "loading" | "expand" | "reset" | "none";
    fluid?: boolean;
    borderless?: boolean;
    disabled?: boolean;
    "partially-disabled"?: boolean;
    transparent?: boolean;
    "fixed-height"?: boolean;
    truncate?: boolean;
    split?: string;
    "a11y-text"?: string;
    "aria-label"?: string;
    "on-click"?: (event: ButtonEvent<MouseEvent>) => void;
    "on-escape"?: (event: ButtonEvent<KeyboardEvent>) => void;
    "on-focus"?: (event: ButtonEvent<FocusEvent>) => void;
    "on-blur"?: (event: ButtonEvent<FocusEvent>) => void;
}

export interface Input extends WithNormalizedProps<ButtonInput> {}

class Button extends Marko.Component<Input> {
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

export default Button;
