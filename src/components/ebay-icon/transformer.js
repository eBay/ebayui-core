const path = require('path');

/**
 * @description
 * Inlines the symbol component as the body of the `ebay-icon` component (inline components only).
 *
 * @example
 * <ebay-icon type="inline" name="close"/>
 *
 * Becomes
 *
 * <ebay-icon type="inline" name="close"><include('$DIRNAME/symbols/close.marko')/></ebay-icon>
 */

function transform(el, context) {
    const nameAttribute = el.getAttribute('name');
    const typeAttribute = el.getAttribute('type');
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    if (isInline && iconName) {
        const templatePath = path.join(__dirname, `symbols/${iconName}.marko`);
        el.prependChild(context.createNodeForEl('include', {}, JSON.stringify(templatePath)));
    }

    return context;
}

module.exports = transform;
