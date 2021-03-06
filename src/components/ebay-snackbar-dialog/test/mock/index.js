const assign = require('core-js-pure/features/object/assign');
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

exports.Snackbar_Open = assign({}, exports.Snackbar, {
    open: true,
});

exports.Snackbar_Closed = assign({}, exports.Snackbar, {
    open: false,
});
