import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./examples/all.marko";
import type { Input } from "./component-browser";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out: any) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: "graphics & icons/ebay-icon",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        noSkinClasses: {
            control: { type: "boolean" },
            description:
                "Used for special cases where `icon` classes from Skin should not be applied",
        },
        a11yText: {
            control: { type: "text" },
            description:
                "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    a11yText: "icon description here",
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-icon", Default.args),
        },
    },
};
