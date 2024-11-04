import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import OpenOnRenderTemplate from "./examples/open-on-render.marko";
import OpenOnRenderTemplateCode from "./examples/open-on-render.marko?raw";

export default {
    title: "buttons/ebay-infotip",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        heading: {
            name: "@heading",
            table: {
                category: "@attribute tags",
            },
        },
        content: {
            name: "@content",
            table: {
                category: "@attribute tags",
            },
        },
        icon: {
            name: "@icon",
            table: {
                category: "@attribute tags",
            },
        },
        variant: {
            control: { type: "select" },
            options: ["default", "modal"],
            description:
                "Either modal or default. If modal will show the mobile version of infotip",
        },
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
            description: "places infotip position",
        },
        offset: {
            control: { type: "number" },
            description: "offsets infotip position",
            table: {
                defaultValue: { summary: "6" },
            },
        },
        noFlip: {
            control: { type: "boolean" },
            description: "disables flipping infotip when its offscreen",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        noShift: {
            control: { type: "boolean" },
            description: "disables shifting infotip when its offscreen",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        notInline: {
            control: { type: "boolean" },
            description:
                "disables moving infotip to be inline with content when it is rendered",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        disabled: {
            control: { type: "boolean" },
            description: "adds a `disabled` attribute to the button",
        },
        a11yCloseButtonText: {
            control: { type: "text" },
            description: "A11y text for close button",
        },
        ariaLabel: {
            control: { type: "text" },
            description:
                'A descriptive label of what the infotip button represents (e.g. "Important information")',
        },
        open: {
            control: { type: "boolean" },
            description:
                "allows dev to specify whether infotip is open or closed",
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

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
    {
        a11yCloseButtonText: "Dismiss infotip",
        ariaLabel: "Important information",
    },
);

export const OpenOnRender = buildExtensionTemplate(
    OpenOnRenderTemplate,
    OpenOnRenderTemplateCode,
    {
        a11yCloseButtonText: "Dismiss infotip",
        ariaLabel: "Important information",
        open: true,
    },
);
