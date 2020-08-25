const { setAttributeIfPresent } = require('../../common/migrators');

// Transforms an `icon` attribute into an `<ebay-menu:_icon>` tag
function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-radio-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-radio-focus', 'on-focus');
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
