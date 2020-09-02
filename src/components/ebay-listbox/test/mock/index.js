const { getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_0Options = {
    options: []
};

exports.Basic_3Options = {
    name: 'listbox-name',
    options: getNItems(3, i => ({
        value: String(i),
        text: `option ${i}`
    }))
};

exports.Basic_3Options_1Selected = {
    name: 'listbox-name',
    options: getNItems(3, i => ({
        value: String(i),
        selected: i === 1,
        text: `option ${i}`
    }))
};
