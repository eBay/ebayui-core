const assign = require('core-js-pure/features/object/assign');
const FloatingLabel = require('makeup-floating-label');

module.exports = {
    initFloatingLabel() {
        if (this.state.floatingLabel) {
            if (this.floatingLabel) {
                this.floatingLabel.refresh();
                this.handleFloatingLabelInit();
            } else if (document.readyState === 'complete') {
                if (this.el) {
                    this.floatingLabel = new FloatingLabel(this.el);
                    this.handleFloatingLabelInit();
                }
            } else {
                window.addEventListener('load', this.initFloatingLabel.bind(this));
            }
        }
    },

    handleFloatingLabelInit: forwardEvent('floating-label-init'),
    handleKeydown: forwardEvent('keydown'),
    handleKeypress: forwardEvent('keypress'),
    handleKeyup: forwardEvent('keyup'),
    handleChange: forwardEvent('change'),
    handleInput: forwardEvent('input'),
    handleFocus: forwardEvent('focus'),
    handleBlur: forwardEvent('blur'),

    onInput(input) {
        this.state = assign({}, input, {
            disabled: Boolean(input.disabled)
        });
    },

    onMount() {
        this.initFloatingLabel();
    },

    onUpdate() {
        this.initFloatingLabel();
    }
};

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        this.emit(`textbox-${eventName}`, {
            originalEvent,
            value: (el || this.el.querySelector('input, textarea')).value
        });
    };
}
