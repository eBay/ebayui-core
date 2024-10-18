import { tagToString } from "../../../.storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import StaticTemplate from "./examples/static.marko";
import StaticTemplateCode from "./examples/static.marko?raw";
import InteractiveTemplate from "./examples/interactive.marko";
import InteractiveTemplateCode from "./examples/interactive.marko?raw";
import WithSeparatorTemplate from "./examples/with-separator.marko";
import WithSeparatorTemplateCode from "./examples/with-separator.marko?raw";

const Template = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: "building blocks/ebay list",
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
        "onItem-click": {
            action: "on-item-click",
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

export const Static = (args) => ({
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

export const Interactive = (args) => ({
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

export const WithSeparator = (args) => ({
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
