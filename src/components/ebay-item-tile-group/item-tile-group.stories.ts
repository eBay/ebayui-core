import { buildExtensionTemplate } from "../../common/storybook/utils";
import Component from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
    title: "layout/ebay-item-tile-group",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {
            control: { type: "text" },
        },
        item: {
            name: "@item",
            table: {
                category: "@attribute tags",
            },
            description:
                "Item to be rendered inside the group. Arguments used are the same as for item-tile. See item-tile for more information.",
        },
        layout: {
            control: { type: "select" },
            options: ["gallery", "list"],
            description:
                "The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information.",
        },
        onAction: {
            action: "on-action",
            description:
                "Triggered on action pressed. Index of item pressed is passed as a parameter.",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
);
