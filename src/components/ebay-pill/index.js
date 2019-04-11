const multilineEllipsis = require('../../common/multiline-ellipsis');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState(input) {
        return Object.assign({}, input, {
            pressed: input.pressed || false
        });
    },
    onRender() {
        const activeText = this.getEl("active-text");

        if (activeText) {
            // determine whether the content overflows
            multilineEllipsis.truncate(activeText);
        }
    },
    handleButtonClick(event) {
        this.setState('pressed', !this.state.pressed);
        emitAndFire(this, 'button-click', event);
    },
    handleButtonEscape(event) {
        emitAndFire(this, 'button-escape', event);
    }
});
