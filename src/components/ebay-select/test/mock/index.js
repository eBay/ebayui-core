const assign = require('core-js-pure/features/object/assign');
const { getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_0Options = {
    options: []
};

exports.Basic_3Options = {
    options: getNItems(3, i => ({
        value: String(i),
        text: `option ${i}`
    }))
};

exports.Borderless_3Options = assign({}, exports.Basic_3Options, {
    borderless: true
});

exports.Basic_3Options_1Selected = {
    options: getNItems(3, i => ({
        value: String(i),
        text: `option ${i}`,
        selected: i === 1
    }))
};
