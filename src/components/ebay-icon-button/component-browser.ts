import type { AttrString } from "marko/tags-html";
import * as eventUtils from "../../common/event-utils";
import type { WithNormalizedProps } from "../../global";

interface IconButtonInput extends Omit<Marko.Input<"button">, `on${string}`> {
    "badge-number"?: number | string;
    href?: string;
    transparent?: boolean;
    size?: "small" | "large";
    "partially-disabled"?: boolean;
    "badge-aria-label"?: AttrString;
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
    "on-escape"?: (event: { originalEvent: KeyboardEvent }) => void;
    "on-focus"?: (event: { originalEvent: FocusEvent }) => void;
    "on-blur"?: (event: { originalEvent: FocusEvent }) => void;
}

export interface Input extends WithNormalizedProps<IconButtonInput> {}

class IconButton extends Marko.Component<Input> {
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

export default IconButton;
