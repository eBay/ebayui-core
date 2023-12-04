import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Component from "./index.marko";
import Readme from "./README.md";
import avatarTemplate from "./examples/avatar.marko";
import avatarCode from "./examples/avatar.marko?raw";
import buttonTemplate from "./examples/button.marko";
import buttonCode from "./examples/button.marko?raw";
import buttonSmallTemplate from "./examples/button-small.marko";
import buttonSmallCode from "./examples/button-small.marko?raw";
import textTemplate from "./examples/text.marko";
import textCode from "./examples/text.marko?raw";
import textMultilineTemplate from "./examples/text-multiline.marko";
import textMultilineCode from "./examples/text-multiline.marko?raw";
import textboxTemplate from "./examples/textbox.marko";
import textboxCode from "./examples/textbox.marko?raw";
import imageTemplate from "./examples/image.marko";
import imageCode from "./examples/image.marko?raw";
import tileTemplate from "./examples/tile.marko";
import tileCode from "./examples/tile.marko?raw";
import withContentTemplate from "./examples/withContent.marko";
import withContentCode from "./examples/withContent.marko?raw";
import compositeTemplate from "./examples/composite.marko";
import compositeCode from "./examples/composite.marko?raw";

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
        renderBody: {
            control: { type: "text" },
        },
        a11yText: {
            control: { type: "text" },
            description:
                "The localized accessibility text for the component. By default for english, Loading is used.",
            table: {
                defaultValue: {
                    summary: "Loading",
                },
            },
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
                "The Size of the component to render. Applicable for `ebay-skeleton-button` and `ebay-skeleton-text` only",
        },
        multiline: {
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
            description:
                "Boolean flag to make `ebay-skeleton-text` render more than one line",
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    style: "width: 220px",
    renderBody: `<div class="skeleton__textbox" />`,
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

export const ButtonSmall = (args) => ({
    input: args,
    component: buttonSmallTemplate,
});
ButtonSmall.args = {};
ButtonSmall.parameters = {
    docs: {
        source: {
            code: buttonSmallCode,
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

export const TextBox = (args) => ({
    input: args,
    component: textboxTemplate,
});
TextBox.args = {};
TextBox.parameters = {
    docs: {
        source: {
            code: textboxCode,
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

export const composite = (args) => ({
    input: args,
    component: compositeTemplate,
});
composite.args = {};
composite.parameters = {
    docs: {
        source: {
            code: compositeCode,
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
