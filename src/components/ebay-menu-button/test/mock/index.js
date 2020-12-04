const assign = require('core-js-pure/features/object/assign');
const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_2Items = {
    text: 'Basic Menu',
    a11yText: 'Menu A11y Text',
    items: getNItems(2, i => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
};

exports.Basic_3Items = assign({}, exports.Basic_2Items, {
    items: getNItems(3, i => ({
        value: `item ${i}`,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
});

exports.Separator_4Items = assign({}, exports.Basic_2Items, {
    items: getNItems(4, i => ({
        value: `item ${i}`,
        _isSeparator: i === 2,
        renderBody: createRenderBody(`Item text ${i}`)
    }))
});

exports.No_Toggle_Icon = assign({}, exports.Basic_2Items, {
    noToggleIcon: true
});

exports.Disabled = assign({}, exports.Basic_3Items, {
    disabled: true
});

exports.Settings_Icon = assign({}, exports.Basic_2Items, {
    text: '',
    icon: {
        renderBody: createRenderBody('icon content')
    }
});

exports.Custom_Label = assign({}, exports.Basic_2Items, {
    label: {
        renderBody: createRenderBody(
            '<span class="custom_label">custom label text</span>',
            'custom label text'
        )
    }
});

exports.Overflow_Variant = assign({}, exports.Basic_2Items, {
    text: '',
    variant: 'overflow'
});

const countries = ['Albania', 'Alcania', 'Alcdnia'];

exports.Countries = assign({}, exports.Basic_2Items, {
    items: getNItems(3, i => ({
        value: `item ${i} ${countries[i]}`,
        renderBody: createRenderBody(`Item text ${i} ${countries[i]}`)
    }))
});
