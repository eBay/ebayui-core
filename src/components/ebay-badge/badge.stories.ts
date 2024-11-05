import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import badge, { type Input } from "./index.marko";
import Readme from "./README.md";

const Template: Story<Input> = (args) => ({ input: args });

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
