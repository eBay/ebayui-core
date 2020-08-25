const { setAttributeIfPresent } = require('../../common/migrators');
const dialogBaseMigrator = require('../components/ebay-dialog-base/migrator');

// Transforms an `icon` attribute into an `<ebay-menu:_icon>` tag
function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-toast-show', 'on-open');
    setAttributeIfPresent(el, context, 'on-toast-close', 'on-close');
    dialogBaseMigrator(el, context);
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
