const path = require('path');
// allows app owners to define custom icons inside $PROJDIRNAME/symbols
const projRootPath = '../../../../../../symbols/';
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
 *
 * @example
 * <ebay-icon type="inline" name="my-awesome-icon" custom="true"/>
 *
 * Becomes
 *
 * <ebay-icon type="inline" name="my-awesome-icon"><include('$PROJDIRNAME/symbols/my-awesome-icon.marko')/></ebay-icon>
 */

function transform(el, context) {
    const nameAttribute = el.getAttribute('name');
    const typeAttribute = el.getAttribute('type');
    const customAttribute = el.getAttribute('custom');
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    const isCustomIcon = customAttribute && customAttribute.value.value === 'true';
    if (isInline && iconName) {
        let templatePath = '';
        if (isCustomIcon) { // expand <ebay-icon> capabilities to include custom icons stamping
            templatePath = path.join(__dirname, `${projRootPath}${iconName}.marko`);
        } else { // fallback to picking from ebayui-core/components/ebay-icon/
            templatePath = path.join(__dirname, `symbols/${iconName}.marko`);
        }
        el.prependChild(context.createNodeForEl('include', {}, JSON.stringify(templatePath)));
    }

    return context;
}

module.exports = transform;
