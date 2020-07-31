const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../../common/test-utils/shared');

exports.Dialog = {
    classPrefix: 'lightbox-dialog',
    class: 'dialog--mask-fade',
    windowClass: 'dialog__window--fade',
    a11yCloseText: 'close',
    renderBody: createRenderBody('body content')
};

exports.Header_Footer_Dialog = {
    classPrefix: 'lightbox-dialog',
    class: 'dialog--mask-fade',
    windowClass: 'dialog__window--fade',
    a11yCloseText: 'close',
    footer: {
        renderBody: createRenderBody('footer content')
    },
    header: {
        renderBody: createRenderBody('title content')
    },
    renderBody: createRenderBody('body content')
};

exports.Dialog_Open = assign({}, exports.Fill_Dialog, {
    open: true
});
