const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');
let initIcons = false;

function getInitialState(input) {
    const classes = ['textbox__control'];
    if (input.fluid) {
        classes.push('textbox__control--fluid');
    }
    const iconPostfix = input.iconPosition === 'postfix';
    const rootClasses = ['textbox', input.class];
    if (iconPostfix) {
        rootClasses.push('textbox--icon-end');
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        rootClass: rootClasses,
        style: input.style,
        classes,
        initIcons: false,
        iconName: input.iconName,
        displayIcon: input.iconName && !Boolean(input.multiline),
        iconPostfix,
        tag: input.fluid ? 'div' : 'span',
        textboxTag: Boolean(input.multiline) ? 'textarea' : 'input',
        invalid: String(Boolean(input.invalid))
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    if (!initIcons) {
        initIcons = true;
        this.setState('initIcons', initIcons);
    }
}

function handleEvent(originalEvent, eventName) {
    emitAndFire(this, `textbox-${eventName}`, { originalEvent, value: originalEvent.target.value });
}

const handleChange = function(originalEvent) { this.handleEvent(originalEvent, 'change'); };
const handleInput = function(originalEvent) { this.handleEvent(originalEvent, 'input'); };
const handleFocus = function(originalEvent) { this.handleEvent(originalEvent, 'focus'); };
const handleBlur = function(originalEvent) { this.handleEvent(originalEvent, 'blur'); };

module.exports = markoWidgets.defineComponent({
    init,
    template,
    getInitialState,
    getTemplateData,
    handleEvent,
    handleChange,
    handleInput,
    handleFocus,
    handleBlur
});
