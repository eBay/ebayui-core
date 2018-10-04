const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const classes = ['textbox__control'];
    if (input.fluid) {
        classes.push('textbox__control--fluid');
    }
    return {
        htmlAttributes: processHtmlAttributes(input),
        rootClass: ['textbox', input.class],
        style: input.style,
        classes,
        tag: input.fluid ? 'div' : 'span',
        textboxTag: Boolean(input.multiline) ? 'textarea' : 'input',
        invalid: String(Boolean(input.invalid))
    };
}

function getTemplateData(state) {
    return state;
}

function handleEvent(originalEvent, eventName) {
    emitAndFire(this, `textbox-${eventName}`, { originalEvent, value: originalEvent.target.value });
}

const handleChange = function(originalEvent) { this.handleEvent(originalEvent, 'change'); };
const handleInput = function(originalEvent) { this.handleEvent(originalEvent, 'input'); };
const handleFocus = function(originalEvent) { this.handleEvent(originalEvent, 'focus'); };
const handleBlur = function(originalEvent) { this.handleEvent(originalEvent, 'blur'); };

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleEvent,
    handleChange,
    handleInput,
    handleFocus,
    handleBlur
});
