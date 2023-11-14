import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Component from "./index.marko";
import Readme from "./README.md";
import avatarTemplate from "./examples/avatar.marko";
import avatarCode from "./examples/avatar.marko?raw";
import buttonTemplate from "./examples/button.marko";
import buttonCode from "./examples/button.marko?raw";
import textTemplate from "./examples/text.marko";
import textCode from "./examples/text.marko?raw";
import textMultilineTemplate from "./examples/text-multiline.marko";
import textMultilineCode from "./examples/text-multiline.marko?raw";
import formTemplate from "./examples/form.marko";
import formCode from "./examples/form.marko?raw";
import imageTemplate from "./examples/image.marko";
import imageCode from "./examples/image.marko?raw";
import tileTemplate from "./examples/tile.marko";
import tileCode from "./examples/tile.marko?raw";
import withContentTemplate from "./examples/withContent.marko";
import withContentCode from "./examples/withContent.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-skeleton",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        type: {
            control: { type: "select" },
            options: ["avatar", "button", "text", "form", "image", "tile"],
            description: "Type of the component to render.",
        },
        size: {
            control: { type: "select" },
            options: ["small", "large"],
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
            description:
                "Size of the component to render. Applicable for type `button`, `text` and `tile` only",
        },
        multiline: {
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
            description:
                "If the text should be multiline. Applicable for type `text` or `tile` only",
        },
        a11yText: {
            control: { type: "text" },
            description: "The accessibility text for the component",
            table: {
                defaultValue: {
                    summary: "Loading",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    style: "width: 220px",
    type: "button",
    size: "small",
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-skeleton", Default.args),
        },
    },
};

export const Avatar = (args) => ({
    input: args,
    component: avatarTemplate,
});
Avatar.args = {};
Avatar.parameters = {
    docs: {
        source: {
            code: avatarCode,
        },
    },
};

export const Button = (args) => ({
    input: args,
    component: buttonTemplate,
});
Button.args = {};
Button.parameters = {
    docs: {
        source: {
            code: buttonCode,
        },
    },
};

export const Text = (args) => ({
    input: args,
    component: textTemplate,
});
Text.args = {};
Text.parameters = {
    docs: {
        source: {
            code: textCode,
        },
    },
};

export const TextMultiLine = (args) => ({
    input: args,
    component: textMultilineTemplate,
});
TextMultiLine.args = {};
TextMultiLine.parameters = {
    docs: {
        source: {
            code: textMultilineCode,
        },
    },
};

export const Form = (args) => ({
    input: args,
    component: formTemplate,
});
Form.args = {};
Form.parameters = {
    docs: {
        source: {
            code: formCode,
        },
    },
};

export const Image = (args) => ({
    input: args,
    component: imageTemplate,
});
Image.args = {};
Image.parameters = {
    docs: {
        source: {
            code: imageCode,
        },
    },
};

export const Tile = (args) => ({
    input: args,
    component: tileTemplate,
});
Tile.args = {};
Tile.parameters = {
    docs: {
        source: {
            code: tileCode,
        },
    },
};

export const withContent = (args) => ({
    input: args,
    component: withContentTemplate,
});
withContent.args = {};
withContent.parameters = {
    docs: {
        source: {
            code: withContentCode,
        },
    },
};
