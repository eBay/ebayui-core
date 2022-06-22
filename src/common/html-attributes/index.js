const skipAttributes = /^htmlAttributes|renderBody|a11y.*$/;
const EMPTY_ARR = [];

/**
 * Convert camelCase to kebab-case
 * @param {String} s
 */
function camelToKebab(s) {
    return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Create object of HTML attributes for pass-through to the DOM
 * All fields in ignore will be skipped. This should generally match with the marko.json
 * input fields so that duplicate/unwanted attributes will not be rendered
 * @param {Object} input
 * @param {Array} ignore
 */
function processHtmlAttributes(input, ignore = EMPTY_ARR) {
    const attributes = {};
    const htmlAttributes = input.htmlAttributes;

    let obj = htmlAttributes || {};
    if (htmlAttributes) {
        obj = Object.assign({}, htmlAttributes);
    }
    Object.keys(input).forEach((key) => {
        if (ignore.indexOf(key) === -1 && !skipAttributes.test(key) && !obj[key]) {
            obj[key] = input[key];
        }
    });
    Object.keys(obj).forEach((key) => {
        attributes[camelToKebab(key)] = obj[key];
    });

    return attributes;
}

export { processHtmlAttributes };
