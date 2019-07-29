const assign = require('core-js-pure/features/object/assign');

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

function createRenderBody(text) {
    renderBody.text = text;
    return renderBody;
    function renderBody(out) {
        out.write(text);
    }
}
