const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const template = require('./template.marko');

function getInitialState(input) {
    return {
        label: input.label,
        href: input.href,
        priority: input.priority || 'secondary',
        size: input.size,
        fluid: input.fluid,
        class: input.class,
        partiallyDisabled: input.partiallyDisabled,
        disabled: Boolean(input.disabled),
        htmlAttributes: processHtmlAttributes(input)
    };
}

function getTemplateData(state) {
    const href = state.href;
    const priority = state.priority || 'secondary';
    const size = state.size;
    const fluid = state.fluid;
    let classes = ['btn'];
    const model = {};
    let tag;

    if (priority === 'primary' || priority === 'secondary') {
        classes.push(`btn--${priority}`);
    }

    if (size === 'small' || size === 'large') {
        classes.push(`btn--${size}`);
    }

    if (fluid) {
        classes.push('btn--fluid');
    }

    if (href) {
        tag = 'a';
        model.href = href;
        classes = classes.map(c => `fake-${c}`); // assumes all classes use the skin btn prefix
    } else {
        tag = 'button';
    }

    // must be after other class processing
    if (state.class) {
        classes.push(state.class);
    }

    model.tag = tag;
    model.classes = classes;
    model.label = state.label;
    model.partiallyDisabled = state.partiallyDisabled ? 'true' : null; // for aria-disabled
    model.disabled = state.disabled;
    model.htmlAttributes = state.htmlAttributes;

    return model;
}

function init() {
    observer.observeRoot(this, ['label']);
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
    init,
    handleClick,
    handleKeydown
});
