import {
    addRenderBodies,
} from "../../../.storybook/utils";
import { tagToString } from "../../../.storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import { defaultAriaLabel, messageDurationReducedMotionMultiplier, messageDurationStandard } from "./component";

const Template = (args) => ({
    input: addRenderBodies(args),
});

const exampleMessages = [
    { text: "Hang tight." },
    { text: "We're finishing your order." },
    { text: "Just a moment longer." },
];

export default {
    title: "progress/ebay-expressive-loader",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        ariaLabel: {
            control: {
                type: "text",
            },
            description: "Accessible label for the progress bar",
            table: {
                defaultValue: {
                    summary: defaultAriaLabel,
                },
            },
        },
        messages: {
            control: {
                type: "array",
            },
            description: `Short messages to display above the progress bar. Specify the <code>text</code> to display and, optionally, a custom <code>duration</code>. By default, messages display for ${messageDurationStandard}ms. When the user prefers reduced motion, the message will display for ${messageDurationReducedMotionMultiplier} times its duration.`,
            table: {
                defaultValue: {
                    summary: "[]",
                },
            },
        },
        size: {
            type: "enum",
            control: {
                type: "select",
            },
            options: ["large", "medium"],
            description: "Message text size",
            table: {
                defaultValue: {
                    summary: "large",
                },
            },
        },
        isLoading: {
            control: {
                type: "boolean",
            },
            description: "Whether the loader should be visible",
            table: {
                defaultValue: {
                    summary: "true",
                },
            },
        },
    }
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-expressive-loader", Default.args),
        },
    },
};


export const WithMessages = Template.bind({});
WithMessages.args = {
    messages: exampleMessages,
};

export const WithSingleMessage = Template.bind({});
WithSingleMessage.args = {
    messages: [{ text: "We're processing your order" }],
};

export const WithLongMessage = Template.bind({});
WithLongMessage.args = {
    messages: [
        { text: "Messages should be one line..." },
        { text: "Sometimes that's hard to guarantee, though.", duration: 2500 },
        { text: "That's okay!" },
    ],
};

export const CustomAccessibleName = Template.bind({});
CustomAccessibleName.args = {
    ariaLabel: "Cargando...",
    messages: [
        { text: "Espera..."},
        { text: "Estamos completando tu pedido." },
        { text: "Sólo un momento más." },
    ]
};

export const MediumSize = Template.bind({});
MediumSize.args = {
    size: "medium",
    messages: exampleMessages,
};
