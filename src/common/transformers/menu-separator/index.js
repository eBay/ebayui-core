/**
 * @param {Object} el
 * @param {Object} context
 */
function transformMarko4(el, context) {
    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === '@separator') {
                node.setTagName('@item');
                node.setAttributeValue('isSeparator', context.builder.literalTrue());
            }
        }
    });
    walker.walk(el);
    return el;
}
function transformMarko5(path, t) {
    path.traverse({
        MarkoTag(tag) {
            if (tag.get('name').isStringLiteral({ name: '@separator' })) {
                tag.set('name.value', '@item');
                tag.pushContainer('attributes', t.markoAttribute('isSeparator', t.booleanLiteral(true)));
            }
        }
    });
}

module.exports = function transform(a, b) {
    if (a.hub) {
        return transformMarko5(a, b);
    }

    return transformMarko4(a, b);
};
