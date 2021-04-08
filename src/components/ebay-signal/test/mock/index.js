const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic = {
    renderBody: createRenderBody('neutral'),
};

exports.Basic_Neutral = {
    status: 'neutral',
    renderBody: createRenderBody('neutral'),
};

exports.Basic_Trustworthy = {
    status: 'trustworthy',
    renderBody: createRenderBody('trustworthy'),
};

exports.Basic_Recent = {
    status: 'recent',
    renderBody: createRenderBody('recent'),
};

exports.Basic_Time_Sensitive = {
    status: 'time-sensitive',
    renderBody: createRenderBody('time sensitive'),
};
