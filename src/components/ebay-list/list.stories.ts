import Readme from "./README.md";
import Component from "./index.marko";
import StaticTemplate from "./examples/static.marko";
import StaticTemplateCode from "./examples/static.marko?raw";
import InteractiveTemplate from "./examples/interactive.marko";
import InteractiveTemplateCode from "./examples/interactive.marko?raw";
import WithSeparatorTemplate from "./examples/with-separator.marko";
import WithSeparatorTemplateCode from "./examples/with-separator.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component-browser";

export default {
    title: "building blocks/ebay-list",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        item: {
            name: "@item",
            description: "Item to render in the list",
            table: {
                category: "@attribute tags",
            },
        },
        as: {
            name: "as",
            description: "Element to render the item as",
            table: {
                category: "@item attributes",
            },
        },
        leading: {
            name: "@leading",
            description: "Leading content to render in the list item",
            table: {
                category: "@item attributes",
            },
        },

        trailing: {
            name: "@trailing",
            description: "Trailing content to render in the list item",
            table: {
                category: "@item attributes",
            },
        },
        separator: {
            name: "separator",
            description: "If true, will render the current item as a separator",
            table: {
                category: "@item attributes",
            },
        },
        "onButton-click": {
            action: "on-button-click",
            description:
                "Triggered on item click when the item is renderd as a button",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ index }",
                },
            },
        },
    },
};

export const Static: Story<Input> = (args) => ({
    input: args,
    component: StaticTemplate,
});
Static.args = {};
Static.parameters = {
    docs: {
        source: {
            code: StaticTemplateCode,
        },
    },
};

export const Interactive: Story<Input> = (args) => ({
    input: args,
    component: InteractiveTemplate,
});
Interactive.args = {};
Interactive.parameters = {
    docs: {
        source: {
            code: InteractiveTemplateCode,
        },
    },
};

export const WithSeparator: Story<Input> = (args) => ({
    input: args,
    component: WithSeparatorTemplate,
});
WithSeparator.args = {};
WithSeparator.parameters = {
    docs: {
        source: {
            code: WithSeparatorTemplateCode,
        },
    },
};
