const { setAttributeIfPresent } = require('../../common/migrators');

module.exports = function migrator(el, context) {
    const oldAttribute = 'on-breadcrumb-select';
    const newAttribute = 'on-breadcrumbs-select';

    if (el.tagName === 'ebay-breadcrumb') {
        context.deprecate('<ebay-breadcrumb> has been renamed to <ebay-breadcrumbs>');
        el.setTagName('ebay-breadcrumbs');
    }
    setAttributeIfPresent(el, oldAttribute, newAttribute);

    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === 'ebay-breadcrumb-item') {
                node.setTagName('ebay-breadcrumbs-item');
            }
        }
    });

    walker.walk(el);
};
