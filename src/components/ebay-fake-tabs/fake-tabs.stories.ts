import { addRenderBodies } from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "navigation & disclosure/ebay-fake-tabs",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selectedIndex: {
            control: { type: "number" },
            description: "0-based index of selected tab tab and panel",
        },
        tabMatchesCurrentUrl: {
            control: { type: "boolean" },
            description:
                'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").',
        },
        tab: {
            name: "@tab",
            table: {
                category: "@attribute tags",
            },
        },
        href: {
            control: { type: "text" },
            description: "The link to take the user to for each tab",
            table: {
                category: "@tag attributes",
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    tab: [
        {
            renderBody: `Tab 1`,
            href: "https://www.ebay.com",
        },
        {
            renderBody: `Tab 2`,
            href: "https://www.ebay.com",
        },
        {
            renderBody: `Tab 3`,
            href: "https://www.ebay.com",
        },
    ],
    renderBody: `Lorum ipsom dolor`,
} as any;
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-fake-tabs", Standard.args, { tabs: "tab" }),
        },
    },
};
