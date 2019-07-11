const ebayUIAttributeTransformer = require('../../common/transformers/ebayui-attribute');

// Transforms an `icon` attribute into an `<ebay-menu:icon>` tag
function transform(el, context) {
    ebayUIAttributeTransformer(el, context);

    const builder = context.builder;
    const iconAttribute = el.getAttribute('icon');
    const iconName = iconAttribute && iconAttribute.value.value;
    if (iconName) {
        const iconTag = context.createNodeForEl('ebay-icon', [
            {
                name: 'name',
                value: builder.literal(iconName)
            },
            {
                name: 'type',
                value: builder.literal('inline')
            }
        ]);
        const menuIconTag = context.createNodeForEl('ebay-menu:icon');
        menuIconTag.appendChild(iconTag);
        el.prependChild(menuIconTag);
    }
}

module.exports = transform;
