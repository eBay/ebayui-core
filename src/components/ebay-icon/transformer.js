/**
 * @param {Object} el
 * @param {Object} context
 */
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
