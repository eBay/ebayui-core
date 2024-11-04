import { Story } from "@storybook/marko";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import code from "./examples/default.marko?raw";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        spread: null,
        ...(args as any).spread,
        renderBody: (args.renderBody
            ? (out: any) => {
                  out.html(args.renderBody);
              }
            : null) as any,
    },
});

export default {
    title: "dialogs/ebay-toast-dialog",
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
            description: "Whether toast is open.",
            table: {
                disable: true,
            },
        },
        a11yCloseText: {
            control: { type: "text" },
            description: " A11y text for close button.",
        },
        header: {
            name: "@header",
            description: "The header to be displayed in the toast dialog",
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
Default.args = {};
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
