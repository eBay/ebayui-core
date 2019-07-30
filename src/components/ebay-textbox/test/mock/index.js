exports.Basic = {
    value: 'textbox value'
};

exports.Basic_With_ID = {
    ...exports.Basic,
    id: 'textbox-id'
};

exports.Fluid = {
    ...exports.Basic,
    fluid: true
};

exports.Disabled = {
    ...exports.Basic,
    disabled: true
};

exports.Invalid = {
    ...exports.Basic,
    invalid: true
};

exports.Multiline = {
    ...exports.Basic,
    multiline: true
};

exports.Prefix_Icon = {
    ...exports.Basic,
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
};

exports.Postfix_Icon = {
    ...exports.Prefix_Icon,
    iconPosition: 'postfix'
};

exports.Floating_Label = {
    ...exports.Basic,
    floatingLabel: 'Email address'
};

exports.Floating_Label_No_Value = {
    ...exports.Floating_Label,
    value: undefined
};

exports.Floating_Label_With_ID = {
    ...exports.Floating_Label,
    id: 'textbox-id'
};

exports.Floating_Label_Disabled = {
    ...exports.Floating_Label,
    disabled: true
};
