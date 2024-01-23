import * as eventUtils from "../../common/event-utils";
import type { Input } from "./index.marko";
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
