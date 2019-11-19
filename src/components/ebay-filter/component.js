const assign = require('core-js-pure/features/object/assign');

module.exports = {
    handleButtonClick(event) {
        if (!this.state.disabled) {
            this.setState('selected', !this.state.selected);
            this.emit('filter-click', event);
        }
    },

    onCreate(input) {
        this.state = assign({}, input, {
            selected: input.selected || false
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
        const filterBody = this.getEl('filter-raw-text');
        if (filterBody) {
            this.setState('text', filterBody.textContent);
        }
    }
};
