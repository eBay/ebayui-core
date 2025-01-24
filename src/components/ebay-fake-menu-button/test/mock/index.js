/* eslint camelcase: "off" */
import {
    createRenderBody,
    getNItems,
} from "../../../../common/test-utils/shared";

export const basic2Items = {
    text: "Basic Menu",
    a11yText: "Menu A11y Text",
    item: getNItems(2, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
};

export const basic3Items = Object.assign({}, basic2Items, {
    item: getNItems(3, (i) => ({
        href: `#${i}`,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

export const separator4Items = Object.assign({}, basic2Items, {
    item: getNItems(4, (i) => ({
        href: `#${i}`,
        separator: i === 2,
        renderBody: createRenderBody(`Item text ${i}`),
    })),
});

export const No_Toggle_Icon = Object.assign({}, basic2Items, {
    noToggleIcon: true,
});

export const Disabled = Object.assign({}, basic3Items, {
    disabled: true,
});

export const Settings_Icon = Object.assign({}, basic2Items, {
    text: "",
    icon: {
        renderBody: createRenderBody("icon content"),
    },
});

export const Custom_Label = Object.assign({}, basic2Items, {
    label: {
        renderBody: createRenderBody(
            '<span class="custom_label">custom label text</span>',
            "custom label text",
        ),
    },
});

export const Overflow_Variant = Object.assign({}, basic2Items, {
    text: "",
    variant: "overflow",
});
