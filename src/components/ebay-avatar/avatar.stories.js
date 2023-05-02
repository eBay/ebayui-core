import { tagToString } from "../../../.storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../../.storybook/utils";
import avatar from "./index.marko";
import Readme from "./README.md";
import imageTemplate from "./examples/image.marko";
import imageTemplateCode from "./examples/image.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "graphics & icons/ebay-avatar",
    component: avatar,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        color: {
            options: [
                "teal",
                "light-teal",
                "green",
                "lime",
                "yellow",
                "orange",
                "magenta",
            ],
            table: {
                defaultValue: {
                    summary: "teal",
                },
            },
            type: { category: "Options" },
            description:
                "The color to color the background. This can be only used in the non icon/image case",
        },
        size: {
            options: ["32", "40", "48", "56", "64", "96", "128"],
            table: {
                defaultValue: {
                    summary: "48",
                },
            },
            type: { category: "Options" },

            description:
                "The pixel size of the avatar. Can only be specific sizes",
        },
        variant: {
            options: ["default", "signedout"],
            table: {
                defaultValue: {
                    summary: "standard",
                },
            },
            type: { category: "Options" },
            description: "",
        },
        a11yText: {
            control: { type: "text" },
            description:
                'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"',
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    a11yText: "Signed in - as Elizabeth",
    renderBody: "E",
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-avatar", Default.args),
        },
    },
};

export const WithImage = buildExtensionTemplate(
    imageTemplate,
    imageTemplateCode,
    {
        a11yText: "Signed in - as Doggy",
    }
);

export const SignedOut = Template.bind({});
SignedOut.args = {
    a11yText: "Signed out",
    variant: "signedout",
};

SignedOut.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-avatar", SignedOut.args),
        },
    },
};
