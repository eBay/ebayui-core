import { buildExtensionTemplate } from "../../common/storybook/utils";
import Accordion from "./index.marko";
import Readme from "./README.md";
import openTemplate from "./examples/opened.marko";
import openTemplateCode from "./examples/opened.marko?raw";
import largeTemplate from "./examples/large.marko";
import largeTemplateCode from "./examples/large.marko?raw";
import autoCollapsedTemplate from "./examples/autoCollapsed.marko";
import autoCollapsedTemplateCode from "./examples/autoCollapsed.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component-browser";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        renderBody: function (out: any) {
            out.html(args.renderBody);
        } as any,
    },
});

export default {
    title: "navigation & disclosure/ebay-accordion",
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            type: "options",
            description: "Size of the details",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            options: ["regular", "large"],
        },
        autoCollapse: {
            type: "boolean",
            description: "Whether accordion panels should be autocollapsed when another is opened",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        a11yRoleDescription: {
            type: "string",
            control: { type: "text" },
            description:
                "The localized role description to announce the component role for a11y users.",
            table: {
                defaultValue: {
                    summary: "accordion",
                },
            },
        },
        items: {
            name: "@item",
            description:
                "Represents an <ebay-details/> element to be used as part of the group. Allowed attributes are `open`, `as`, `text` and `renderBody`",
            table: {
                category: "@attribute tags",
            },
        },
        onToggle: {
            action: "on-toggle",
            description: "Triggered on toggle",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, open }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
const items: any = [
    {
        text: "Item 1",
        renderBody:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        text: "Item 2",
        renderBody:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        text: "Item 3",
        renderBody:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
];
Default.args = {
    items: items
};

export const Open = buildExtensionTemplate(openTemplate, openTemplateCode);

export const Large = buildExtensionTemplate(largeTemplate, largeTemplateCode);

export const AutoCollapsed = buildExtensionTemplate(autoCollapsedTemplate, autoCollapsedTemplateCode);
