import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";

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
    title: "graphics & icons/ebay-signal",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        status: {
            type: "enum",
            control: { type: "select" },
            options: ["trustworthy", "recent", "time-sensitive", "neutral"],
        },
    },
};
export const Standard = Template.bind({});
Standard.args = {
    renderBody: `Signal Text` as any,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-signal", Standard.args),
        },
    },
};
