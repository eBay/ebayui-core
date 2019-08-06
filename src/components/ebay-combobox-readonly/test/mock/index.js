const assign = require('core-js-pure/features/object/assign');
const { getNItems } = require('../../../../common/test-utils/shared');

exports.Combobox_0Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: []
};

exports.Combobox_3Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: getNItems(3, i => ({
        value: String(i),
        text: `option ${i}`
    }))
};

exports.Combobox_3Options_2Selected = assign({}, exports.Combobox_3Options, {
    options: getNItems(3, i => ({
        value: String(i),
        text: `option ${i}`,
        selected: i === 1
    }))
});

exports.Combobox_3Options_Borderless = assign({}, exports.Combobox_3Options, {
    borderless: true
});

exports.Combobox_3Options_Disabled = assign({}, exports.Combobox_3Options, {
    disabled: true
});
