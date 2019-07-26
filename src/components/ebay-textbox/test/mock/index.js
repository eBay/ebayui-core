const assign = require('core-js-pure/features/object/assign');

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
    icon: 'search',
    iconTag: {
        renderBody(out) {
            out.write(
                '<svg class="textbox__icon" focusable="false" id="w11-w0" ' +
                'aria-hidden="true"> <defs id="w11-w0-defs"></defs><use ' +
                'xlink:href="#icon-profile"></use></svg>'
            );
        }
    }
});

exports.Postfix_Icon = assign({}, exports.Prefix_Icon, {
    iconPosition: 'postfix'
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