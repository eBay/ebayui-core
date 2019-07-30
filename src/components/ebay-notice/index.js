const assign = require('core-js-pure/features/object/assign');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return assign({}, input, {
            hidden: input.hidden || false
        });
    },
    handleDismiss() {
        if (!this.state.hidden) {
            this.setState('hidden', true);
            this.emit('notice-close');
        }
    }
});
