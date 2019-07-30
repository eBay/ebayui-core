exports.WithContent = {
    ariaLabel: 'Infotip label',
    content: {
        renderBody: createRenderBody('Infotip content')
    }
};

exports.WithContentAndHeader = {
    ...exports.WithContent,
    heading: {
        renderBody: createRenderBody('Infotip heading')
    }
};

exports.Disabled = {
    ...exports.WithContent,
    disabled: true
};

function createRenderBody(text) {
    renderBody.text = text;
    return renderBody;
    function renderBody(out) {
        out.write(text);
    }
}
