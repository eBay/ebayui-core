const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../../common/test-utils/shared');

exports.Dialog = {
    classPrefix: 'lightbox-dialog',
    class: 'lightbox-dialog--mask-fade',
    windowClass: 'lightbox-dialog__window--fade',
    a11yCloseText: 'close',
    renderBody: createRenderBody('body content')
};

exports.Header_Footer_Dialog = {
    classPrefix: 'lightbox-dialog',
    class: 'lightboxc-dialog--mask-fade',
    windowClass: 'lightbox-dialog__window--fade',
    a11yCloseText: 'close',
    footer: {
        renderBody: createRenderBody('footer content')
    },
    header: {
        renderBody: createRenderBody('title content')
    },
    renderBody: createRenderBody('body content')
};

exports.Dialog_Open = assign({}, exports.Dialog, {
    open: true
});
