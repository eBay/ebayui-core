/**
 * Transform ebay-* components' child tags for use as nested tags
 * Example: <ebay-combobox-option> to <ebay-combobox:option>
 * Note: Used exclusively by Marko as a transform for the nested tags
 * See: /src/components/ebay-combobox/marko.json
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    const parentTag = el.tagName;

    // walk the tree
    const walker = context.createWalker({
        enter(node) {
            const childTag = node.tagName;
            // find the matching tag based on the child tag name of
            // the children matching the given tagName
            if (node.type === 'HtmlElement' && node.tagName.indexOf(`${parentTag}-`) === 0) {
                const outputTag = `${parentTag}:${childTag.slice(parentTag.length + 1)}`;
                const nestedTag = context.createNodeForEl(outputTag, node.getAttributes());
                nestedTag.body = node.body;
                node.replaceWith(nestedTag);

                walker.skip();
            }
        }
    });

    walker.walk(el);
}

module.exports = transform;
