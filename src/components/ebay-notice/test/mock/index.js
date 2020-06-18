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

exports.Page_Icon_Hidden = assign({}, exports.Page, {
    icon: 'hidden'
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

exports.Section_Info = {
    a11yHeadingText: 'Heading Text',
    type: 'section',
    status: 'information',
    renderBody: createRenderBody('Content')
};

exports.Section_Light = {
    type: 'section',
    renderBody: createRenderBody('Content')
};

exports.Window_Notice = {
    type: 'window',
    title: {
        renderBody: createRenderBody('Title')
    },
    content: {
        renderBody: createRenderBody('Body')
    }
};

exports.Page_Celebration = {
    type: 'page',
    a11yHeadingText: 'Heading Text',
    status: 'celebration',
    title: {
        renderBody: createRenderBody('Title')
    },
    content: {
        renderBody: createRenderBody('Body')
    }
};

exports.Cta_Button = {
    renderBody: createRenderBody('<button>Action</button>'),
    content: {
        renderBody: createRenderBody('Body')
    }
};
