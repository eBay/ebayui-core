/**
 * @description
 * Removes type attribute.
 */

function migrator(el, context) {
    if (el.hasAttribute('type')) {
        context.deprecate('type attribute is no longer supported for icon. All icons default to inline now');
        el.removeAttribute('type');
    }
    if (el.hasAttribute('name')) {
        context.deprecate('<ebay-name-icon> has been deprecated. Please use <ebay-name-icon> instead.');
        const name = el.getAttributeValue('name').value;
        el.setTagName(`ebay-${name}-icon`);
        el.removeAttribute('name');
    }
}

module.exports = migrator;
