const assign = require('core-js-pure/features/object/assign');

module.exports = {
    handleDismiss() {
        if (!this.state.hidden) {
            this.setState('hidden', true);
            this.emit('notice-close');
        }
    },

    onInput(input) {
        this.state = assign({}, input, {
            hidden: input.hidden || false
        });
    }
};
