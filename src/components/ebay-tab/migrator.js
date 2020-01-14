module.exports = function migrator(el, context) {
    context.deprecate("<ebay-tab> has been renamed to <ebay-tabs>");
    el.setTagName('ebay-tabs', el.tagName.replace(/ebay-tab(-.*)?$/g, 'ebay-tabs$1'));

    el.forEachChild(child => {
        if (child.tagName === 'ebay-tab-heading') {
            child.setTagName('ebay-tabs-heading');
        } else if (child.tagName === 'ebay-tab-panel') {
            child.setTagName('ebay-tabs-panel');
        }

    });
};
