/**
 * Transform ebay-* components' child tags for use as nested tags
 * Example: <ebay-combobox-option> to <ebay-combobox:option>
 * Note: Used exclusively by Marko as a transform for the nested tags
 * See: /src/components/ebay-combobox/marko.json
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    const replacement = context.createNodeForEl(
        el.tagName.replace(/^(ebay-[^-]+)-/, '$1:'),
        el.getAttributes()
    );
    replacement.body = replacement.makeContainer(el.body.items);
    el.replaceWith(replacement);
}

module.exports = transform;
