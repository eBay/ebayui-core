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
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    if (isInline && iconName) {
        const iconPath = path.join(__dirname, 'symbols', iconName);
        const ds4Path = path.join(iconPath, 'ds4.marko');
        const ds6Path = path.join(iconPath, 'ds6.marko');
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

module.exports = transform;
