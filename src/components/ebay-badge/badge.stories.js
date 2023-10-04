import { tagToString } from "../../../.storybook/storybook-code-source";
import badge from "./index.marko";
import Readme from "./README.md";

const Template = (args) => ({ input: args });

export default {
    title: "graphics & icons/ebay-badge",
    component: badge,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        number: {
            type: "number",
            description: "Used as the number to be placed in the badge",
        },
        max: {
            type: "number",
            table: {
                defaultValue: {
                    summary: 99,
                },
            },
            description:
                'Maximum displayed number on the badge, after which a `+` will be concatenated (e.g. "99+")',
        },
        "aria-label": {
            description:
                'A descriptive label of what the badge represents (e.g. "5 unread items")',
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    number: 5,
    "aria-label": "5 unread items",
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-badge", Standard.args),
        },
    },
};
