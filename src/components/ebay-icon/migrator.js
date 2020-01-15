/**
 * @description
 * Removes type attribute.
 */

function migrator(el, context) {
    if (el.hasAttribute('type')) {
        context.deprecate('type attribute is no longer supported for icon. All icons default to inline now');
        el.removeAttribute('type');
    }
}

module.exports = migrator;
