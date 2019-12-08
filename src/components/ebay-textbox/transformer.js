const ebayUIAttributeTransformer = require('../../common/transformers/ebayui-attribute');

// Transforms an `icon` attribute into an `<ebay-textbox:icon>` tag
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
            },
            {
                name: 'no-skin-classes',
                value: builder.literalTrue()
            },
            {
                name: 'class',
                value: builder.literal('textbox__icon')
            }
        ]);
        const ebayTextIconTag = context.createNodeForEl('ebay-textbox:_icon');
        ebayTextIconTag.appendChild(iconTag);
        el.prependChild(ebayTextIconTag);
    }
}

module.exports = transform;
