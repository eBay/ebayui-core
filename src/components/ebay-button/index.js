const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const truncate = require('../../common/truncate');
const template = require('./template.marko');

function getInitialState(input) {
    return {
        disabled: Boolean(input.disabled),
        pill: input.pill
    };
}

function getTemplateData(state, input) {
    const href = input.href;
    const priority = input.priority || 'secondary';
    const size = input.size;
    const noText = input.noText;
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

    const isExpandVariant = variant === 'expand';
    const isCtaVariant = variant === 'cta';
    if (href || isExpandVariant || isCtaVariant) {
        mainClass = `${variant}-${mainClass}`;
    }

    const classes = [mainClass, input.class];

    if (priority === 'primary' || priority === 'secondary') {
        classes.push(`${mainClass}--${priority}`);
    }

    if (size === 'small' || size === 'large') {
        classes.push(`${mainClass}--${size}`);
    }

    if (isExpandVariant && noText) {
        classes.push(`${mainClass}--no-text`);
    }

    if (fluid) {
        classes.push(`${mainClass}--fluid`);
    }

    if (input.pill) {
        classes.push(`${mainClass}--pill`);
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

function onRender() {
    const children = this.el.children;
    if (this.state.pill && children.length && children[0].children.length) {
        truncate({
            el: children[0].children[0]
        });
    }
}

function handleClick(originalEvent) {
    if (!this.state.disabled) {
        emitAndFire(this, 'button-click', { originalEvent });
    }
}

/**
 * Handle a11y features
 * https://ebay.gitbooks.io/mindpatterns/content/input/button.html#keyboard
 * @param {MouseEvent} e
 */
function handleKeydown(originalEvent) {
    eventUtils.handleActionKeydown(originalEvent, () => {
        this.handleClick(originalEvent);
    });
    eventUtils.handleEscapeKeydown(originalEvent, () => {
        if (!this.state.disabled) {
            emitAndFire(this, 'button-escape', { originalEvent });
        }
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick,
    handleKeydown,
    onRender
});
