exports.Fill_Dialog = {
    a11yCloseText: 'close',
    renderBody: createRenderBody('body content')
};

exports.Fill_Dialog_Open = {
    ...exports.Fill_Dialog,
    open: true
};

function createRenderBody(text) {
    renderBody.text = text;
    return renderBody;
    function renderBody(out) {
        out.write(text);
    }
}
