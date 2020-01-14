module.exports = function migrator(el, context) {
    context.deprecate('<ebay-breadcrumb> has been renamed to <ebay-breadcrumbs>');
    const oldAttribute = 'on-breadcrumb-select';
    const newAttribute = 'on-breadcrumbs-select';
    el.setTagName('ebay-breadcrumbs');
    if (el.hasAttribute(oldAttribute)) {
        const attribute = el.getAttribute(oldAttribute);
        el.removeAttribute(oldAttribute);
        attribute.name = newAttribute;
        el.addAttribute(attribute);
    }

    el.forEachChild(child => {
        if (child.tagName === 'ebay-breadcrumb-item') {
            child.setTagName('ebay-breadcrumbs-item');
        }
    });
};
