const { setAttributeIfPresent, setAttributeIfPresentV5 } = require('../../common/migrators');

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'a11y-text', 'a11y-icon-text');
}

function migratorMarko5(path) {
    setAttributeIfPresentV5(path, 'a11y-text', 'a11y-icon-text');
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
