import FloatingLabel from 'makeup-floating-label';

export default {
    handleFloatingLabelInit: forwardEvent('floating-label-init'),
    handleKeydown: forwardEvent('keydown'),
    handleKeypress: forwardEvent('keypress'),
    handleKeyup: forwardEvent('keyup'),
    handleChange: forwardEvent('change'),
    handleInput: forwardEvent('input-change'),
    handleFocus: forwardEvent('focus'),
    handleBlur: forwardEvent('blur'),
    handleButtonClick: forwardEvent('button-click'),
    handleInvalid: forwardEvent('invalid'),

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    focus() {
        this.getEl('input').focus();
    },

    _setupMakeup() {
        // TODO: makeup-floating-label should be updated so that we can remove the event listeners.
        // It probably makes more sense to just move this functionality into Marko though.
        if (this.input.floatingLabel) {
            if (this._floatingLabel) {
                this._floatingLabel.refresh();
                this.handleFloatingLabelInit();
            } else if (document.readyState === 'complete') {
                if (this.el) {
                    this._floatingLabel = new FloatingLabel(this.el);
                    this.handleFloatingLabelInit();
                }
            } else {
                this.subscribeTo(window).once('load', this._setupMakeup.bind(this));
            }
        }
    },
};

function forwardEvent(eventName) {
    return function (originalEvent, el) {
        this.emit(eventName, {
            originalEvent,
            value: (el || this.el.querySelector('input, textarea')).value,
        });
    };
}
