const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');

module.exports = {
    handleChange(event) {
        const selectedIndex = event.target.selectedIndex;
        const el = this.getEls('option')[selectedIndex];
        const option = this.state.options[selectedIndex];

        this.setState('selectedIndex', selectedIndex);

        // Note: this is only set because of the programatic API and should be removed if that is removed.
        this.setState('value', option && option.value);

        // TODO: we should not cast the selected value to a string here, but this is a breaking change.
        this.emit('select-change', {
            index: selectedIndex,
            selected: [String(option.value)],
            el
        });
    },

    onInput(input) {
        const optGroups = {};
        let selectedIndex = 0;
        let value;
        if (input.options) {
            input.options.forEach(option => {
                if (option.optgroup && optGroups.hasOwnProperty(option.optgroup)) {
                    optGroups[option.optgroup].push(option);
                } else if (option.optgroup) {
                    optGroups[option.optgroup] = [option];
                }
            });

            const index = findIndex(input.options, option => option.selected);
            selectedIndex = index === -1 ? 0 : index;
            // Note: the line below is because of the programatic API and should be removed if that is removed.
            value = input.options[selectedIndex] && input.options[selectedIndex].value;
        }

        this.state = assign({
            options: [],
            optGroups
        }, input, {
            value,
            selectedIndex
        });
    }
};
