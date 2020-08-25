const { createIconFromAttribute, setAttributeIfPresent } = require('../../common/migrators');

// Transforms an `icon` attribute into an `<ebay-menu:_icon>` tag
function migratorMarko4(el, context) {
    createIconFromAttribute(el, context, 'icon');
    setAttributeIfPresent(el, context, 'on-menu-button-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-menu-button-keydown', 'on-keydown');
    setAttributeIfPresent(el, context, 'on-menu-button-select', 'on-select');
    setAttributeIfPresent(el, context, 'on-menu-button-expand', 'on-expand');
    setAttributeIfPresent(el, context, 'on-menu-button-collapse', 'on-collapse');
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
