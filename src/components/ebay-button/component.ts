import * as eventUtils from '../../common/event-utils';

interface Input extends Marko.Input<'button'> {
    href?: string;
    toJSON?: () => Object;
    size?: 'regular' | 'large' | 'none';
    priority?: 'primary' | 'secondary' | 'tertiary' | 'none';
    variant?: 'standard' | 'destructive' | 'form';
    bodyState?: 'loading' | 'expand' | 'reset' | 'none';
    fluid?: boolean;
    borderless?: boolean;
    disabled?: boolean;
    partiallyDisabled?: boolean;
    'partially-disabled'?: this['partiallyDisabled'];
    transparent?: boolean;
    fixedHeight?: boolean;
    'fixed-height'?: this['fixedHeight'];
    truncate?: boolean;
    split?: string;
    a11yText?: string;
    ariaLabel?: string;
}

export default class extends Marko.Component<Input> {
    handleClick(originalEvent: MouseEvent) {
        if (!this.input.disabled) {
            this.emit('click', { originalEvent });
        }
    }

    handleKeydown(originalEvent: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            if (!this.input.disabled) {
                this.emit('escape', { originalEvent });
            }
        });
    }
    handleFocus(originalEvent: FocusEvent) {
        this.emit('focus', { originalEvent });
    }
    handleBlur(originalEvent: FocusEvent) {
        this.emit('blur', { originalEvent });
    }
}
