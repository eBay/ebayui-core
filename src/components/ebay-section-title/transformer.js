/**
 * Transform ebay* components' child tags for use as nested tags
 * Example: <ebaycomboboxoption> to <ebaycombobox:option>
 * Note: Used exclusively by Marko as a transform for the nested tags
 * See: /src/components/ebaycombobox/marko.json
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    const defaultRenderBody = context.createNodeForEl('ebay-section-title:_default');
    const subtags = ['ebay-section-title-title',
        'ebay-section-title-subtitle',
        'ebay-section-title-info',
        'ebay-section-title-overflow'];

    el.forEachChild(child => {
        if (subtags.includes(child.tagName)) {
            return;
        }

        child.detach();
        defaultRenderBody.appendChild(child);
    });

    el.prependChild(defaultRenderBody);
}

module.exports = transform;
