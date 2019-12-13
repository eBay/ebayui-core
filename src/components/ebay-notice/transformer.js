/**
 * Transform ebay* components' child tags for use as nested tags
 * Example: <ebaycomboboxoption> to <ebaycombobox:option>
 * Note: Used exclusively by Marko as a transform for the nested tags
 * See: /src/components/ebaycombobox/marko.json
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    const defaultRenderBody = context.createNodeForEl('ebay-notice:_default');

    el.forEachChild(child => {
        if (child.tagName === 'ebay-notice-content' || child.tagName === 'ebay-notice-title') {
            return;
        }

        child.detach();
        defaultRenderBody.appendChild(child);
    });

    el.prependChild(defaultRenderBody);
}

module.exports = transform;
