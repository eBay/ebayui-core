exports.Basic = {
    a11yText: 'star',
    a11yStarText: ['star 1', 'star 2', 'star 3', 'star 4', 'star 5'],
};

exports.Basic_0Selected = Object.assign({}, exports.Basic, {
    value: 0,
});

exports.Basic_2Selected = Object.assign({}, exports.Basic, {
    value: 2,
});

exports.Basic_5Selected = Object.assign({}, exports.Basic, {
    value: 5,
});

exports.Basic_Disbaled = Object.assign({}, exports.Basic, {
    value: 2,
    disabled: true,
});
