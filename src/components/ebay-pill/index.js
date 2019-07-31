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
        const pillBody = this.getEl('pill-raw-text');
        if (pillBody) {
            this.setState('text', pillBody.textContent);
        }
    },
    handleButtonClick(event) {
        if (!this.state.disabled) {
            this.setState('pressed', !this.state.pressed);
            this.emit('pill-click', event);
        }
    }
});
