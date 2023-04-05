import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../../.storybook/utils";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import code from "./examples/default.marko?raw";
import ScrollingTemplate from "./examples/scrolling.marko";
import ScrollingTemplateCode from "./examples/scrolling.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "dialogs/ebay-lightbox-dialog",
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
        },
        focus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog opens (defaults to close button).",
        },
        closeFocus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened",
        },
        a11yCloseText: {
            control: { type: "text" },
            description: "A11y text for close button and mask.",
        },
        header: {
            name: "@header",
            control: { type: "object" },
            table: {
                category: "@attribute tags",
            },
        },
        footer: {
            name: "@footer",
            control: { type: "object" },

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
    },
};

export const Default = Template.bind({});
Default.args = {
    header: {
        renderBody: `Heading Text`,
    },
    footer: {
        renderBody: '',
    },
};

Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};

export const Scrolling = buildExtensionTemplate(
    ScrollingTemplate,
    ScrollingTemplateCode
);
