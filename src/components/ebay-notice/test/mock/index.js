const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Page = {
    a11yHeadingText: 'Heading Text',
    renderBody: createRenderBody('Content')
};

exports.Page_Custom_Heading_Tag = assign({}, exports.Page, {
    a11yHeadingTag: 'h3'
});

exports.Page_Custom_Status = assign({}, exports.Page, {
    status: 'confirmation'
});

exports.Page_Dismissible = assign({}, exports.Page, {
    dismissible: true,
    a11yCloseText: 'Close'
});

exports.Inline = assign({}, exports.Page, {
    type: 'inline'
});

exports.Inline_Custom_Heading_Tag = assign({}, exports.Inline, {
    a11yHeadingTag: 'h3'
});

exports.Inline_Custom_Status = assign({}, exports.Inline, {
    status: 'confirmation'
});

exports.Inline_Dismissible = assign({}, exports.Inline, {
    dismissible: true,
    a11yCloseText: 'Close'
});

exports.Guidance_Info = {
    a11yHeadingText: 'Heading Text',
    type: 'guidance',
    status: 'information',
    renderBody: createRenderBody('Content')
};

exports.Guidance_Light = {
    type: 'guidance',
    renderBody: createRenderBody('Content')
};

exports.Cta_Button = {
    cta: {
        renderBody: createRenderBody('Content')
    }
};

exports.Cta_Link = {
    cta: {
        href: '#',
        renderBody: createRenderBody('Content')
    }
};
