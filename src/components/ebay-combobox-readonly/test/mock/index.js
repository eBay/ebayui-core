exports.Combobox_0Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: []
};

exports.Combobox_3Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: [{
        value: '1',
        text: 'option 1'
    }, {
        value: '2',
        text: 'option 2'
    }, {
        value: '3',
        text: 'option 3'
    }]
};

exports.Combobox_3Options_2Selected = {
    ...exports.Combobox_3Options,
    options: [{
        value: '1',
        text: 'option 1'
    }, {
        value: '2',
        text: 'option 2',
        selected: true
    }, {
        value: '3',
        text: 'option 3'
    }]
};

exports.Combobox_3Options_Borderless = {
    ...exports.Combobox_3Options,
    borderless: true
};

exports.Combobox_3Options_Disabled = {
    ...exports.Combobox_3Options,
    disabled: true
};
