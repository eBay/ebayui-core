const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

exports.Basic_2Items = {
    text: 'Basic Menu',
    a11yText: 'Menu A11y Text',
    items: getNItems(2, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

exports.Basic_3Items = Object.assign({}, exports.Basic_2Items, {
    items: getNItems(3, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

exports.Separator_4Items = Object.assign({}, exports.Basic_2Items, {
    items: getNItems(4, (i) => ({
        href: `#${i}`,
        separator: i === 2,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

exports.No_Toggle_Icon = Object.assign({}, exports.Basic_2Items, {
    noToggleIcon: true,
});

exports.Disabled = Object.assign({}, exports.Basic_3Items, {
    disabled: true,
});

exports.Settings_Icon = Object.assign({}, exports.Basic_2Items, {
    text: '',
    icon: {
        renderBody: createRenderBody('icon content'),
    },
});

exports.Custom_Label = Object.assign({}, exports.Basic_2Items, {
    label: {
        renderBody: createRenderBody(
            '<span class="custom_label">custom label text</span>',
            'custom label text'
        ),
    },
});

exports.Overflow_Variant = Object.assign({}, exports.Basic_2Items, {
    text: '',
    variant: 'overflow',
});
