/**
 * @description
 * Removes type attribute.
 */

function migratorMarko4(el, context) {
    if (el.hasAttribute('type')) {
        context.deprecate(
            'type attribute is no longer supported for icon. All icons default to inline now'
        );
        el.removeAttribute('type');
    }
    if (el.hasAttribute('name')) {
        context.deprecate(
            '<ebay-name-icon> has been deprecated. Please use <ebay-name-icon> instead.'
        );
        const name = el.getAttributeValue('name').value;
        el.setTagName(`ebay-${name}-icon`);
        el.removeAttribute('name');
    }
}

function migratorMarko5() {
    return;
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
