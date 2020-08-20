
const { createIconFromAttribute } = require('../../common/migrators');

function migratorMarko4(el, context) {
    createIconFromAttribute(el, context, 'icon');
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
