const markoWidgets = require('marko-widgets');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const classes = ['textbox__control'];
    if (input.fluid) {
        classes.push('textbox__control--fluid');
    }
    return {
        classes,
        htmlAttributes: processHtmlAttributes(input),
        rootClass: ['textbox', input.class],
        tag: input.fluid ? 'div' : 'span',
        textboxTag: Boolean(input.multiline) ? 'textarea' : 'input',
        invalid: String(Boolean(input.invalid))
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
