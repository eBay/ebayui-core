const { createRenderBody } = require('../../../../../common/test-utils/shared');

exports.Default_Notice = {
    prefixClass: 'page-notice',
    status: 'attention',
    a11yText: 'default label',
    class: 'page-notice--attention',
    renderBody: createRenderBody('body')
};

exports.Inline_Notice = {
    root: 'div',
    prefixClass: 'inline-notice',
    status: 'information',
    class: 'extra-class',
    a11yText: 'default label',
    iconClass: 'notice-class',
    renderBody: createRenderBody('body')
};

exports.Title_Footer_Notice = {
    prefixClass: 'window-notice',
    status: 'attention',
    a11yText: 'default label',
    class: 'page-notice--attention',
    renderBody: createRenderBody('body'),
    title: {
        renderBody: createRenderBody('title')
    },
    footer: {
        renderBody: createRenderBody('footer')
    }

};
