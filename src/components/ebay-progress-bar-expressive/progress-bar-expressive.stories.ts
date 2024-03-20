import { addRenderBodies } from "../../../.storybook/utils";
import { tagToString } from "../../../.storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import {
    messageDurationReducedMotionMultiplier,
    messageDurationStandard,
} from "./component";

const Template = (args) => ({
    input: addRenderBodies(args),
});

const exampleMessages = [
    { text: "Hang tight." },
    { text: "We're finishing your order." },
    { text: "Just a moment longer." },
];

export default {
    title: "progress/ebay-progress-bar-expressive",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
        layout: "fullscreen",
    },
    argTypes: {
        a11yText: {
            control: {
                type: "text",
            },
            description: "Localized, accessible label for the progress bar",
            table: {
                defaultValue: {
                    summary: "Loading...",
                },
            },
        },
        messages: {
            control: {
                type: "array",
            },
            description: `Short messages to display above the progress bar. Specify the text to display and, optionally, a custom duration. By default, messages display for ${messageDurationStandard}ms. When the user prefers reduced motion, the message will display for ${messageDurationReducedMotionMultiplier} times its duration.`,
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
            description: "Whether the component should be visible",
            table: {
                defaultValue: {
                    summary: "true",
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
            code: tagToString("ebay-progress-bar-expressive", Default.args),
        },
    },
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-progress-bar-expressive", Default.args),
        },
    },
};

export const WithSingleMessage = Template.bind({});
WithSingleMessage.args = {
    messages: [{ text: "We're processing your order" }],
};

export const WithMessages = Template.bind({});
WithMessages.args = {
    messages: exampleMessages,
};
WithMessages.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-progress-bar-expressive",
                WithMessages.args,
            ),
        },
    },
};

export const WithLongMessage = Template.bind({});
WithLongMessage.args = {
    messages: [
        { text: "Messages should be one line..." },
        { text: "Sometimes that's hard to guarantee, though.", duration: 2500 },
        { text: "That's okay!" },
    ],
};
WithLongMessage.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-progress-bar-expressive",
                WithLongMessage.args,
            ),
        },
    },
};

export const WithCustomTiming = Template.bind({});
WithCustomTiming.args = {
    messages: [
        { text: "Display for 2 seconds", duration: 2000 },
        { text: "Display for 3 seconds", duration: 3000 },
        { text: "Display for 4 seconds", duration: 4000 },
    ],
};
WithCustomTiming.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-progress-bar-expressive",
                WithCustomTiming.args,
            ),
        },
    },
};

export const Localized = Template.bind({});
Localized.args = {
    a11yText: "Cargando...",
    messages: [
        { text: "Espera..." },
        { text: "Estamos procesando tu pedido", duration: 2000 },
        { text: "Sólo un momento más" },
    ],
};
Localized.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-progress-bar-expressive", Localized.args),
        },
    },
};

export const MediumSize = Template.bind({});
MediumSize.args = {
    size: "medium",
    messages: exampleMessages,
};
MediumSize.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-progress-bar-expressive", MediumSize.args),
        },
    },
};
