const { getNItems } = require('../../../../common/test-utils/shared');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Combobox_0Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: [],
};

exports.Combobox_3Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: getNItems(3, (i) => ({
        value: i,
        text: `option ${i}`,
    })),
};

exports.Combobox_3Options_Manual = {
    name: 'test-combobox',
    autocomplete: 'list',
    listSelection: 'manual',
    options: getNItems(3, (i) => ({
        value: i,
        text: `option ${i}`,
    })),
};

exports.Combobox_3OptionsFloatingLabel = {
    name: 'test-combobox',
    autocomplete: 'list',
    floatingLabel: 'Test',
    options: getNItems(3, (i) => ({
        value: i,
        text: `option ${i}`,
    })),
};

exports.Combobox_3Options_2Selected = Object.assign({}, exports.Combobox_3Options, {
    value: exports.Combobox_3Options.options[1].text,
});

exports.Combobox_3Options_Borderless = Object.assign({}, exports.Combobox_3Options, {
    borderless: true,
});

exports.Combobox_3Options_Actionable = Object.assign({}, exports.Combobox_3Options, {
    button: {
        renderBody: createRenderBody('actionable'),
    },
});

exports.Combobox_3Options_Actionable_No_Body = Object.assign({}, exports.Combobox_3Options, {
    button: {
        ariaLabel: 'actionable label',
    },
});
