import { Input as ButtonInput } from '../ebay-button/component';
import { Input as MenuButtonInput } from '../ebay-menu-button/component';

export interface Input extends MenuButtonInput {
    size?: ButtonInput['size'];
    disabled?: ButtonInput['disabled'];
    priority?: ButtonInput['priority'];
    bodyState?: ButtonInput['bodyState'];
    href?: ButtonInput['href'];
    a11yButtonLoadingText?: ButtonInput['a11yText'];
    a11yMenuText?: MenuButtonInput['a11yText'];
    'on-click'?: () => void;
    onClick?: this['on-click'];
    'on-escape'?: () => void;
    onEscape?: this['on-escape'];
    'on-focus'?: () => void;
    onFocus?: this['on-focus'];
    'on-blur'?: () => void;
    onBlur?: this['on-blur'];
    'on-collapse'?: () => void;
    onCollapse?: this['on-collapse'];
    'on-expand'?: () => void;
    onExpand?: this['on-expand'];
    'on-change'?: () => void;
    onChange?: this['on-change'];
    'on-select'?: () => void;
    onSelect?: this['on-select'];
}

export default class extends Marko.Component<Input> {}
