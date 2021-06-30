const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Dialog = {
    a11yCloseText: 'close',
    renderBody: createRenderBody('body content'),
};

exports.Header_Footer_Dialog = {
    a11yCloseText: 'close',
    footer: {
        renderBody: createRenderBody('footer content'),
    },
    header: {
        renderBody: createRenderBody('title content'),
    },
    renderBody: createRenderBody('body content'),
};

exports.Fill_Dialog_Open = Object.assign({}, exports.Dialog, {
    open: true,
});
