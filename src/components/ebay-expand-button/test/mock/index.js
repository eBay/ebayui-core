const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('Expand Button Text')
};

exports.No_Text = {
    noText: true
};
