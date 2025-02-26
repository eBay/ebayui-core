import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import BadgedTemplate from "./examples/badged-items.marko";
import BadgedTemplateCode from "./examples/badged-items.marko?raw";
import IconTemplate from "./examples/icon-with-text.marko";
import IconTemplateCode from "./examples/icon-with-text.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import PrefixLabelTemplate from "./examples/prefix-label.marko";
import PrefixLabelTemplateCode from "./examples/prefix-label.marko?raw";
import Component from "./index.marko";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-menu-button",
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
        type: {
            control: { type: "select" },
            options: ["none", "radio", "checkbox"],
            description: 'Can be "radio" / "checkbox"',
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
            description: "whether button has borders. Forces variant=button",
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
        checked: {
            description:
                "will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup",
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
            table: {
                defaultValue: {
                    summary: "button",
                },
            },
            description:
                'will change the button style, "overflow", "form" or "button"',
        },
        collapseOnSelect: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                'Will collapse whole menu when an item is selected in menu. Typically used in `type="radio"`',
        },
        partiallyDisabled: {
            description:
                "programmatically disabled, but remains keyboard focusable",
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        prefixId: {
            control: { type: "text" },
            description:
                "The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label`",
        },
        prefixLabel: {
            control: { type: "text" },
            description:
                "The label to add before each selected item on the button. Cannot be used with `prefix-id, Only works when @label is passed`",
        },
        label: {
            name: "@label",
            description:
                "The menu button label. Cannot be used in conjunction with text.",

            table: {
                category: "@attribute tags",
            },
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
        badgeNumber: {
            controls: { hideNoControlsWarning: true },
            description: "used as the number to be placed in the badge",
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
        onChange: {
            action: "on-change",
            description:
                "Triggered on item checked change, (checkbox/radio type only)",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }",
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

export const Default = Template.bind({});
Default.args = {
    item: [
        {
            renderBody: `item 1 that has very long text`,
        },
        {
            renderBody: `item 2`,
        },
        {
            renderBody: `item 3`,
        },
    ] as any,
    text: `eBay Menu`,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-menu-button", Default.args),
        },
    },
};

export const IconText = buildExtensionTemplate(IconTemplate, IconTemplateCode);
export const Separator = buildExtensionTemplate(
    SeparatorTemplate,
    SeparatorTemplateCode,
);
export const Typeahead = buildExtensionTemplate(
    TypeaheadTemplate,
    TypeaheadTemplateCode,
);
export const Badged = buildExtensionTemplate(
    BadgedTemplate,
    BadgedTemplateCode,
);
export const PrefixLabel = buildExtensionTemplate(
    PrefixLabelTemplate,
    PrefixLabelTemplateCode,
);
