/**
 * @param {Object} el
 * @param {Object} context
 */
function transformMarko4(el, context) {
    const walker = context.createWalker({
        enter(node) {
            if (node.tagName === '@separator') {
                node.setTagName('@item');
                node.setAttributeValue('separator', context.builder.literalTrue());
            }
        },
    });
    walker.walk(el);
    return el;
}

const replaceSeparatorVisitor = {
    MarkoTag(tag, { t }) {
        if (tag.get('name').isStringLiteral({ value: '@separator' })) {
            tag.replaceWith(
                t.markoTag(
                    t.stringLiteral('@item'),
                    [t.markoAttribute('separator', t.booleanLiteral(true))],
                    t.markoTagBody()
                )
            );
        }
    },
};

function transformMarko5(path, t) {
    path.traverse(replaceSeparatorVisitor, { t });
}

module.exports = function transform(a, b) {
    if (a.hub) {
        return transformMarko5(a, b);
    }

    return transformMarko4(a, b);
};
