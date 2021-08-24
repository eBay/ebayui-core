const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'type', 'alignment');
    return el;
}

function migratorMarko5(path) {
    const index = path.node.attributes.findIndex((a) => a.name === 'type');
    if (index !== -1) {
        path.node.attributes[index].name = 'alignment';
    }
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
