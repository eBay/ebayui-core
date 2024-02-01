import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import code from "./examples/default.marko?raw";

const Template = (args) => ({
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
    },
};

export const Standard = Template.bind({});
Standard.args = {
    header: {
        renderBody: `Alert!`,
    },
    confirm: {
        renderBody: `OK`,
    },
    renderBody: `You must acknowledge this alert to continue.`,
};
Standard.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
