/**
 * Transform ebay-* components' child tags for use as nested tags
 * Example: <ebay-combobox-option> to <@option>
 * @param {Object} el
 * @param {Object} context
 */
function migratorMarko4(el, context) {
    const newTag = el.tagName.replace(/^(ebay-.*)\-(?=[^-]*$)/, '@');
    context.deprecate(`${el.tagName} is no longer used. Use ${newTag} instead`);
    el.setTagName(newTag);
}

function migratorMarko5(path) {
    const name = path.get('name');
    const tagNameString = name.node.value;
    throw path.buildCodeFrameError(`${tagNameString} is not supported on marko 5. Run migrations on marko 4 first.`);
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
