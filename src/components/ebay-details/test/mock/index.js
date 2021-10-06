const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Default_Details = {
    text: 'open',
    renderBody: createRenderBody('body content'),
};

exports.Open_Details = Object.assign({}, exports.Default_Details, {
    open: true,
});
