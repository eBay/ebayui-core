const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Window_Notice = {
    type: 'window',
    title: {
        renderBody: createRenderBody('Title')
    },
    renderBody: createRenderBody('Body')
};
