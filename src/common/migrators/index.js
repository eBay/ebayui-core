/**
 * @description
 * Changes @heading content if wrapped with <h[1-6]> to be unrapped
 */
function setAttributeIfPresent(el, oldAttribute, newAttribute) {
    if (el.hasAttribute(oldAttribute)) {
        const attr = el.getAttribute(oldAttribute);
        el.removeAttribute(oldAttribute);
        attr.name = newAttribute;
        el.addAttribute(attr);
    }
}

module.exports = {
    setAttributeIfPresent
}