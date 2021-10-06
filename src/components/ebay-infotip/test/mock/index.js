const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.WithContent = {
    ariaLabel: 'Infotip label',
    content: {
        renderBody: createRenderBody('Infotip content'),
    },
};

exports.WithContentAndHeader = Object.assign({}, exports.WithContent, {
    heading: {
        renderBody: createRenderBody('Infotip heading'),
    },
});

exports.Disabled = Object.assign({}, exports.WithContent, {
    disabled: true,
});

exports.ModalWithContent = Object.assign({}, exports.WithContent, {
    variant: 'modal',
    a11yCloseButtonText: 'Close mini dialog',
});

exports.ModalDisabled = Object.assign({}, exports.ModalWithContent, {
    disabled: true,
});
