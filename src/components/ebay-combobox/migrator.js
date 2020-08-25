const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-combobox-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-combobox-input', 'on-input-change');
    setAttributeIfPresent(el, context, 'on-combobox-select', 'on-select');
    setAttributeIfPresent(el, context, 'on-combobox-collapse', 'on-collapse');
    setAttributeIfPresent(el, context, 'on-combobox-expand', 'on-expand');
    setAttributeIfPresent(el, context, 'on-combobox-focus', 'on-focus');
    setAttributeIfPresent(el, context, 'on-combobox-button-click', 'on-button-click');
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
