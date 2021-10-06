const FloatingLabel = require('makeup-floating-label');

module.exports = {
    handleChange(event) {
        const { selectedIndex } = event.target;
        const el = this.getEls('option')[selectedIndex];
        const option = this.input.options[selectedIndex];

        this.state.selectedIndex = selectedIndex;

        // TODO: we should not cast the selected value to a string here, but this is a breaking change.
        this.emit('change', {
            index: selectedIndex,
            selected: [String(option.value)],
            el,
        });
    },

    handleFloatingLabelInit() {
        this.emit('floating-label-init');
    },

    onCreate() {
        this.state = { selectedIndex: 0 };
    },

    onInput(input) {
        const { state } = this;
        input.options = input.options || [];
        state.selectedIndex = Math.max(
            0,
            input.options.findIndex((option) => option.selected)
        );
    },

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
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
