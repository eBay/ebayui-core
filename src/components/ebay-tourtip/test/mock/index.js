exports.Basic = {
    a11yCloseText: 'Close Tourtip',
    host: {
        renderBody: createRenderBody('<span class="tooltip__host">Host Text</span>', 'Host Text')
    },
    heading: {
        renderBody: createRenderBody('Heading Text')
    },
    content: {
        renderBody: createRenderBody('Content Text')
    }
};

function createRenderBody(html, text) {
    renderBody.text = text || html;
    return renderBody;
    function renderBody(out) {
        out.write(html);
    }
}
