const assign = require('core-js-pure/features/object/assign');
const eventUtils = require('../../common/event-utils');

module.exports = {
    onCreate(input) {
        this.state = assign({}, input, {
            disabled: input.disabled
        });
    },
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
