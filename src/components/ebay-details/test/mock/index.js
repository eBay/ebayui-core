const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Default_Details = {
    text: 'open',
    renderBody: createRenderBody('body content')
};

exports.Open_Details = assign({}, exports.Default_Details, {
    open: true
});
