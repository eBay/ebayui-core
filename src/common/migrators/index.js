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
}

module.exports = {
    setAttributeIfPresent
};
