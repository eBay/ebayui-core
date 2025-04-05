import { buildExtensionTemplate } from "../../common/storybook/utils";
import Component from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
    title: "layout/ebay-item-tile",
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
        layout: {
            control: { type: "select" },
            options: ["gallery", "list"],
            description:
                "The layout of the item-tile. The default is gallery. The list layout takes more horizontal space and is better for displaying more information.",
        },
        href: {
            control: { type: "text" },
            description:
                "The URL to navigate to when the item-tile is clicked. If not provided, the item will not be clickable.",
        },
        file: {
            type: "object",
            description:
                "File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview. Used to show the image in the header.",
        },
        action: {
            name: "@action",
            description:
                "The icon to be used for the action button in the header. An aria-label is also required for accessibility. If not provided, the action button will not be rendered.",
            table: {
                category: "@attribute tags",
            },
        },
        title: {
            name: "@title",
            description: "The title element of the item-tile",
            table: {
                category: "@attribute tags",
            },
        },
        subtitle: {
            name: "@subtitle",
            description: "The subtitle element of the item-tile",
            table: {
                category: "@attribute tags",
            },
        },
        supertitle: {
            name: "@supertitle",
            description:
                "The supertitle element of the item-tile. This is generally used for signals rendered above the title.",
            table: {
                category: "@attribute tags",
            },
        },
        description: {
            name: "@description",
            description:
                "The description element of the item-tile. This is to render a description below the title in tertiary element. Defaults to <p> tag (use \"as\" attribute to change).",
            table: {
                category: "@attribute tags",
            },
        },
        onAction: {
            action: "on-action",
            description: "Triggered on action pressed",
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
