const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Page = {
    a11yText: 'Heading Text',
    renderBody: createRenderBody('Content')
};

exports.Page_Custom_Heading_Tag = assign({}, exports.Page, {
    title: {
        as: 'h3',
        renderBody: createRenderBody('Title')
    }
});

exports.Page_Custom_Status = assign({}, exports.Page, {
    status: 'confirmation'
});

exports.Page_Icon_Hidden = assign({}, exports.Page, {
    icon: 'none'
});

exports.Footer_Button = assign({}, exports.Page, {
    footer: {
        renderBody: createRenderBody('Footer')
    }
});

exports.Page_Celebration = assign({}, exports.Page, {
    status: 'celebration',
    title: {
        renderBody: createRenderBody('Title')
    }
});
