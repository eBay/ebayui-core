const assign = require('core-js-pure/features/object/assign');
const eventUtils = require('../../common/event-utils');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState(input) {
        return assign({}, input, {
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
});
