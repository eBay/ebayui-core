// Transforms inline icons to artificially require specific icon files
// This adds icons to the require cache, which we walk in ./stamper
function transform(el, context) {
    const nameAttribute = el.getAttribute('name');
    const typeAttribute = el.getAttribute('type');
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    if (isInline && iconName) {
        const newTag = context.createNodeForEl(`ebay-icon-${iconName}`, el.getAttributes());
        newTag.body = el.body;
        el.replaceWith(newTag);
    }
}

module.exports = transform;
