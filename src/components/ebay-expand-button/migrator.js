function transformMarko4(el, context) {
    context.deprecate(
        '<ebay-expand-button/> has been removed. Use <ebay-button body-state="expand" variant="form"/> instead'
    );

    el.setTagName('ebay-button');
    el.setAttributeValue('bodyState', context.builder.literal('expand'));
    el.setAttributeValue('variant', context.builder.literal('form'));
}

function transformMarko5(path, t) {
    const { node } = path;
    path.replaceWith(
        t.markoTag(
            t.stringLiteral('ebay-button'),
            [
                t.markoAttribute('bodyState', t.stringLiteral('expand')),
                t.markoAttribute('variant', t.stringLiteral('form')),
            ].concat(node.attributes),
            node.body
        )
    );
}

module.exports = function transform(a, b) {
    if (a.hub) {
        return transformMarko5(a, b);
    }

    return transformMarko4(a, b);
};
