const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-combobox-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-combobox-collapse', 'on-collapse');
    setAttributeIfPresent(el, context, 'on-combobox-expand', 'on-expand');
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
