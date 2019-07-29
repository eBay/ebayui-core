const assign = require('core-js-pure/features/object/assign');

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

function getNItems(n, getAttrs) {
    return Array.from({ length: n }).map((_, i) => getAttrs(i));
}
