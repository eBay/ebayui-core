const assign = require('core-js-pure/features/object/assign');
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

exports.Toast_Open = assign({}, exports.Toast, {
    open: true,
});
