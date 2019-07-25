const assign = require('core-js-pure/features/object/assign');

exports.Basic = {
  renderBody: createRenderBody('text')
}

exports.Pressed = assign({}, exports.Basic, {
  pressed: true
});

exports.Disabled = assign({}, exports.Basic, {
  disabled: true
});

exports.Fake = assign({}, exports.Basic, {
  href: '#fake'
});

exports.Fake_Pressed = assign({}, exports.Fake, {
  pressed: true,
  a11yActiveText: 'Selected Pill'
});

exports.Fake_Disabled = assign({}, exports.Fake, {
  disabled: true
});

function createRenderBody(text) {
  renderBody.text = text;
  return renderBody;
  function renderBody(out) {
    out.write(text);
  }
}