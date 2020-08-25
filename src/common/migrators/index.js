function convertToCamel(attribute) {
    const newAttr = attribute.split('-');
    newAttr.forEach((attr, index) => {
        if (index > 0) {
            newAttr[index] = attr.charAt(0).toUpperCase() + attr.slice(1);
        }
    });
    return newAttr.join('');
}

/**
 * @description
 * Changes @heading content if wrapped with <h[1-6]> to be unrapped
 */
function setAttributeIfPresent(el, context, oldAttribute, newAttribute) {
    if (el.hasAttribute(oldAttribute)) {
        context.deprecate(`${oldAttribute} is no longer supported on ${el.tagName}. Use ${newAttribute} instead.`);
        const attr = el.getAttribute(oldAttribute);
        el.removeAttribute(oldAttribute);
        attr.name = newAttribute;
        el.addAttribute(attr);
    }
    if (oldAttribute.indexOf('-') > -1) {
        // Convert on-something to onSomething
        setAttributeIfPresent(el, context, convertToCamel(oldAttribute), convertToCamel(newAttribute));
    }
}

function createIconFromAttribute(el, context, attribute) {
    if (el.hasAttribute(attribute) && typeof el.getAttributeValue(attribute).value === 'string') {
        context.deprecate(`${attribute} is no longer supported on ${el.tagName}. Use <@${attribute}> tag instead.`);
        const value = el.getAttributeValue(attribute).value;
        const iconTag = context.createNodeForEl(`ebay-${value}-icon`);
        const iconContainer = context.createNodeForEl(`@${attribute}`);
        iconContainer.appendChild(iconTag);
        el.prependChild(iconContainer);
        el.removeAttribute(attribute);
    }
}

module.exports = {
    setAttributeIfPresent,
    createIconFromAttribute
};
