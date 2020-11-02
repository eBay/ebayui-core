const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-filter-menu-button-change', 'on-change');
    setAttributeIfPresent(el, context, 'on-filter-menu-button-expand', 'on-expand');
    setAttributeIfPresent(el, context, 'on-filter-menu-button-collapse', 'on-collapse');
    setAttributeIfPresent(el, context, 'on-filter-menu-button-footer-click', 'on-footer-click');
    setAttributeIfPresent(el, context, 'on-filter-menu-button-form-submit', 'on-form-submit');
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
