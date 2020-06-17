const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');
const iconBody = {
    renderBody: createRenderBody(
        '<svg class="textbox__icon" focusable="false" id="w11-w0" ' +
        'aria-hidden="true"> <defs id="w11-w0-defs"></defs><use ' +
        'xlink:href="#icon-profile"></use></svg>',
        ''
    )
};

exports.Basic = {
    value: 'textbox value'
};

exports.Basic_With_ID = assign({}, exports.Basic, {
    id: 'textbox-id'
});

exports.Fluid = assign({}, exports.Basic, {
    fluid: true
});

exports.Disabled = assign({}, exports.Basic, {
    disabled: true
});

exports.Invalid = assign({}, exports.Basic, {
    invalid: true
});

exports.Multiline = assign({}, exports.Basic, {
    multiline: true
});

exports.Prefix_Icon = assign({}, exports.Basic, {
    prefixIcon: 'search',
    prefixIconTag: iconBody
});

exports.Postfix_Icon = assign({}, exports.Basic, {
    postfixIcon: 'search',
    postfixIconTag: iconBody
});

exports.Postfix_Icon_Button = assign({}, exports.Postfix_Icon, {
    postfixAriaLabel: 'search button'
});

exports.Floating_Label = assign({}, exports.Basic, {
    floatingLabel: 'Email address'
});

exports.Floating_Label_No_Value = assign({}, exports.Floating_Label, {
    value: undefined
});

exports.Floating_Label_With_ID = assign({}, exports.Floating_Label, {
    id: 'textbox-id'
});

exports.Floating_Label_Disabled = assign({}, exports.Floating_Label, {
    disabled: true
});
