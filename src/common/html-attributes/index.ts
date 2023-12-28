const skipAttributes = /^htmlAttributes|renderBody|a11y.*$/;
const EMPTY_ARR: any[] = [];

/**
 * Convert camelCase to kebab-case
 */
function camelToKebab(s: string) {
    return s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Create object of HTML attributes for pass-through to the DOM
 * All fields in ignore will be skipped. This should generally match with the marko.json
 * input fields so that duplicate/unwanted attributes will not be rendered
 */
function processHtmlAttributes(
    input: {
        htmlAttributes?: Record<string, any>;
        [key: string]: any;
    },
    ignore: string[] = EMPTY_ARR,
) {
    const attributes: Record<string, string> = {};
    const htmlAttributes = input.htmlAttributes;

    let obj = htmlAttributes || {};
    if (htmlAttributes) {
        obj = Object.assign({}, htmlAttributes);
    }
    Object.keys(input).forEach((key) => {
        if (
            ignore.indexOf(key) === -1 &&
            !skipAttributes.test(key) &&
            !obj[key]
        ) {
            obj[key] = input[key];
        }
    });
    Object.keys(obj).forEach((key) => {
        attributes[camelToKebab(key)] = obj[key];
    });

    return attributes;
}

export { processHtmlAttributes };
