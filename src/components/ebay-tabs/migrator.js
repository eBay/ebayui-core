module.exports = function migrator(el, context) {
    const oldAttribute = 'on-tab-select';
    const newAttribute = 'on-tabs-select';
    if (el.tagName === 'ebay-tab') {
        context.deprecate('<ebay-tab> has been renamed to <ebay-tabs>');
        el.setTagName('ebay-tabs');
    }
    if (el.hasAttribute(oldAttribute)) {
        const attribute = el.getAttribute(oldAttribute);
        attribute.name = newAttribute;
    }
    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === 'ebay-tab-heading') {
                node.setTagName('ebay-tabs-heading');
            } else if (node.tagName === 'ebay-tab-panel') {
                node.setTagName('ebay-tabs-panel');
            }
        }
    });

    walker.walk(el);
};
