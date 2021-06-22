const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Drawer = {
    a11yCloseText: 'close',
    a11yMinimizeText: 'minimize',
    a11yMaximizeText: 'maximize',
    header: {
        renderBody: createRenderBody('head content'),
    },
    footer: {
        renderBody: createRenderBody('foter content'),
    },
    renderBody: createRenderBody('body content'),
};

exports.Drawer_Open = Object.assign({}, exports.Drawer, {
    open: true,
});

exports.Drawer_Expanded = Object.assign({}, exports.Drawer_Open, {
    expanded: true,
});
