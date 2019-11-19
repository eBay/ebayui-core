const assign = require('core-js-pure/features/object/assign');

module.exports = {
    handleButtonClick(event) {
        if (!this.state.disabled) {
            this.setState('pressed', !this.state.pressed);
            this.emit('pill-click', event);
        }
    },

    onInput(input) {
        this.state = assign({}, input, {
            pressed: input.pressed || false
        });
    },

    onMount() {
        this.onRenderLegacy({
            firstRender: true
        });
    },

    onUpdate() {
        this.onRenderLegacy({
            firstRender: false
        });
    },

    onRenderLegacy() {
        const pillBody = this.getEl('pill-raw-text');
        if (pillBody) {
            this.setState('text', pillBody.textContent);
        }
    }
};
