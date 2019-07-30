const RENAMES = {
    'ebay-listbox': 'ebay-listbox-button',
    'ebay-listbox-option': 'ebay-listbox-button-option',
    'ebay-menu': 'ebay-menu-button',
    'ebay-menu-item': 'ebay-menu-button-item',
    'ebay-menu-label': 'ebay-menu-button-label'
};

/**
 * Migrator for tags which have been renamed.
 * @param {Object} el
 * @param {Object} context
 */
function migrate(el, context) {
    const newName = RENAMES[el.tagName];

    if (newName) {
        context.deprecate(
            `eBayUI: The "<${el.tagName}>" tag has been renamed to <${newName}>.`,
            el
        );

        const replacement = context.createNodeForEl(
            newName,
            el.getAttributes()
        );
        replacement.body = replacement.makeContainer(el.body.items);
        el.replaceWith(replacement);
    }
}

module.exports = migrate;
