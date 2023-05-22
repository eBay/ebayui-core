function transformMarko4(el: any, context: any) {
    context.deprecate(
        '<ebay-expand-button/> has been removed. Use <ebay-button body-state="expand" variant="form"/> instead'
    );

    el.setTagName("ebay-button");
    el.setAttributeValue("bodyState", context.builder.literal("expand"));
    el.setAttributeValue("variant", context.builder.literal("form"));
}

function transformMarko5(path: any, t: any) {
    const { node } = path;
    path.replaceWith(
        t.markoTag(
            t.stringLiteral("ebay-button"),
            [
                t.markoAttribute("bodyState", t.stringLiteral("expand")),
                t.markoAttribute("variant", t.stringLiteral("form")),
            ].concat(node.attributes),
            node.body
        )
    );
}

module.exports = function transform(a: any, b: any) {
    if (a.hub) {
        return transformMarko5(a, b);
    }

    return transformMarko4(a, b);
};
