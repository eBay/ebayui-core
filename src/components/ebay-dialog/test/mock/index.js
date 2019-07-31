const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Fill_Dialog = {
    a11yCloseText: 'close',
    renderBody: createRenderBody('body content')
};

exports.Fill_Dialog_Open = assign({}, exports.Fill_Dialog, {
    open: true
});
