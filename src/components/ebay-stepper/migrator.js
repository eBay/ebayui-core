function transformMarko4(el) {
    el.setTagName('ebay-progress-stepper');
}

function transformMarko5(path, t) {
    const { node } = path;
    path.replaceWith(
        t.markoTag(t.stringLiteral('ebay-progress-stepper'), node.attributes, node.body)
    );
}

module.exports = function transform(a, b) {
    if (a.hub) {
        return transformMarko5(a, b);
    }

    return transformMarko4(a, b);
};
