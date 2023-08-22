import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import Confirm from "./examples/default.marko";
import code from "./examples/default.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "dialogs/ebay-confirm-dialog",
    component: Confirm,
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
            description: "Whether dialog is open.",
            table: {
                disable: true,
            },
        },
        closeFocus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened",
        },
        confirmText: {
            control: { type: "text" },
            description: "Text for confirm button",
        },
        rejectText: {
            control: { type: "text" },
            description: "Text for reject button",
        },
        confirmCtaVariant: {
            options: ["none", "destructive"],
            description: "The alternative main CTA button variant to use.",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        onOpen: {
            action: "on-open",
            description: "Triggered on dialog open",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onConfirm: {
            action: "on-confirm",
            description: "Triggered on dialog confirm button click",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onReject: {
            action: "on-reject",
            description: "Triggered when dialog is closed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    confirmText: "Okay",
    rejectText: "Cancel",
};
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
