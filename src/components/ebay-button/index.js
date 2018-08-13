const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    return {
        disabled: Boolean(input.disabled)
    };
}

function getTemplateData(state, input) {
    const href = input.href;
    const priority = input.priority || 'secondary';
    const size = input.size;
    const fluid = input.fluid;
    let variant = input.variant;
    const model = {};
    let tag;
    let mainClass = 'btn';

    if (href) {
        variant = 'fake';
        tag = 'a';
        model.href = href;
    } else {
        tag = 'button';
    }

    if (href || variant === 'expand' || variant === 'cta') {
        mainClass = `${variant}-${mainClass}`;
    }

    const classes = [mainClass, input.class];

    if (priority === 'primary' || priority === 'secondary') {
        classes.push(`${mainClass}--${priority}`);
    }

    if (size === 'small' || size === 'large') {
        classes.push(`${mainClass}--${size}`);
    }

    if (fluid) {
        classes.push(`${mainClass}--fluid`);
    }

    model.htmlAttributes = processHtmlAttributes(input);
    model.classes = classes;
    model.style = input.style;
    model.tag = tag;
    model.type = input.type || 'button';
    model.disabled = state.disabled;
    model.partiallyDisabled = input.partiallyDisabled ? 'true' : null; // for aria-disabled

    return model;
}

function handleClick(originalEvent) {
    if (!this.state.disabled) {
        emitAndFire(this, 'button-click', { originalEvent });
    }
}

/**
 * Handle accessibility features
 * https://ebay.gitbooks.io/mindpatterns/content/input/button.html#keyboard
 * @param {MouseEvent} e
 */
function handleKeydown(e) {
    eventUtils.handleActionKeydown(e, () => {
        this.handleClick(e);
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick,
    handleKeydown
});
