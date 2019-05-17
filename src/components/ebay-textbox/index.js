const FloatingLabel = require('makeup-floating-label');
const emitAndFire = require('../../common/emit-and-fire');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getWidgetConfig(input) {
        return { floatingLabel: input.floatingLabel };
    },
    getInitialState(input) {
        return Object.assign({}, input, {
            disabled: Boolean(input.disabled)
        });
    },
    init(config) {
        this.config = config;
        this.initFloatingLabel();
    },
    onUpdate() {
        this.initFloatingLabel();
    },
    initFloatingLabel() {
        if (this.config.floatingLabel) {
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
    handleChange: forwardEvent('change'),
    handleInput: forwardEvent('input'),
    handleFocus: forwardEvent('focus'),
    handleBlur: forwardEvent('blur')
});

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        emitAndFire(this, `textbox-${eventName}`, {
            originalEvent,
            value: (el || this.el.querySelector('input, textarea')).value
        });
    };
}
