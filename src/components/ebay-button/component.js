const assign = require('core-js-pure/features/object/assign');
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
    },

    onCreate(input) {
        this.state = assign({}, input, {
            disabled: input.disabled
        });
    }
};
