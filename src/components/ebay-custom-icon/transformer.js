const path = require('path');
const iconStampTransformer = require('../../common/transformers/icon-stamp');

/**
 * @description
 * Inlines the symbol component as the body of the `ebay-icon` component (inline components only).
 *
 * @example
 * <ebay-icon type="inline" name="close"/>
 *
 * Becomes
 *
 * <ebay-icon type="inline" name="close"><include('$DIRNAME/symbols/close.marko')/></ebay-icon>
 */

function transform(el, context) {
    const symbolPathAttribute = el.getAttribute('path');

    if (isSupportedCustomPathAttr(symbolPathAttribute)) {
        const iconPath = extractPathFromAttr(symbolPathAttribute, context);
        return iconStampTransformer(el, context, iconPath);
    }
    return context;
}

function extractPathFromAttr(symbolPathAttribute, context) {
    const symbolPath = symbolPathAttribute.value.value;

    return path.isAbsolute(symbolPath) ? symbolPath : path.join(context.dirname, symbolPath);
}

function isSupportedCustomPathAttr(symbolPathAttribute) {
    const isSupported = symbolPathAttribute && symbolPathAttribute.value && symbolPathAttribute.value.value;
    if (symbolPathAttribute && !isSupported) {
        console.warn('The entered path format is not supported. Valid example: ' +
            '<ebay-icon type="inline" name="custom-add" path="./custom-symbols" />');
    }
    return isSupported;
}

module.exports = transform;
