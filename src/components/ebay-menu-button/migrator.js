const { createIconFromAttribute, setAttributeIfPresent } = require('../../common/migrators');

// Transforms an `icon` attribute into an `<ebay-menu:_icon>` tag
function migratorMarko4(el, context) {
    createIconFromAttribute(el, context, 'icon');
    setAttributeIfPresent(el, context, 'on-menu-button-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-menu-button-keydown', 'on-keydown');
    setAttributeIfPresent(el, context, 'on-menu-button-select', 'on-select');
    setAttributeIfPresent(el, context, 'on-menu-button-expand', 'on-expand');
    setAttributeIfPresent(el, context, 'on-menu-button-collapse', 'on-collapse');
    if (el.hasAttribute('type') && el.getAttributeValue('type') === 'fake') {
        el.removeAttribute('type');
        el.setTagName('ebay-fake-menu-button');
        context.deprecate(
            '"type=fake" attribute has been removed from ebay-menu-button. Use ebay-fake-menu-button instead.');
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
