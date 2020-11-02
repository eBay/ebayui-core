const { createIconFromAttribute, setAttributeIfPresent } = require('../../common/migrators');

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

    setAttributeIfPresent(el, context, 'on-textbox-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-textbox-input', 'on-input-change');
    setAttributeIfPresent(el, context, 'on-textbox-focus', 'on-focus');
    setAttributeIfPresent(el, context, 'on-textbox-blur', 'on-blur');
    setAttributeIfPresent(el, context, 'on-textbox-keydown', 'on-keydown');
    setAttributeIfPresent(el, context, 'on-textbox-keypress', 'on-keypress');
    setAttributeIfPresent(el, context, 'on-textbox-keyup', 'on-keyup');
    setAttributeIfPresent(el, context, 'on-textbox-floating-label-init', 'on-floating-label-init');
    setAttributeIfPresent(el, context, 'on-textbox-button-click', 'on-button-click');
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
