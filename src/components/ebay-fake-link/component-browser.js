import * as eventUtils from '../../common/event-utils';

export default {
    handleClick(originalEvent) {
        if (!this.input.disabled) {
            this.emit('click', { originalEvent });
        }
    },

    handleKeydown(originalEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            if (!this.input.disabled) {
                this.emit('escape', { originalEvent });
            }
        });
    },
    handleFocus(originalEvent) {
        this.emit('focus', { originalEvent });
    },
    handleBlur(originalEvent) {
        this.emit('blur', { originalEvent });
    },
};
