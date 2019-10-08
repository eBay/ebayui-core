const path = require('path');

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
    const { builder } = context;
    const nameAttribute = el.getAttribute('name');
    const typeAttribute = el.getAttribute('type');
    const symbolPathAttribute = el.getAttribute('path');
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    if (isInline && iconName) {
        const symbolPath = isSupportedCustomPathAttr(symbolPathAttribute)
            ? extractPathFromAttr(symbolPathAttribute, context)
            : path.join(__dirname, 'symbols');
        const iconPath = path.join(symbolPath, iconName);
        const ds4Path = path.join(iconPath, 'index.marko');
        const ds6Path = path.join(iconPath, 'index[skin-ds6].marko');
        if (!el.hasAttribute('w-id') && context.compilerVersion && context.compilerVersion.indexOf('4.') !== 0) {
            // can be removed in Marko 4
            el.setAttributeValue('id',
                builder.expression(`typeof widget !== "undefined" && widget.elId("use_icon_${iconName}")`));
        }
        el.setAttributeValue('_themes', context.addStaticVar(`icon_${iconName}`, builder.arrayExpression([
            toRequire(ds4Path),
            toRequire(ds6Path)
        ])));
    }

    return context;

    function toRequire(file) {
        return `require(${JSON.stringify(context.getRequirePath(file))})`;
    }
}

function extractPathFromAttr(symbolPathAttribute, context) {
    const symbolPath = symbolPathAttribute.value.value;
    if (path.isAbsolute(symbolPath)) {
        return symbolPath;
    } else {
        return path.join(context.dirname, symbolPath);
    }
}

function isSupportedCustomPathAttr(symbolPathAttribute) {
    const isSupported = symbolPathAttribute && symbolPathAttribute.value && symbolPathAttribute.value.value;
    if (symbolPathAttribute && !isSupported) {
        console.warn('The entered path format is not supported. Valid example: <ebay-icon type="inline" name="custom-add" path="./custom-symbols" />');
    }
    return isSupported;
}

module.exports = transform;

