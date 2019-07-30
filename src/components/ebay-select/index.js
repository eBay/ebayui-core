const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialProps(input) {
        const optGroups = {};
        if (input.options) {
            input.options.forEach(option => {
                if (option.optgroup && optGroups.hasOwnProperty(option.optgroup)) {
                    optGroups[option.optgroup].push(option);
                } else if (option.optgroup) {
                    optGroups[option.optgroup] = [option];
                }
            });
        }

        return assign({
            options: [],
            optGroups
        }, input);
    },
    getInitialState(input) {
        const index = findIndex(input.options, option => option.selected);
        const selectedIndex = index === -1 ? 0 : index;

        return assign({}, input, {
            selectedIndex,
            // Note: the line below is because of the programatic API and should be removed if that is removed.
            value: input.options[selectedIndex] && input.options[selectedIndex].value
        });
    },
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
    }
});
