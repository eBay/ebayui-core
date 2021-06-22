const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Toast = {
    a11yCloseText: 'close',
    header: {
        renderBody: createRenderBody('head content'),
    },
    footer: {
        renderBody: createRenderBody('foter content'),
    },
    renderBody: createRenderBody('body content'),
};

exports.Toast_Open = Object.assign({}, exports.Toast, {
    open: true,
});
