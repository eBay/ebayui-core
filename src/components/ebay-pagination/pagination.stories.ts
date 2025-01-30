import { addRenderBodies } from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import interactiveTemplate from "./examples/buttons-interactive.marko";
import interactiveCode from "./examples/buttons-interactive.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "navigation & disclosure/ebay-pagination",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        a11yPreviousText: {
            control: { type: "text" },
            description: "a11y text for previous arrow button",
        },
        a11yNextText: {
            control: { type: "text" },
            description: "a11y text for next arrow button",
        },
        a11yCurrentText: {
            control: { type: "text" },
            description:
                "Description for the current page (e.g. Results of Page 1)",
        },
        variant: {
            control: { type: "select" },

            table: {
                defaultValue: {
                    summary: "show-range",
                },
            },

            options: ["show-last", "show-range", "overflow"],
            description:
                "Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",
        },
        disabled: {
            name: "disabled",
            table: {
                category: "@item attribute tags",
            },
            description: "Previous/next button is disabled or not",
        },
        href: {
            name: "href",
            table: {
                category: "@item attribute tags",
            },
            description:
                "for link that looks like a menu-item; omitting the href will switch to a button",
        },
        item: {
            name: "@item",
            table: {
                category: "@attribute tags",
            },
        },
        "@item variant": {
            name: "variant",
            table: {
                category: "@item attribute tags",
            },
            description:
                '"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`',
        },
        current: {
            name: "current",
            table: {
                category: "@item attribute tags",
            },
            description: "the current page",
        },
        type: {
            name: "type",
            table: {
                category: "@item attribute tags",
            },
            description: `"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`,
        },
        onPrevious: {
            action: "on-previous",
            description: "Triggered on previous arrow button",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, el }",
                },
            },
        },
        onNext: {
            action: "on-next",
            description: "Triggered on next arrow button",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, el }",
                },
            },
        },
        onSelect: {
            action: "on-select",
            description: "Triggered on page selected clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, el, value, index }",
                },
            },
        },
    },
};

export const Links = Template.bind({});
Links.args = {
    a11yPreviousText: "previous",
    a11yNextText: "next",
    a11yCurrentText: "Current page",
    item: [
        {
            renderBody: ``,
            type: "previous",
            href: "#",
            disabled: true,
        },
        {
            renderBody: `1`,
            href: "#",
            current: true,
        },
        {
            renderBody: `2`,
            href: "#",
        },
        {
            renderBody: `3`,
            href: "#",
        },
        {
            renderBody: `4`,
            href: "#",
        },
        {
            renderBody: `5`,
            href: "#",
        },
        {
            renderBody: `6`,
            href: "#",
        },
        {
            renderBody: `7`,
            href: "#",
        },
        {
            renderBody: `8`,
            href: "#",
        },
        {
            renderBody: `9`,
            href: "#",
        },
        {
            renderBody: ``,
            type: "next",
            href: "#",
            disabled: true,
        },
    ] as any,
};
Links.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-pagination", Links.args),
        },
    },
};

export const Buttons = Template.bind({});
Buttons.args = {
    a11yPreviousText: "previous",
    a11yNextText: "next",
    a11yCurrentText: "Current page",
    item: [
        {
            renderBody: ``,
            type: "previous",
            disabled: true,
        },
        {
            renderBody: `1`,
            current: true,
        },
        {
            renderBody: `2`,
        },
        {
            renderBody: `3`,
        },
        {
            renderBody: `4`,
        },
        {
            renderBody: `5`,
        },
        {
            renderBody: `6`,
        },
        {
            renderBody: `7`,
        },
        {
            renderBody: `8`,
        },
        {
            renderBody: `9`,
        },
        {
            renderBody: ``,
            type: "next",
            disabled: true,
        },
    ] as any,
};
Buttons.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-pagination", Buttons.args),
        },
    },
};

export const Interactive: Story<Input> = (args) => ({
    component: interactiveTemplate,
    input: addRenderBodies(args),
});

Interactive.args = {};
Interactive.parameters = {
    docs: {
        source: {
            code: interactiveCode,
        },
    },
};
