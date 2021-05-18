const findIndex = require('core-js-pure/features/array/find-index');

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

    onCreate() {
        this.state = { selectedIndex: 0 };
    },

    onInput(input) {
        const { state } = this;
        input.options = input.options || [];
        state.selectedIndex = Math.max(
            0,
            findIndex(input.options, (option) => option.selected)
        );
    },
};
