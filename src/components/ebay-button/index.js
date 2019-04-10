const markoWidgets = require('marko-widgets');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const processHtmlAttributes = require('../../common/html-attributes');
const observer = require('../../common/property-observer');
const getWidgetId = require('../../common/get-marko-3-widget-id');
const template = require('./template.marko');

function getInitialState(input, out) {
    const href = input.href;
    const priority = input.priority || 'secondary';
    const size = input.size;
    const noText = input.noText;
    const fluid = input.fluid;
    const fixedHeight = input.fixedHeight;
    const truncate = input.truncate;
    let type = input.type || 'button';
    let variant = input.variant;
    let tag;
    let mainClass = 'btn';
    let sizeClass = '';
    let fixedHeightClass = '';
    let truncatedClass = '';

    const isExpandVariant = variant === 'expand';
    const isCtaVariant = variant === 'cta';
    const isIconVariant = variant === 'icon';
    const isBadged = Boolean(input.badgeNumber && isIconVariant);
    const hasAriaLabel = Boolean(input['*'] && input['*'].ariaLabel);

    if (href && !isCtaVariant) {
        variant = 'fake';
        tag = 'a';
    } else if (href && isCtaVariant) {
        tag = 'a';
        type = null;
    } else {
        tag = 'button';
    }

    if (href || isExpandVariant || isCtaVariant || isIconVariant) {
        mainClass = `${variant}-${mainClass}`;
    }

    const classes = [mainClass, input.class];

    if (!isIconVariant && !isBadged && (priority === 'primary' || priority === 'secondary')) {
        classes.push(`${mainClass}--${priority}`);
    }

    if (!isBadged && (size === 'small' || size === 'medium' || size === 'large')) {
        sizeClass = `${mainClass}--${size}`;
    } else if (!size && (fixedHeight || truncate)) {
        sizeClass = `${mainClass}--medium`;
    }

    if (fixedHeight) {
        fixedHeightClass = `${sizeClass}-fixed-height`;
        classes.push(fixedHeightClass);
    }

    if (truncate) {
        truncatedClass = `${sizeClass}-truncated`;
        classes.push(truncatedClass);
    }

    if (!fixedHeight && !truncate) {
        classes.push(sizeClass);
    }

    if (isIconVariant || isBadged || (isExpandVariant && noText)) {
        classes.push(`${mainClass}--no-text`);
    }

    if (fluid) {
        classes.push(`${mainClass}--fluid`);
    }

    if (isBadged) {
        classes.push(`${mainClass}--badged`);
    }

    return {
        htmlAttributes: processHtmlAttributes(input),
        id: input.id || getWidgetId(out),
        classes,
        style: input.style,
        tag,
        href,
        type,
        variant,
        disabled: Boolean(input.disabled),
        partiallyDisabled: input.partiallyDisabled ? 'true' : null, // for aria-disabled
        isBadged,
        hasAriaLabel,
        badgeNumber: input.badgeNumber,
        badgeAriaLabel: input.badgeAriaLabel
    };
}

function getTemplateData(state) {
    return state;
}

function init() {
    observer.observeRoot(this, ['disabled']);
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
    init,
    handleClick,
    handleKeydown
});
