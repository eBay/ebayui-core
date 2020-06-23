const path = require('path');
const util = require('../../common/ds-util');

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
    const iconName = nameAttribute && nameAttribute.value.value;
    if (iconName) {
        const iconPath = path.join(__dirname, 'symbols', iconName);

        const clientArray = [toRequire(path.join(iconPath, util.dsFilenames[util.defaultDS]))];
        const serverArray = util.dsList.map((key) =>
            toRequire(path.join(iconPath, util.dsFilenames[key]))
        );

        if (!el.hasAttribute('w-id') && context.compilerVersion && context.compilerVersion.indexOf('4.') !== 0) {
            // can be removed in Marko 4
            el.setAttributeValue('id',
                builder.expression(`typeof widget !== "undefined" && widget.elId("use_icon_${iconName}")`));
        }
        el.setAttributeValue('_themes',
            context.addStaticVar(`icon_${iconName}`,
                builder.conditionalExpression(
                    builder.expression('typeof window !== "undefined"'),
                    builder.arrayExpression(clientArray),
                    builder.arrayExpression(serverArray))));
    }

    return context;

    function toRequire(file) {
        return `require(${JSON.stringify(context.getRequirePath(file))})`;
    }
}

module.exports = transform;
