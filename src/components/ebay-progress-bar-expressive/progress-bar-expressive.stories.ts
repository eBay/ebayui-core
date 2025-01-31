import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import {
    messageDurationReducedMotionMultiplier,
    messageDurationStandard,
} from "./component";
import CustomTimingTemplate from "./examples/custom-timing.marko";
import CustomTimingTemplateCode from "./examples/custom-timing.marko?raw";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import LocalizedTemplate from "./examples/localized.marko";
import LocalizedTemplateCode from "./examples/localized.marko?raw";
import MediumTextTemplate from "./examples/medium-text.marko";
import MediumTextTemplateCode from "./examples/medium-text.marko?raw";
import MessagesTemplate from "./examples/messages.marko";
import MessagesTemplateCode from "./examples/messages.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

const exampleMessages = [
    { renderBody: "Hang tight" },
    { renderBody: "We're processing your order" },
    { renderBody: "Just a moment longer" },
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
        message: {
            control: {
                type: "array",
            },
            description: `Short messages to display above the progress bar. Specify the renderBody and, optionally, a custom duration. By default, messages display for ${messageDurationStandard}ms. When the user prefers reduced motion, each message will display for ${messageDurationReducedMotionMultiplier} times its duration.`,
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
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
);

export const WithSingleMessage = Template.bind({});
WithSingleMessage.args = {
    message: [{ renderBody: "We're processing your order" }] as any,
};
WithSingleMessage.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-progress-bar-expressive",
                WithSingleMessage.args,
            ),
        },
    },
};

export const WithMessages = buildExtensionTemplate(
    MessagesTemplate,
    MessagesTemplateCode,
);
WithMessages.args = {
    message: exampleMessages,
};

export const WithLongMessage = Template.bind({});
WithLongMessage.args = {
    message: [
        { renderBody: "Messages should be one line..." },
        {
            renderBody: "Sometimes that's hard to guarantee, though.",
            duration: 2500,
        },
        { renderBody: "That's okay!" },
    ] as any,
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

export const WithCustomTiming = buildExtensionTemplate(
    CustomTimingTemplate,
    CustomTimingTemplateCode,
);
WithCustomTiming.args = {
    message: [
        { renderBody: "Display for 2 seconds", duration: 2000 },
        { renderBody: "Display for 3 seconds", duration: 3000 },
        { renderBody: "Display for 4 seconds", duration: 4000 },
    ],
};

export const Localized = buildExtensionTemplate(
    LocalizedTemplate,
    LocalizedTemplateCode,
);
Localized.args = {
    a11yText: "Cargando...",
    message: [
        { renderBody: "Espera..." },
        { renderBody: "Estamos procesando tu pedido", duration: 2000 },
        { renderBody: "Sólo un momento más" },
    ],
};

export const MediumSize = buildExtensionTemplate(
    MediumTextTemplate,
    MediumTextTemplateCode,
);
MediumSize.args = {
    size: "medium",
    message: exampleMessages,
};
