import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import buttonComponent from "./examples/icon-button-host.marko";
import code from "./examples/icon-button-host.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "notices & tips/ebay-tooltip",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        placement: {
            options: [
                "top",
                "right",
                "bottom",
                "left",
                "top-start",
                "right-start",
                "bottom-start",
                "left-start",
                "top-end",
                "right-end",
                "bottom-end",
                "left-end",
            ],
            control: { type: "select" },
            description: "places tooltip position",
        },
        offset: {
            control: { type: "number" },
            description: "offsets tooltip position",
        },
        noHover: {
            control: { type: "boolean" },
            description:
                "disable hover (and only use focus) to open the tooltip",
        },
        host: {
            name: "@host",
            description: "The body which will be wrapped as the tooltip's host",
            table: {
                category: "@attribute tags",
            },
        },
        content: {
            name: "@content",
            description: "The content to be displayed in the tooltip",
            table: {
                category: "@attribute tags",
            },
        },
        open: {
            control: { type: "boolean" },
            description:
                "allows dev to specify whether tooltip is open or closed",
        },
        noFlip: {
            control: { type: "boolean" },
            description: "disables flipping tooltip when its offscreen",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        noShift: {
            control: { type: "boolean" },
            description: "disables shifting tooltip when its offscreen",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        notInline: {
            control: { type: "boolean" },
            description:
                "disables moving tooltip to be inline with content when it is rendered",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        onCollapse: {
            action: "on-collapse",
            description: "Triggered on menu collapse",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onExpand: {
            action: "on-expand",
            description: "Triggered on menu expand",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    host: {
        renderBody: `<a href="https://www.ebay.com" class="tooltip__host">View options</a>`,
    },
    content: {
        renderBody: `<p>Use Access Key 'S' to display settings.</p>`,
    },
} as any;

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-tooltip", Standard.args),
        },
    },
};

export const buttonHost: Story<Input> = (args, context) => ({
    // eslint-disable-next-line new-cap
    input: Template(args, context).input,
    component: buttonComponent,
});
buttonHost.parameters = { controls: { exclude: /./ } };

buttonHost.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
