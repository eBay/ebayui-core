const { createIconFromAttribute } = require('../../common/migrators');

// Transforms old icon to prefix or postfix icon
function migratorMarko4(el, context) {
    if (el.hasAttribute('icon') && typeof el.getAttributeValue('icon').value === 'string') {
        const attr = el.getAttribute('icon');
        const isPostfix = el.hasAttribute('icon-position') &&
            el.getAttributeValue('icon-position').value === 'postfix';

        el.setAttributeValue(isPostfix ? 'postfix-icon' : 'prefix-icon', attr.value);
        el.removeAttribute('icon-position');
        el.removeAttribute('icon');

        context.deprecate('attribute icon is now deprecated. Use prefix-icon or postfix-icon instead');
    }

    createIconFromAttribute(el, context, 'prefix-icon');
    createIconFromAttribute(el, context, 'postfix-icon');
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
