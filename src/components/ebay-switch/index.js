const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    return {
        htmlAttributes: processHtmlAttributes(input),
        classes: ['switch', input.class],
        style: input.style,
        disabled: Boolean(input.disabled)
    };
}

function getTemplateData(state) {
    return state;
}

function handleClick(originalEvent) {
    if (!this.state.disabled) {
        emitAndFire(this, 'switch-change', {
            originalEvent,
            value: originalEvent.target.value,
            checked: originalEvent.target.checked
        });
    }
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick
});
