const commonTransformer = require('../../common/transformer');

function transform(el, context) {
    commonTransformer(el, context);
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
                name: 'class',
                value: builder.literal('expand-btn__icon')
            }
        ]);
        const menuIconTag = context.createNodeForEl('ebay-menu:icon');
        menuIconTag.appendChild(iconTag);
        el.prependChild(menuIconTag);
    }
}

module.exports = transform;
