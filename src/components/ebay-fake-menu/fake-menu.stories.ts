import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import ItemMatchesTemplate from "./examples/item-matches-url.marko";
import ItemMatchesTemplateCode from "./examples/item-matches-url.marko?raw";
import SpritesTemplate from "./examples/sprites.marko";
import SpritesTemplateCode from "./examples/sprites.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-fake-menu",
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
            control: { type: "select" },
            options: ["fake", "radio", "checkbox"],
            description: 'Can be "fake"/ "radio" / "checkbox"',
        },
        priority: {
            control: { type: "select" },
            options: ["primary", "secondary", "none"],
            description:
                'button priority, "primary" / "secondary" (default) / "none"',
        },
        item: {
            name: "@item",
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
                "for link that looks like a menu-item. If set to null then will disable item",
        },
        itemType: {
            name: "type",
            control: { type: "text" },
            description: 'Set to "button" for fake menu-item `<button>`',
            table: {
                category: "@item attribute tags",
            },
        },
        itemMatchesUrl: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives aria-current a value of `page`",
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
        value: {
            control: { type: "text" },
            table: {
                category: "@item attributes",
            },
            description:
                "the value to use with event responses for for the `checked` array",
        },
        "badge-number": {
            controls: { hideNoControlsWarning: true },
            table: {
                category: "@item attributes",
            },
            description: "used as the number to be placed in the badge",
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
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-fake-menu", Standard.args, {
                item: "item",
            }),
        },
    },
};

export const ItemMatches = buildExtensionTemplate(
    ItemMatchesTemplate,
    ItemMatchesTemplateCode,
);
export const Sprites = buildExtensionTemplate(
    SpritesTemplate,
    SpritesTemplateCode,
);
export const Separator = buildExtensionTemplate(
    SeparatorTemplate,
    SeparatorTemplateCode,
);
