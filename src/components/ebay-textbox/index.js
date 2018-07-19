const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const htmlAttributes = input.invalid ?
        Object.assign({}, processHtmlAttributes(input), { 'aria-invalid': 'true' }) : processHtmlAttributes(input);
    let classes = { 'textbox__control': true, 'textbox__control--fluid': input.fluid };
    if (input.class) {
        classes = Object.assign({ }, classes, { [input.class]: true });
    }
    return {
        htmlAttributes,
        classes,
        value: input.value,
        tag: input.fluid ? 'div' : 'span',
        textBoxTag: Boolean(input.multiline) ? 'textarea' : 'input',
        disabled: Boolean(input.disabled),
        placeholder: input.placeholder
    };
}

function getTemplateData(state) {
    return state;
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData
});
