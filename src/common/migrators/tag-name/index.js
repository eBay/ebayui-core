const RENAMES = {
    'ebay-listbox': 'ebay-listbox-button',
    'ebay-listbox-option': 'ebay-listbox-button-option',
    'ebay-menu': 'ebay-menu-button',
    'ebay-menu-option': 'ebay-menu-button-option'
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

        el.setTagName(newName);
    }
}

module.exports = migrate;
