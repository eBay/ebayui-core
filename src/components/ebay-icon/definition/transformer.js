// adds definition to <body>
function transform(el, context) {
    const definitionTag = context.createNodeForEl(`ebay-icon-definition`);
    el.prependChild(definitionTag);
}

module.exports = transform;
