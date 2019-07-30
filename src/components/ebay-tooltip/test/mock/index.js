exports.Basic = {
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

exports.Pointers = [
    'top-left',
    'top',
    'top-right',
    'right',
    'right-bottom',
    'right-top',
    'bottom-left',
    'bottom-right',
    'bottom',
    'left',
    'left-bottom',
    'left-top'
].map(pointer => ({
    ...exports.Basic,
    pointer
}));

exports.Custom_Pointer = {
    ...exports.Basic,
    styleTop: '20px',
    styleLeft: '20px'
};

function createRenderBody(html, text) {
    renderBody.text = text || html;
    return renderBody;
    function renderBody(out) {
        out.write(html);
    }
}
