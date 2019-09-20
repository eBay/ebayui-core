const assign = require('core-js-pure/features/object/assign');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        let prefix = input.type || 'page';
        if (input.type === 'guidance') {
            prefix = 'page';
        }

        return assign({}, input, {
            hidden: input.hidden || false,
            prefix: prefix
        });
    },
    handleDismiss() {
        if (!this.state.hidden) {
            this.setState('hidden', true);
            this.emit('notice-close');
        }
    }
});
