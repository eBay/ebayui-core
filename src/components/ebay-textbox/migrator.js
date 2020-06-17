// Transforms old icon to prefix or postfix icon
function migrate(el, context) {
    if (el.hasAttribute('icon')) {
        const attr = el.getAttribute('icon');
        const isPostfix = el.hasAttribute('icon-position') &&
            el.getAttributeValue('icon-position').value === 'postfix';

        el.setAttributeValue(isPostfix ? 'postfix-icon' : 'prefix-icon', attr.value);
        el.removeAttribute('icon-position');
        el.removeAttribute('icon');

        context.deprecate('attribute icon is now deprecated. Use prefix-icon or postfix-icon instead');
    }
}

module.exports = migrate;
