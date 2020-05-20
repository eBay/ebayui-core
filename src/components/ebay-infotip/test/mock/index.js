const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.WithContent = {
    ariaLabel: 'Infotip label',
    content: {
        renderBody: createRenderBody('Infotip content')
    }
};

exports.WithContentAndHeader = assign({}, exports.WithContent, {
    heading: {
        renderBody: createRenderBody('Infotip heading')
    }
});

exports.Disabled = assign({}, exports.WithContent, {
    disabled: true
});

exports.ModalWithContent = assign({}, exports.WithContent, {
    modal: true,
    a11yCloseText: 'Close mini dialog'
});

exports.ModalDisabled = assign({}, exports.ModalWithContent, {
    disabled: true
});
