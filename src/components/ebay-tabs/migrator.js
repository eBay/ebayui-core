const { setAttributeIfPresent } = require('../../common/migrators');

// Transforms an `icon` attribute into an `<ebay-menu:_icon>` tag
function migratorMarko4(el, context) {
    if (el.hasAttribute('fake')) {
        el.removeAttribute('fake');
        el.setTagName('ebay-fake-tabs');
        context.deprecate('"fake" attribute has been removed from ebay-tabs. Use ebay-fake-tabs instead.');
    }
    setAttributeIfPresent(el, context, 'on-tabs-select', 'on-select');
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
