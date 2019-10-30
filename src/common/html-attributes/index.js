const assign = require('core-js-pure/features/object/assign');
const skipAttributes = ['*', 'htmlAttributes', 'renderBody', 'widgetState', '__widgetProps', '___widgetProps'];
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
function processHtmlAttributes(input = {}, ignore = []) {
    const attributes = {};
    const htmlAttributes = input.htmlAttributes;
    const wildcardAttributes = input['*'];

    let obj = htmlAttributes || wildcardAttributes || {};
    if (htmlAttributes && wildcardAttributes) {
        obj = assign(wildcardAttributes, htmlAttributes);
    }
    if (ignore.length) {
        Object.keys(input).forEach((key) => {
            if (ignore.indexOf(key) === -1 && skipAttributes.indexOf(key) === -1) {
                obj[key] = input[key];
            }
        });
    }

    Object.keys(obj).forEach((key) => {
        attributes[camelToKebab(key)] = obj[key];
    });

    return attributes;
}

module.exports = processHtmlAttributes;
