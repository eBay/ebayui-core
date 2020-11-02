const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-menu-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-menu-keydown', 'on-keydown');
    setAttributeIfPresent(el, context, 'on-menu-select', 'on-select');
    if (el.hasAttribute('type') && el.getAttributeValue('type') === 'fake') {
        el.removeAttribute('type');
        el.setTagName('ebay-fake-menu');
        context.deprecate('"type=fake" attribute has been removed from ebay-menu. Use ebay-fake-menu instead.');
    }

    return el;
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
