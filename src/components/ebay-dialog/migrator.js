const { setAttributeIfPresent } = require('../../common/migrators');
const dialogBaseMigrator = require('../components/ebay-dialog-base/migrator');

function migratorMarko4(el, context) {
    let dialogType;
    const type = el.hasAttribute('type') && el.getAttributeValue('type').value;
    if (type === 'full') {
        context.deprecate('<ebay-dialog type="full"/> has been renamed to <ebay-fullscreen-dialog/>');
        dialogType = 'fullscreen';
    } else if (type === 'left') {
        context.deprecate('<ebay-dialog type="left"/> has been renamed to <ebay-panel-dialog/>');
        dialogType = 'panel';
    } else if (type === 'right') {
        context.deprecate('<ebay-dialog type="right"/> has been renamed to <ebay-panel-dialog position="end"/>');
        el.setAttributeValue('position', context.builder.literal('end'));
        dialogType = 'panel';
    } else {
        context.deprecate('<ebay-dialog/> has been renamed to <ebay-lightbox-dialog/>');
        dialogType = 'lightbox';
    }

    el.setTagName(`ebay-${dialogType}-dialog`);
    setAttributeIfPresent(el, context, 'on-dialog-show', `on-open`);
    setAttributeIfPresent(el, context, 'on-dialog-close', `on-close`);
    el.removeAttribute('type');
    dialogBaseMigrator(el, context);

    return el;
}

function migratorMarko5() {
    return;
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
