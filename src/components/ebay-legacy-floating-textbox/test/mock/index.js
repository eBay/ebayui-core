const { createRenderBody } = require('../../../../common/test-utils/shared');
const iconBody = {
    renderBody: createRenderBody(
        '<svg class="icon" focusable="false" id="w11-w0" ' +
            'aria-hidden="true"> <defs id="w11-w0-defs"></defs><use ' +
            'xlink:href="#icon-profile"></use></svg>',
        ''
    ),
};

exports.Basic = {
    value: 'textbox value',
};

exports.Basic_With_ID = Object.assign({}, exports.Basic, {
    id: 'textbox-id',
});

exports.Fluid = Object.assign({}, exports.Basic, {
    fluid: true,
});

exports.Disabled = Object.assign({}, exports.Basic, {
    disabled: true,
});

exports.Invalid = Object.assign({}, exports.Basic, {
    invalid: true,
});

exports.Multiline = Object.assign({}, exports.Basic, {
    multiline: true,
});

exports.Prefix_Icon = Object.assign({}, exports.Basic, {
    prefixIcon: iconBody,
});

exports.Postfix_Icon = Object.assign({}, exports.Basic, {
    postfixIcon: iconBody,
});

exports.Postfix_Icon_Button = Object.assign({}, exports.Postfix_Icon, {
    buttonAriaLabel: 'search button',
});

exports.Floating_Label = Object.assign({}, exports.Basic, {
    floatingLabel: 'Email address',
});

exports.Floating_Label_No_Value = Object.assign({}, exports.Floating_Label, {
    value: undefined,
});

exports.Floating_Label_With_ID = Object.assign({}, exports.Floating_Label, {
    id: 'textbox-id',
});

exports.Floating_Label_Disabled = Object.assign({}, exports.Floating_Label, {
    disabled: true,
});
