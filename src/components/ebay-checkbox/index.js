const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    return {
        classes: ['checkbox', input.class],
        disabled: Boolean(input.disabled),
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    return state;
}

function handleClick(originalEvent) {
    if (!this.state.disabled) {
        emitAndFire(this, 'checkbox-select', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked });
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick
});
