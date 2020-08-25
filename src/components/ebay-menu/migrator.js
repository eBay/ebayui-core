const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-menu-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-menu-keydown', 'on-keydown');
    setAttributeIfPresent(el, context, 'on-menu-select', 'on-select');
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
