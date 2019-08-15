const assign = require('core-js-pure/features/object/assign');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return assign({}, input, {
            pressed: input.pressed || false
        });
    },
    onRender() {
        const filterBody = this.getEl('filter-raw-text');
        if (filterBody) {
            this.setState('text', filterBody.textContent);
        }
    },
    handleButtonClick(event) {
        if (!this.state.disabled) {
            this.setState('pressed', !this.state.pressed);
            this.emit('filter-click', event);
        }
    }
});
