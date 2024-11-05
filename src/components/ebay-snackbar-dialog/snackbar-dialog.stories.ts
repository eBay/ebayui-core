import Readme from "./README.md";
import component from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import defaultTemplate from "./examples/default.marko";
import defaultTemplateCode from "./examples/default.marko?raw";
import withActionTemplate from "./examples/action.marko";
import withActionTemplateCode from "./examples/action.marko?raw";

export default {
    title: "dialogs/ebay-snackbar-dialog",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        open: {
            type: "boolean",
            control: { type: "boolean" },
            table: {
                disable: true,
            },
        },
        layout: {
            type: "enum",
            control: { type: "radio" },
            options: ["row", "column"],
        },
        action: {
            name: "@action",
            description: "If present, shows an action button on snackbar",
            table: {
                category: "@attribute tags",
            },
        },
        onOpen: {
            action: "on-open",
            description: "Triggered on dialog opened",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onClose: {
            action: "on-close",
            description: "Triggered on dialog closed.",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
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
    defaultTemplate,
    defaultTemplateCode,
);

export const WithAction = buildExtensionTemplate(
    withActionTemplate,
    withActionTemplateCode,
);
