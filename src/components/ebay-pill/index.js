const assign = require('core-js-pure/features/object/assign');
const multilineEllipsis = require('../../common/multiline-ellipsis');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return assign({}, input, {
            pressed: input.pressed || false
        });
    },
    onRender() {
        const activeText = this.getEl('active-text');

        if (activeText) {
            // determine whether the content overflows
            multilineEllipsis.truncate(activeText);
        }
    },
    handleButtonClick(event) {
        this.setState('pressed', !this.state.pressed);
        this.emit('button-click', event);
    },
    handleButtonEscape(event) {
        this.emit('button-escape', event);
    }
});
