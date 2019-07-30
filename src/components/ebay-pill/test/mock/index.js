exports.Basic = {
    renderBody: createRenderBody('text')
};

exports.Pressed = {
    ...exports.Basic,
    pressed: true
};

exports.Disabled = {
    ...exports.Basic,
    disabled: true
};

exports.Fake = {
    ...exports.Basic,
    href: '#fake'
};

exports.Fake_Pressed = {
    ...exports.Fake,
    pressed: true,
    a11yActiveText: 'Selected Pill'
};

exports.Fake_Disabled = {
    ...exports.Fake,
    disabled: true
};

function createRenderBody(text) {
    renderBody.text = text;
    return renderBody;
    function renderBody(out) {
        out.write(text);
    }
}
