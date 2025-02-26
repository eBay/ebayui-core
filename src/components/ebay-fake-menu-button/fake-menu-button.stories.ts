import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import IconTemplate from "./examples/icon-with-text.marko";
import IconTemplateCode from "./examples/icon-with-text.marko?raw";
import CustomLabelTemplate from "./examples/custom-label.marko";
import CustomLabelTemplateCode from "./examples/custom-label.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";

import Component from "./index.marko";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-fake-menu-button",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        text: {
            control: { type: "text" },
            description: "button text",
        },
        a11yText: {
            description:
                "a11y text for the button, especially for cases without text",
            control: { type: "text" },
        },
        noToggleIcon: {
            type: "boolean",
            description: "whether to hide the chevron toggle icon",
            control: { type: "boolean" },
        },
        expanded: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "whether content is expanded (Note: not supported as initial attribute)",
        },
        reverse: {
            type: "boolean",
            control: { type: "boolean" },
            description: "expand menu flyout to the left",
        },
        fixWidth: {
            type: "boolean",
            control: { type: "boolean" },
            description: "constrain items container width to button width",
        },
        borderless: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether button has borders",
        },
        size: {
            control: { type: "text" },
            description: 'button size, "large" (default: "none")',
        },
        priority: {
            control: { type: "select" },
            options: ["primary", "secondary", "delete", "tertiary", "none"],
            description: 'button priority, only used when variant="button"',
        },
        disabled: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "Will disable the entire dropdown (disables the ebay-button label) if set to true",
        },
        variant: {
            control: { type: "select" },
            options: ["overflow", "form", "button", "icon"],
            description:
                'will change the button style, "overflow", "form" or "button. Default is form"',
        },
        item: {
            name: "@item",
            table: {
                category: "@attribute tags",
            },
        },
        icon: {
            name: "@icon",
            table: {
                category: "@attribute tags",
            },
        },
        href: {
            control: { type: "text" },
            table: {
                category: "@item attribute tags",
            },
            description:
                "for link that looks like a menu-item. If not set for fake type, will also disable the item",
        },
        strategy: {
            control: { type: "select" },
            options: ["absolute", "fixed"],
            table: {
                defaultValue: {
                    summary: "absolute",
                },
            },

            description:
                "Swap between fixed and absolute positioning strategy. Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",
        },
        type: {
            control: { type: "text" },
            description: 'Set to "button" for fake menu-item `<button>`',
            table: {
                category: "@item attribute tags",
            },
        },
        checked: {
            table: {
                category: "@item attribute tags",
            },
            description: "whether or not item is checked",
        },
        current: {
            table: {
                category: "@item attribute tags",
            },
            description:
                "whether or not the href is the current href of the page",
        },
        badgeNumber: {
            description: "used as the number to be placed in the badge",
            controls: { hideNoControlsWarning: true },
            table: {
                category: "@item attribute tags",
            },
        },
        "aria-label": {
            controls: { hideNoControlsWarning: true },
            description:
                "Passed as the `aria-label` directly to the badge. Required only if badge number is provided",

            table: {
                category: "@item attribute tags",
            },
        },
        onKeydown: {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, checked }",
                },
            },
        },
        onCollapse: {
            action: "on-collapse",
            description: "Triggered on menu collapse",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onExpand: {
            action: "on-expand",
            description: "Triggered on menu expand",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },

        onMousedown: {
            action: "on-mousedown",
            description: "Triggered on mouse down on menu item",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onSelect: {
            action: "on-select",
            description: "Triggered on item clicked (non radio/checkbox)",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, checked }",
                },
            },
        },
    },
};

export const Standard = Template.bind({});

Standard.args = {
    item: [
        {
            renderBody: `item 1 that has very long text`,
            href: "https://www.ebay.com",
        },
        {
            renderBody: `item 2`,
            href: "https://www.ebay.com",
        },
        {
            renderBody: `item 3`,
            href: "https://www.ebay.com",
        },
    ] as any,
    text: `eBay Menu`,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-fake-menu-button", Standard.args),
        },
    },
};

export const IconText = buildExtensionTemplate(IconTemplate, IconTemplateCode);
export const CustomLabelText = buildExtensionTemplate(
    CustomLabelTemplate,
    CustomLabelTemplateCode,
);
export const Separator = buildExtensionTemplate(
    SeparatorTemplate,
    SeparatorTemplateCode,
);
