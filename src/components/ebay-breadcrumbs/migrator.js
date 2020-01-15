module.exports = function migrator(el, context) {
    const oldAttribute = 'on-breadcrumb-select';
    const newAttribute = 'on-breadcrumbs-select';

    if (el.tagName === 'ebay-breadcrumb') {
        context.deprecate('<ebay-breadcrumb> has been renamed to <ebay-breadcrumbs>');
        el.setTagName('ebay-breadcrumbs');
    }
    if (el.hasAttribute(oldAttribute)) {
        const attribute = el.getAttribute(oldAttribute);
        attribute.name = newAttribute;
    }

    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === 'ebay-breadcrumb-item') {
                node.setTagName('ebay-breadcrumbs-item');
            }
        }
    });

    walker.walk(el);
};
