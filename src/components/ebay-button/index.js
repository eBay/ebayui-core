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
    const priority = input.priority;
    const size = input.size;
    const fluid = input.fluid;
    const classes = [input.class];
    const model = {};
    let tag;

    if (href) {
        tag = 'a';
        model.href = href;
        classes.push('fake-btn');
    } else {
        tag = 'button';
        classes.push('btn');
    }

    if (priority === 'primary' || priority === 'secondary') {
        classes.push(`btn--${priority}`);
    }

    if (size === 'small' || size === 'large') {
        classes.push(`btn--${size}`);
    }

    if (fluid) {
        classes.push('btn--fluid');
    }

    model.tag = tag;
    model.classes = classes;
    model.disabled = state.disabled;
    model.partiallyDisabled = input.partiallyDisabled ? 'true' : null; // for aria-disabled
    model.htmlAttributes = processHtmlAttributes(input);

    return model;
}

function handleClick() {
    if (!this.state.disabled) {
        emitAndFire(this, 'button-click');
    }
}

/**
 * Handle accessibility features
 * https://ebay.gitbooks.io/mindpatterns/content/input/button.html#keyboard
 * @param {MouseEvent} e
 */
function handleKeydown(e) {
    eventUtils.handleActionKeydown(e, () => {
        this.handleClick();
    });
}

module.exports = markoWidgets.defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleClick,
    handleKeydown
});
