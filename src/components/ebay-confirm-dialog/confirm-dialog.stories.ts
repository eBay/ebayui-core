import { Story } from "@storybook/marko";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Confirm from "./examples/default.marko";
import code from "./examples/default.marko?raw";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
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
        confirm: {
            name: "@confirm",
            table: {
                category: "@attribute tags",
            },
            description: "Render body will be text for confirm button",
        },
        reject: {
            name: "@reject",
            table: {
                category: "@attribute tags",
            },
            description: "Render body will be text for reject button",
        },
        header: {
            name: "@header",
            table: {
                category: "@attribute tags",
            },
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
        onReject: {
            action: "on-reject",
            description: "Triggered when reject button is clicked",
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
        renderBody: `Delete Address?`,
    },
    confirm: {
        renderBody: `Delete`,
    },
    reject: {
        renderBody: `Cancel`,
    },
    renderBody: `You will permanently lose this address.`,
} as any;
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
