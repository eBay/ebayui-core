// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches

function closestParent(el, selector) {
    let elem = el;

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                const matches = (this.document || this.ownerDocument).querySelectorAll(s);
                let i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                    // no-op
                }
                return i > -1;
            };
    }

    // Get the closest matching element
    for (elem; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }

    return null;
}

module.exports = closestParent;
