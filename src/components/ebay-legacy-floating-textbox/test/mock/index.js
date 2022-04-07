import { createRenderBody } from '../../../../common/test-utils/shared';
const iconBody = {
    renderBody: createRenderBody(
        '<svg class="icon" focusable="false" id="w11-w0" ' +
            'aria-hidden="true"> <defs id="w11-w0-defs"></defs><use ' +
            'xlink:href="#icon-profile"></use></svg>',
        ''
    ),
};

export const Basic = {
    value: 'textbox value',
};

export const basicWithId = Object.assign({}, Basic, {
    id: 'textbox-id',
});

export const Fluid = Object.assign({}, Basic, {
    fluid: true,
});

export const Disabled = Object.assign({}, Basic, {
    disabled: true,
});

export const Invalid = Object.assign({}, Basic, {
    invalid: true,
});

export const Multiline = Object.assign({}, Basic, {
    multiline: true,
});

export const prefixIcon = Object.assign({}, Basic, {
    prefixIcon: iconBody,
});

export const postfixIcon = Object.assign({}, Basic, {
    postfixIcon: iconBody,
});

export const postfixIconButton = Object.assign({}, postfixIcon, {
    buttonAriaLabel: 'search button',
});

export const floatingLabel = Object.assign({}, Basic, {
    floatingLabel: 'Email address',
});

export const floatingLabelNoValue = Object.assign({}, floatingLabel, {
    value: undefined,
});

export const floatingLabelWithId = Object.assign({}, floatingLabel, {
    id: 'textbox-id',
});

export const floatingLabelDisabled = Object.assign({}, floatingLabel, {
    disabled: true,
});
