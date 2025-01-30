import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import BadgedTemplate from "./examples/badged.marko";
import BadgedTemplateCode from "./examples/badged.marko?raw";
import SpritesTemplate from "./examples/sprites.marko";
import SpritesTemplateCode from "./examples/sprites.marko?raw";
import TypeaheadTemplate from "./examples/typeahead.marko";
import TypeaheadTemplateCode from "./examples/typeahead.marko?raw";
import SeparatorTemplate from "./examples/separator.marko";
import SeparatorTemplateCode from "./examples/separator.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-menu",
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
            control: { type: "text" },
            description: 'Can be "radio" / "checkbox"',
        },
        priority: {
            control: { type: "select" },
            options: ["primary", "secondary", "none"],
            description:
                'button priority, "primary" / "secondary" (default) / "none"',
        },
        checked: {
            description:
                "will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup",
        },
        item: {
            name: "@item",
            table: {
                category: "@attribute tags",
            },
        },
        value: {
            control: { type: "text" },
            table: {
                category: "@item attributes",
            },
            description:
                "the value to use with event responses for for the `checked` array",
        },
        badgeNumber: {
            controls: { hideNoControlsWarning: true },
            table: {
                category: "@item attributes",
            },
            description: "used as the number to be placed in the badge",
        },
        "aria-label": {
            controls: { hideNoControlsWarning: true },
            table: {
                category: "@item attributes",
            },
            description:
                "Passed as the `aria-label` directly to the badge. Required only if badge number is provided",
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
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-menu", Default.args),
        },
    },
};

export const Typeahead = buildExtensionTemplate(
    TypeaheadTemplate,
    TypeaheadTemplateCode,
);
export const Badged = buildExtensionTemplate(
    BadgedTemplate,
    BadgedTemplateCode,
);
export const Sprites = buildExtensionTemplate(
    SpritesTemplate,
    SpritesTemplateCode,
);
export const Separator = buildExtensionTemplate(
    SeparatorTemplate,
    SeparatorTemplateCode,
);
