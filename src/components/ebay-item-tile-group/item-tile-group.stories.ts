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
        columns: {
            control: { type: "object" },
            description:
                "Number of columns per screen size. Object with keys: min, xs, sm, md, lg, xl, xl2, xl3, xl4",

            table: {
                defaultValue: {
                    summary:
                        "{ min: 1, xs: 2, sm: 3, md: 4, lg: 6, xl: 8, xl2: 10, xl3: 12, xl4: 14 }",
                },
            },
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
