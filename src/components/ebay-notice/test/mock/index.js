exports.Page = {
    a11yHeadingText: 'Heading Text',
    renderBody: createRenderBody('Content')
};

exports.Page_Custom_Heading_Tag = {
    ...exports.Page,
    a11yHeadingTag: 'h3'
};

exports.Page_Custom_Status = {
    ...exports.Page,
    status: 'confirmation'
};

exports.Page_Dismissible = {
    ...exports.Page,
    dismissible: true,
    a11yCloseText: 'Close'
};

exports.Inline = {
    ...exports.Page,
    type: 'inline'
};

exports.Inline_Custom_Heading_Tag = {
    ...exports.Inline,
    a11yHeadingTag: 'h3'
};

exports.Inline_Custom_Status = {
    ...exports.Inline,
    status: 'confirmation'
};

exports.Inline_Dismissible = {
    ...exports.Inline,
    dismissible: true,
    a11yCloseText: 'Close'
};

function createRenderBody(text) {
    renderBody.text = text;
    return renderBody;
    function renderBody(out) {
        out.write(text);
    }
}
