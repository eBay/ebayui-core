import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import fixed from "./examples/all.marko";
import code from "./examples/all.marko?raw";
import component, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        renderBody: (args.renderBody
            ? (out: any) => {
                  out.html(args.renderBody);
              }
            : null) as any,
    },
});

export default {
    title: "graphics & icons/ebay-star-rating",
    component: component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        value: {
            control: { type: "select" },
            options: ["0", "1", "1-5", "2", "2-5", "3", "3-5", "4", "4-5", "5"],
            description:
                "Only for <ebay-star-rating/>. 1 - 5, depending on how many starts are selected. If 0 or null defaults to no stars selected. Can use 2-5 for 2 and a half stars",
        },
        a11yText: {
            description: "The aria label for the outer container.",
        },
    },
};

export const DynamicStars = Template.bind({});
DynamicStars.args = {
    value: "3-5",
};
DynamicStars.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-star-rating", DynamicStars.args),
        },
    },
};

export const FixedStars: Story<Input> = (args) => ({
    input: args,
    component: fixed,
});
FixedStars.args = {};
FixedStars.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
