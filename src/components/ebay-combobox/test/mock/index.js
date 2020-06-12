const assign = require('core-js-pure/features/object/assign');
const { getNItems } = require('../../../../common/test-utils/shared');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Combobox_0Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: []
};

exports.Combobox_3Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: getNItems(3, i => ({
        value: i,
        text: `option ${i}`
    }))
};

exports.Combobox_3Options_2Selected = assign({}, exports.Combobox_3Options, {
    value: exports.Combobox_3Options.options[1].text
});

exports.Combobox_3Options_Borderless = assign({}, exports.Combobox_3Options, {
    borderless: true
});

exports.Combobox_3Options_Actionable = assign({}, exports.Combobox_3Options, {
    actionable: {
        renderBody: createRenderBody('actionable')
    }
});

exports.Combobox_3Options_Actionable_No_Body = assign({}, exports.Combobox_3Options, {
    actionable: {
        ariaLabel: 'actionable label'
    }
});
