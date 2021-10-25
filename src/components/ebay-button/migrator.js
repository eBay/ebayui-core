/**
 * @description
 * Changes attribute of button events
 */

function getVariant(variant, context) {
    let buttonType;
    if (variant === 'icon') {
        if (context) {
            context.deprecate(
                '<ebay-button variant="icon"/> has been renamed to <ebay-icon-button/>'
            );
        }
        buttonType = 'icon-button';
    } else if (variant === 'fake-link') {
        if (context) {
            context.deprecate(
                '<ebay-button variant="fake-link"/> has been renamed to <ebay-fake-link/>'
            );
        }
        buttonType = 'fake-link';
    } else if (variant === 'expand') {
        if (context) {
            context.deprecate(
                '<ebay-button variant="expand"/> has been renamed to <ebay-expand-button/>'
            );
        }
        buttonType = 'expand-button';
    }

    return buttonType;
}

function migratorMarko4(el, context) {
    const type = el.hasAttribute('variant') && el.getAttributeValue('variant').value;
    const buttonType = getVariant(type, context);
    if (buttonType) {
        el.setTagName(`ebay-${buttonType}`);
        el.removeAttribute('variant');
    }
    return el;
}

function migratorMarko5(path) {
    const { node } = path;
    const index = node.attributes.findIndex((a) => a.name === 'variant');

    if (index !== -1) {
        const buttonType = getVariant(node.attributes[index].name);
        if (buttonType) {
            node.name = `ebay-${buttonType}`;
            path.get('attributes')[index].remove();
        }
    }
    return;
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
