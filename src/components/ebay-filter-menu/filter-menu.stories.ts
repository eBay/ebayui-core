import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component";
import WithSearchTemplate from "./examples/with-search.marko";
import WithSearchCode from "./examples/with-search.marko?raw";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-filter-menu",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        type: {
            options: ["radio", "checkbox"],
            control: { type: "select" },
            description: 'Can be "radio" / "checkbox"',
        },
        variant: {
            control: { type: "text" },
            description: '"" (default) / "form"',
        },
        classPrefix: {
            control: { type: "text" },
            description:
                '"filter-menu" (default) / modifies the base prefix for all Skin classes in the menu',
        },
        formName: {
            control: { type: "text" },
            description: "forms `name` attribute",
        },
        formAction: {
            control: { type: "text" },
            description: "forms `action` attribute",
        },
        formMethod: {
            control: { type: "text" },
            description: "forms `method` attribute",
        },
        searchHeaderValue: {
            control: { type: "text" },
            description:
                "optional value override for the input in the search header",
        },
        searchHeaderPlaceholderText: {
            control: { type: "text" },
            description:
                "enables the search header and populates placeholder text. `a11y-search-header-clear-text` is required if this is enabled.",
        },
        a11ySearchHeaderClearText: {
            control: { type: "text" },
            description: "a11y text for the search header clear button",
        },
        item: {
            table: {
                category: "@attribute tags",
            },
        },
        checked: {
            control: { type: "boolean" },
            description: "whether or not the item is checked",
            table: {
                category: "@item attributes",
            },
        },
        value: {
            table: {
                category: "@item attributes",
            },
            control: { type: "text" },
            description:
                "the item's value (returned in emitted events when checked)",
        },
        disabled: {
            table: {
                category: "@item attributes",
            },
            control: { type: "boolean" },
            description: "whether or not the item is disabled",
        },
        footer: {
            name: "@footer",
            table: {
                category: "@attribute tags",
            },
        },
        onChange: {
            action: "on-change",
            description: "Triggered on item clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "{ el, checked, itemChecked, index, originalEvent }",
                },
            },
        },
        onKeydown: {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "{ el, checked, itemChecked, index, originalEvent }",
                },
            },
        },
        "onFooter-click": {
            action: "on-footer-click",
            description: "Triggered on footer clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ checked, originalEvent }",
                },
            },
        },
        "onForm-submit": {
            action: "on-form-submit",
            description:
                'Triggered when using `variant="form"`, and form is submitted (emits current checked state)',
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ checked, originalEvent }",
                },
            },
        },
        "onSearch-change": {
            action: "on-search-change",
            description: "Triggered when the search input updates",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ checked, originalEvent }",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    item: [
        {
            value: "item 1",
            renderBody: `item 1`,
        },
        {
            value: "item 2",
            renderBody: `item 2`,
        },
        {
            value: "item 3",
            renderBody: `item 3`,
        },
    ],
    text: "Button",
    footer: {
        renderBody: "Apply",
        a11yFooterText: "a11y text for footer button",
    },
} as any;
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-filter-menu", Standard.args, {
                item: "item",
            }),
        },
    },
};

export const WithSearch = buildExtensionTemplate(
    WithSearchTemplate,
    WithSearchCode,
    {},
);
