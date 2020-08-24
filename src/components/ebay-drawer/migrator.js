const { setAttributeIfPresent } = require('../../common/migrators');
const dialogBaseMigrator = require('../components/ebay-dialog-base/migrator');

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-drawer-show', `on-open`);
    setAttributeIfPresent(el, context, 'on-drawer-close', `on-close`);
    setAttributeIfPresent(el, context, 'on-drawer-expanded', `on-expanded`);
    setAttributeIfPresent(el, context, 'on-drawer-collapsed', `on-collapsed`);
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
