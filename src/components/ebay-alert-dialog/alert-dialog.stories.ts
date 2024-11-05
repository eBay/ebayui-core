import { Story } from "@storybook/marko";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import type { Input } from "./index.marko";
import code from "./examples/default.marko?raw";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "dialogs/ebay-alert-dialog",
    component: Component,
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
        confirm: {
            name: "@confirm",
            table: {
                category: "@attribute tags",
            },
            description: "Render body will be text for OK button",
        },
        header: {
            name: "@header",
            table: {
                category: "@attribute tags",
            },
        },
        onOpen: {
            action: "on-open",
            description: "Triggered on dialog open",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onConfirm: {
            action: "on-confirm",
            description: "Triggered on dialog confirm button click",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onClose: {
            action: "on-close",
            description: "Triggered when dialog is closed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    header: {
        renderBody: `Alert!`,
    },
    confirm: {
        renderBody: `OK`,
    },
    renderBody: `You must acknowledge this alert to continue.`,
} as any;
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
