const DEFAULT_TIMEOUT_LENGTH = 6000;
import type { WithNormalizedProps } from "../../global";
import type { Input as BaseInput } from "../components/ebay-dialog-base/component";

interface SnackbarDialogInput extends Omit<BaseInput, `on${string}`> {
    layout?: "row" | "column";
    action?: BaseInput["action"] & {
        accessKey?: string;
    };
    "on-action"?: () => void;
    "on-open"?: () => void;
    "on-close"?: () => void;
}

export interface Input extends WithNormalizedProps<SnackbarDialogInput> {}

interface State {
    open: boolean;
}

class SnackbarDialog extends Marko.Component<Input, State> {
    declare timeout: ReturnType<typeof setTimeout>;
    declare eventSet: Set<string>;

    _clearTimeout() {
        clearTimeout(this.timeout);
    }

    _setupTimeout() {
        if (this.state.open !== false) {
            this.timeout = setTimeout(() => {
                this.state.open = false;
            }, DEFAULT_TIMEOUT_LENGTH);
        }
    }

    onInput(input: Input) {
        this.state = { open: input.open || this.state.open || false };
    }

    onMount() {
        this._setupTimeout();
    }

    onUpdate() {
        this._setupTimeout();
    }

    onRender() {
        if (typeof window !== "undefined") {
            this._clearTimeout();
        }
    }

    onDestroy() {
        this._clearTimeout();
    }

    onCreate() {
        this.eventSet = new Set();
        this.state = { open: false };
    }

    handleAction() {
        this._clearTimeout();
        this.emit("action");
        this.state.open = false;
    }

    handleFocus() {
        this._clearTimeout();
        this.eventSet.add("focus");
    }

    handleBlur() {
        this.eventSet.delete("focus");
        if (this.eventSet.size === 0) {
            this._clearTimeout();
            this.timeout = setTimeout(() => {
                this.state.open = false;
            }, DEFAULT_TIMEOUT_LENGTH);
        }
    }

    handleMouseEnter() {
        this._clearTimeout();
        this.eventSet.add("mouseOver");
    }

    handleMouseLeave() {
        this.eventSet.delete("mouseOver");
        if (this.eventSet.size === 0 && this.state.open === true) {
            this._clearTimeout();
            this.timeout = setTimeout(() => {
                this.state.open = false;
            }, DEFAULT_TIMEOUT_LENGTH);
        }
    }

    handleClose() {
        this._clearTimeout();
        this.state.open = false;
        this.emit("close");
    }
}

export default SnackbarDialog;
