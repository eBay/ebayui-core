module.exports = function migrator(el, context) {
    context.deprecate('<ebay-tab> has been renamed to <ebay-tabs>');
    const oldAttribute = 'on-tab-select';
    const newAttribute = 'on-tabs-select';
    el.setTagName('ebay-tabs');
    if (el.hasAttribute(oldAttribute)) {
        const attribute = el.getAttribute(oldAttribute);
        el.removeAttribute(oldAttribute);
        attribute.name = newAttribute;
        el.addAttribute(attribute);
    }

    el.forEachChild(child => {
        if (child.tagName === 'ebay-tab-heading') {
            child.setTagName('ebay-tabs-heading');
        } else if (child.tagName === 'ebay-tab-panel') {
            child.setTagName('ebay-tabs-panel');
        }
    });
};
