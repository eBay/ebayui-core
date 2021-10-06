const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Dialog = {
    confirmText: 'confirm',
    header: {
        renderBody: createRenderBody('title content'),
    },
    renderBody: createRenderBody('body content'),
};

exports.Dialog_Open = Object.assign({}, exports.Dialog, {
    open: true,
});
