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
    title: "progress/ebay-progress-spinner",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            options: ["small", "large"],
            control: { type: "select" },
            description:
                'size of spinner - can be "small", "large". default is small ',
        },
        ariaLabel: {
            control: { type: "text" },
            description: "Description for accessibility",
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    ariaLabel: "loading",
};
Loading.parameters = {
    docs: {
        source: {
            code: `<ebay-progress-spinner aria-label="Busy"/>`,
        },
    },
};

Loading.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-progress-spinner", Loading.args),
        },
    },
};
