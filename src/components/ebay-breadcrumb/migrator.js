module.exports = function migrator(el, context) {
    context.deprecate("<ebay-breadcrumb> has been renamed to <ebay-breadcrumbs>");
    el.setTagName('ebay-breadcrumbs')

    el.forEachChild(child => {
        if (child.tagName === 'ebay-breadcrumb-item') {
            child.setTagName('ebay-breadcrumbs-item');
        }

    });
};
