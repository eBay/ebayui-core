const ebayUIAttributeTransformer = require('../../common/transformers/ebayui-attribute');

function setIconTag(el, context, name, tag) {
    const builder = context.builder;
    const iconAttribute = el.getAttribute(name);
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
                value: builder.literal('icon textbox__icon')
            }
        ]);
        const ebayTextIconTag = context.createNodeForEl(`ebay-textbox:_${tag}`);
        ebayTextIconTag.appendChild(iconTag);
        el.prependChild(ebayTextIconTag);
    }
}

// Transforms an `icon` attribute into an `<ebay-textbox:_icon>` tag
function transform(el, context) {
    ebayUIAttributeTransformer(el, context);

    setIconTag(el, context, 'prefix-icon', 'prefixIcon');
    setIconTag(el, context, 'postfix-icon', 'postfixIcon');
}

module.exports = transform;
