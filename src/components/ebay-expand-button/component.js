const eventUtils = require('../../common/event-utils');

module.exports = {
    handleClick(originalEvent) {
        if (!this.state.disabled) {
            this.emit('button-click', { originalEvent });
        }
    },
    handleKeydown(originalEvent) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            if (!this.state.disabled) {
                this.emit('button-escape', { originalEvent });
            }
        });
    }
};
