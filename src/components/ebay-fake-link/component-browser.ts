import * as eventUtils from "../../common/event-utils";
import type { WithNormalizedProps } from "../../global";

interface FakeLinkInput extends Omit<Marko.HTML.Button, `on${string}`> {
    variant?: "inline" | "standalone";
    "on-click"?: (event: { originalEvent: MouseEvent }) => void;
    "on-escape"?: (event: { originalEvent: KeyboardEvent }) => void;
    "on-focus"?: (event: { originalEvent: FocusEvent }) => void;
    "on-blur"?: (event: { originalEvent: FocusEvent }) => void;
}

export interface Input extends WithNormalizedProps<FakeLinkInput> {}

class FakeLink extends Marko.Component<Input> {
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
    handleFocus(originalEvent: Event) {
        this.emit("focus", { originalEvent });
    }
    handleBlur(originalEvent: Event) {
        this.emit("blur", { originalEvent });
    }
}

export default FakeLink;
