import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import component from "./index.marko";
import Readme from "./README.md";
import type { Input } from "./component-browser";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        renderBody: function (out: any) {
            out.html(args.renderBody);
        } as any,
    },
});

export default {
    title: "buttons/ebay-fake-link",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        renderBody: {},
        disabled: {
            description: "",
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        variant: {
            description:
                "Should only be standalone when it is clear contextually that this is a link, regardless of styles",
            options: ["inline", "standalone"],
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "inline",
                },
            },
        },
        onClick: {
            action: "on-click",
            description: "Triggered on click",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onEscape: {
            action: "on-escape",
            description: "Triggered on escape key",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onBlur: {
            action: "on-blur",
            description: "Triggered on blur",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: "Fake-Link" as any,
    disabled: false,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-fake-link", Standard.args),
        },
    },
};
