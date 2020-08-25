
const { createIconFromAttribute, setAttributeIfPresent } = require('../../common/migrators');

function migratorMarko4(el, context) {
    createIconFromAttribute(el, context, 'icon');
    setAttributeIfPresent(el, context, 'on-tooltip-expand', 'on-expand');
    setAttributeIfPresent(el, context, 'on-tooltip-collapse', 'on-collapse');
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
