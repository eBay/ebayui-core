const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Snackbar = {
    a11yCloseText: 'close',
    header: {
        renderBody: createRenderBody('head content'),
    },
    footer: {
        renderBody: createRenderBody('footer content'),
    },
    action: {
        renderBody: createRenderBody('action content'),
    },
    renderBody: createRenderBody('body content'),
};

exports.Snackbar_Open = Object.assign({}, exports.Snackbar, {
    open: true,
});

exports.Snackbar_Closed = Object.assign({}, exports.Snackbar, {
    open: false,
});
