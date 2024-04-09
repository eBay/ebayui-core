import type { WithNormalizedProps } from "../../global";
import type { Input as ButtonInput } from "../ebay-button/index.marko";
import type { Input as MenuButtonInput } from "../ebay-menu-button/component";

interface SplitButtonInput extends Omit<MenuButtonInput, `on${string}`> {
    size?: ButtonInput["size"];
    disabled?: ButtonInput["disabled"];
    priority?: ButtonInput["priority"];
    partiallyDisabled?: ButtonInput["partiallyDisabled"];
    "body-state"?: ButtonInput["bodyState"];
    href?: ButtonInput["href"];
    "a11y-button-loading-text"?: ButtonInput["a11yText"];
    "a11y-menu-text"?: MenuButtonInput["a11yText"];
    "on-click"?: () => void;
    "on-escape"?: () => void;
    "on-focus"?: () => void;
    "on-blur"?: () => void;
    "on-collapse"?: () => void;
    "on-expand"?: () => void;
    "on-change"?: () => void;
    "on-select"?: () => void;
}

export interface Input extends WithNormalizedProps<SplitButtonInput> {}

class SplitButton extends Marko.Component<Input> {}

export default SplitButton;
