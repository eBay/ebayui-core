const { getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_0Options = {
    options: [],
};

exports.Basic_3Options = {
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

exports.Basic_3OptionsWithBlank = {
    options: getNItems(4, (i) => ({
        value: i === 0 ? '' : String(i),
        text: `option ${i}`,
    })),
};

exports.Borderless_3Options = Object.assign({}, exports.Basic_3Options, {
    borderless: true,
});

exports.Basic_3Options_1Selected = {
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
        selected: i === 1,
    })),
};

exports.Floating_Label_Always = Object.assign({}, exports.Basic_3Options, {
    floatingLabel: 'Email address',
});

exports.Floating_Label = Object.assign({}, exports.Basic_3OptionsWithBlank, {
    floatingLabel: 'Email address',
});

exports.Floating_Label_No_Value = Object.assign({}, exports.Floating_Label, {
    value: undefined,
});

exports.Floating_Label_With_ID = Object.assign({}, exports.Floating_Label, {
    id: 'select-id',
});

exports.Floating_Label_Disabled = Object.assign({}, exports.Floating_Label, {
    disabled: true,
});
