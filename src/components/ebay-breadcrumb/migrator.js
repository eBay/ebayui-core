module.exports = function migrator(el, context) {
    context.deprecate("<ebay-breadcrumb> has been renamed to <ebay-breadcrumbs>");
    el.setTagName('ebay-breadcrumbs', el.tagName.replace(/ebay-breadcrumb(-.*)?$/g, 'ebay-breadcrumbs$1'));

    el.forEachChild(child => {
        if (child.tagName === 'ebay-breadcrumb-heading') {
            child.setTagName('ebay-breadcrumbs-heading');
        } else if (child.tagName === 'ebay-breadcrumb-panel') {
            child.setTagName('ebay-breadcrumbs-panel');
        }

    });
};
