const assign = require('core-js-pure/features/object/assign');
const skipAttributes = [
    'htmlAttributes',
    'renderBody',
    'widgetState',
    'widgetProps',
    'widgetConfig',
    'widgetBody'
];

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
function processHtmlAttributes(input, ignore) {
    const attributes = {};
    const htmlAttributes = input.htmlAttributes;

    let obj = htmlAttributes || {};
    if (htmlAttributes) {
        obj = assign({}, htmlAttributes);
    }
    Object.keys(input).forEach((key) => {
        if (ignore.indexOf(key) === -1 && skipAttributes.indexOf(key) === -1 && !obj[key]) {
            obj[key] = input[key];
        }
    });
    Object.keys(obj).forEach((key) => {
        attributes[camelToKebab(key)] = obj[key];
    });

    return attributes;
}

module.exports = processHtmlAttributes;
