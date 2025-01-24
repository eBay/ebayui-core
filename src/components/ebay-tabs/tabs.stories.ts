import { addRenderBodies } from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "navigation & disclosure/ebay-tabs",
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
            control: { type: "text" },
            description: "0-based index of selected tab tab and panel",
        },
        activation: {
            control: { type: "text" },
            description:
                'whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual"',
        },
        tab: {
            name: "@tab",
            table: {
                category: "@attribute tags",
            },
        },
        panel: {
            name: "@panel",
            table: {
                category: "@attribute tags",
            },
        },
        onSelect: {
            action: "on-select",
            description: "Triggered on tab selected",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ selectedIndex }",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    panel: [
        {
            renderBody: `panel one`,
        },
        {
            renderBody: `panel two`,
        },
        {
            renderBody: `panel three`,
        },
    ] as any,
    tab: [
        {
            renderBody: `Tab 1`,
        },
        {
            renderBody: `Tab 2`,
        },
        {
            renderBody: `Tab 3`,
        },
    ] as any,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-tabs", Standard.args, {
                tab: "tab",
                panel: "panel",
            }),
        },
    },
};
