const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.TitleBasic = {
    _default: {
        renderBody: createRenderBody('Title content')
    }
};

exports.Title = {
    title: {
        renderBody: createRenderBody('Title content')
    }
};

exports.Subtitle = assign({}, exports.Title, {
    subtitle: {
        renderBody: createRenderBody('Subtitle content')
    }
});

exports.CTA_SeeAll = assign({}, exports.Title, {
    ctaText: 'See All',
    href: 'https://www.ebay.com/'
});

exports.CTA_NoText = assign({}, exports.Title, {
    href: 'https://www.ebay.com/'
});

exports.Info = assign({}, exports.Title, {
    info: {
        renderBody: createRenderBody('Info content')
    }
});

exports.Overflow = assign({}, exports.Title, {
    overflow: {
        renderBody: createRenderBody('Overflow content')
    }
});

exports.Size = assign({}, exports.Title, {
    size: 'large'
});
