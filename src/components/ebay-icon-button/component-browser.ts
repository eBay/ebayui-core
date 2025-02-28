import type { AttrString } from "marko/tags-html";
import * as eventUtils from "../../common/event-utils";
import type { WithNormalizedProps } from "../../global";
import type { Input as ButtonInput } from "../ebay-button/index.marko";

interface IconButtonInput
    extends Omit<Marko.HTML.Button, `on${string}` | "type">,
        Omit<Marko.HTML.A, `on${string}`> {
    "badge-number"?: number | string;
    href?: string;
    transparent?: boolean;
    priority?: "primary" | "secondary" | "tertiary" | "none";
    size?: "small" | "large";
    partiallyDisabled?: ButtonInput["partiallyDisabled"];
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
