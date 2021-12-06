const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.TitleBasic = {
    renderBody: createRenderBody('Title content'),
};

exports.Title = {
    title: {
        renderBody: createRenderBody('Title content'),
    },
};

exports.Subtitle = Object.assign({}, exports.Title, {
    subtitle: {
        renderBody: createRenderBody('Subtitle content'),
    },
});

exports.CTA = Object.assign({}, exports.Title, {
    href: 'https://www.ebay.com/',
});

exports.Info = Object.assign({}, exports.Title, {
    info: {
        renderBody: createRenderBody('Info content'),
    },
});

exports.Overflow = Object.assign({}, exports.Title, {
    overflow: {
        renderBody: createRenderBody('Overflow content'),
    },
});

exports.Size = Object.assign({}, exports.Title, {
    size: 'large',
});
