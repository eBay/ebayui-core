import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component";
import InFieldTemplate from "./examples/in-field.marko";
import InFieldCode from "./examples/in-field.marko?raw";
import CustomTextTemplate from "./examples/custom-text.marko";
import CustomTextCode from "./examples/custom-text.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-character-count",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {
            description: "If set, will override the default body content",
        },
        value: {
            type: "string|number",
            control: { type: "text" },
            description:
                "String to count characters from, or a number representing the current character count",
        },
        max: {
            type: { name: "number", required: true },
            control: { type: "number" },
            description:
                "Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`.",
        },
        clippedText: {
            type: "string",
            control: { type: "text" },
            description:
                "With default body content, clipped text should be provided after the character count for screen readers to announce.",
        },
        onChange: {
            action: "on-change",
            description:
                "Triggered when the character count changes. Debounced by 500ms.",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ count, inputAriaLive }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    value: "Hello world",
    clippedText: "characters remaining",
    max: 120,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-character-count", Default.args),
        },
    },
};

export const InField = buildExtensionTemplate(InFieldTemplate, InFieldCode);

export const CustomText = buildExtensionTemplate(
    CustomTextTemplate,
    CustomTextCode,
);
