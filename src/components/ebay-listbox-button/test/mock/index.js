const { getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_0Options = {
    name: 'listbox-name',
    buttonName: 'listbox-button-name',
    options: [],
};

exports.Basic_3Options_fluid = {
    name: 'listbox-name',
    fluid: true,
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

exports.Basic_3Options_truncated = {
    name: 'listbox-name',
    truncate: true,
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

exports.Basic_3Options = {
    name: 'listbox-name',
    buttonName: 'listbox-button-name',
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

exports.Basic_3Options_FirstSelected = {
    name: 'listbox-name',
    buttonName: 'listbox-button-name',
    options: getNItems(3, (i) => ({
        selected: i === 0,
        value: String(i),
        text: `option ${i}`,
    })),
};

exports.Basic_3Options_1Selected = {
    name: 'listbox-name',
    options: getNItems(3, (i) => ({
        value: String(i),
        selected: i === 1,
        text: `option ${i}`,
    })),
};
