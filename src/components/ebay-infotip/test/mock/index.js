import { createRenderBody } from '../../../../common/test-utils/shared';

export const WithContent = {
    ariaLabel: 'Infotip label',
    content: {
        renderBody: createRenderBody('Infotip content'),
    },
};

export const WithContentAndHeader = Object.assign({}, WithContent, {
    heading: {
        renderBody: createRenderBody('Infotip heading'),
    },
});

export const Disabled = Object.assign({}, WithContent, {
    disabled: true,
});

export const ModalWithContent = Object.assign({}, WithContent, {
    variant: 'modal',
    a11yCloseButtonText: 'Close mini dialog',
});

export const ModalDisabled = Object.assign({}, ModalWithContent, {
    disabled: true,
});
