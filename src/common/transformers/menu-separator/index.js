const traverse = require('@babel/traverse');
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
    traverse(path, {
        enter(subPath) {
            if (subPath.isIdentifier({ name: '@separator' })) {
                subPath.node.name = '@item';
                subPath.pushContainer('attributes', t.markoAttribute('isSeparator', t.booleanLiteral(true)));
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
