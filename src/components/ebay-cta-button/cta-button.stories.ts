import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Cta, { type Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        renderBody: function (out: any) {
            out.html(args.renderBody);
        } as any,
    },
});

export default {
    title: "buttons/ebay-cta-button",
    component: Cta,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {},
        size: {
            type: "options",
            description: 'Can be "large"',
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
            options: ["default", "large"],
        },
        href: {
            description: "link target",
            table: {
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: "CTA button",
    href: "http://www.ebay.com",
    size: "regular",
} as any;

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-cta-button", Standard.args),
        },
    },
};
