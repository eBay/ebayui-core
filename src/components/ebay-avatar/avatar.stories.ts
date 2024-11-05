import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import avatar from "./index.marko";
import Readme from "./README.md";
import imageTemplate from "./examples/image.marko";
import imageTemplateCode from "./examples/image.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
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
                "pink",
            ],
            table: {
                defaultValue: {
                    summary: "teal",
                },
            },
            type: { category: "Options" },
            description:
                "The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash",
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
        username: {
            description:
                "The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic.",
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
    username: "Elizabeth",
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
        username: "Doggy",
    },
);

export const SignedOut = Template.bind({});
SignedOut.args = {
    a11yText: "Signed out",
};

SignedOut.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-avatar", SignedOut.args),
        },
    },
};
