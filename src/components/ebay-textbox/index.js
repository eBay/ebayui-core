const markoWidgets = require('marko-widgets');
const FloatingLabel = require('makeup-floating-label');
const emitAndFire = require('../../common/emit-and-fire');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const classes = ['textbox__control'];
    if (input.fluid) {
        classes.push('textbox__control--fluid');
    }
    if (input.floatingLabel) {
        classes.push('textbox__control--underline');
    }
    const displayIcon = Boolean(input.icon && !input.multiline && input.iconTag);
    const iconPostfix = input.iconPosition === 'postfix';
    const iconPrefix = input.iconPosition === 'prefix' || !iconPostfix;
    const rootClasses = ['textbox', input.class];
    const labelClasses = ['floating-label__label'];
    const htmlAttributes = processHtmlAttributes(input);
    const textboxTag = Boolean(input.multiline) ? 'textarea' : 'input';
    let type = input.type || 'text';
    let textareaValue = '';

    // only allow type to be text or password at the moment
    // other types to be addressed later: https://github.com/eBay/ebayui-core/issues/575
    if (type !== 'text' && type !== 'password') {
        type = 'text';
    }

    if (displayIcon && iconPostfix) {
        rootClasses.push('textbox--icon-end');
    }

    if (htmlAttributes.disabled) {
        labelClasses.push('floating-label__label--disabled');
    }

    if (textboxTag === 'textarea' && htmlAttributes.value) {
        textareaValue = htmlAttributes.value;
        htmlAttributes.value = null;
    }

    return {
        htmlAttributes,
        id: input.id,
        rootClass: rootClasses,
        style: input.style,
        type,
        classes,
        icon: input.icon,
        iconTag: input.iconTag && input.iconTag.renderBody,
        displayIcon,
        iconPrefix,
        iconPostfix,
        tag: input.fluid ? 'div' : 'span',
        textboxTag,
        invalid: String(Boolean(input.invalid)),
        floatingLabel: input.floatingLabel,
        labelClasses,
        textareaValue
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    if (this.state.floatingLabel && !this.floatingLabel && document.readyState === 'complete') {
        this.initFloatingLabel();
    } else if (this.state.floatingLabel) {
        window.addEventListener('load', this.initFloatingLabel.bind(this));
    }
}

function onUpdate() {
    if (this.state.floatingLabel) {
        this.initFloatingLabel();
    }
}

function initFloatingLabel() {
    if (!this.floatingLabel) {
        this.floatingLabel = this.el && new FloatingLabel(this.el);
    } else {
        this.floatingLabel.refresh();
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
    template,
    getInitialState,
    getTemplateData,
    init,
    onUpdate,
    initFloatingLabel,
    handleEvent,
    handleChange,
    handleInput,
    handleFocus,
    handleBlur
});
