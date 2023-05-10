import * as eventUtils from '../../common/event-utils';

interface Input extends Omit<Marko.Input<'button'>, `on${string}`> {
    toJSON?: any;
    variant?: 'inline' | 'standalone';
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
