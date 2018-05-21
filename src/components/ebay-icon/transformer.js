// Exposes all icons used in a component as a list of icon names
// which we can discover statically through the require cache.
function transform(el, context) {
    const { builder } = context;
    const nameAttribute = el.getAttribute('name');
    const typeAttribute = el.getAttribute('type');
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    if (isInline && iconName) {
        let iconList = context._ebay_icons;

        if (!iconList) {
            const arr = { elements: iconList } = builder.arrayExpression();
            context._ebay_icons = iconList;
            context.addStaticCode(builder.assignment('module.exports._ebay_icons', arr));
        }

        iconList.push(builder.literal(iconName));
    }

    return context;
}

module.exports = transform;
