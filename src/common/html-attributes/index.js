
/**
 * Convert camelCase to kebab-case
 * @param {String} s
 */
function camelToKebab(s) {
    return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Create object of HTML attributes for pass-through to the DOM
 * @param {Object} input
 */
function processHtmlAttributes(input = {}) {
    const attributes = {};
    const htmlAttributes = input.htmlAttributes;
    const wildcardAttributes = input['*'];

    let obj = htmlAttributes || wildcardAttributes;
    if (htmlAttributes && wildcardAttributes) {
        obj = Object.assign(wildcardAttributes, htmlAttributes);
    }

    if (obj) {
        Object.keys(obj).forEach((key) => {
            attributes[camelToKebab(key)] = obj[key];
        });
    }

    return attributes;
}

module.exports = processHtmlAttributes;
