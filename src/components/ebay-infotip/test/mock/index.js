const assign = require('core-js-pure/features/object/assign');

exports.WithContent = {
  ariaLabel: 'Infotip label',
  content: {
    renderBody: createRenderBody('Infotip content')
  }
}

exports.WithContentAndHeader = assign({}, exports.WithContent, {
  heading: {
    renderBody: createRenderBody('Infotip heading')
  }
});

exports.Disabled = assign({}, exports.WithContent, {
  disabled: true
});

function createRenderBody(text) {
  renderBody.text = text;
  return renderBody;
  function renderBody(out) {
    out.write(text);
  }
}