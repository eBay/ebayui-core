// adds stamper to <body>
function transform(el, context) {
    el.prependChild(context.createNodeForEl(`ebay-icon-stamper`));
}

module.exports = transform;
