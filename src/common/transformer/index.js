/**
 * Transform ebay-* components' child tags for use as nested tags
 * Example: <ebay-listbox-option> to <ebay-listbox:option>
 * Note: Used exclusively by Marko as a transform for the nested tags
 * See: /src/components/ebay-listbox/marko.json
 * @param {Object} el
 * @param {Object} context
 */
function transform(el, context) {
    el.body.forEach(child => {
        // find the matching tag based on the child tag name of
        // the children matching the given tagName
        if (child.tagName) {
            const outputTag = child.tagName.replace(/(.*?)\-(?=[^-]*$)(.*)$/g, '$1:$2');
            const nestedTag = context.createNodeForEl(outputTag, child.getAttributes());
            nestedTag.body = child.body;
            child.replaceWith(nestedTag);
        }

        return child;
    });
}

module.exports = transform;
