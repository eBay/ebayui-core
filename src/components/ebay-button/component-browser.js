const eventUtils = require('../../common/event-utils');

module.exports = {
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
};
