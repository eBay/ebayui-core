import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import button from "./index.marko";
import Readme from "./README.md";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
    // input: {
    //     ...args,
    //     spread: null,
    //     ...args.spread,
    //     renderBody(out) {
    //         out.html(args.renderBody);
    //     },
    // },
});
// const Template = args =({ input: withRenderBody(args) })

export default {
    title: "buttons/ebay-split-button",
    component: button,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        renderBody: "Button",
        href: {
            description: "url for link behaviour (switches to anchor tag)",
            control: { type: "text" },
        },
        size: {
            options: ["large", "regular"],

            description: "",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        priority: {
            options: ["primary", "secondary", "tertiary", "none"],
            description: "",

            table: {
                defaultValue: {
                    summary: "secondary",
                },
            },
            type: { category: "Options" },
        },
        bodyState: {
            description:
                "when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none",
            options: ["none", "loading", "reset"],
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        a11yButtonLoadingText: {
            description: "aria label for button when bodyState === loading",
            table: {
                defaultValue: "",
            },
            control: { type: "text" },
            type: { category: "Options" },
        },

        a11yMenuText: {
            description: "aria label for menu button part",
            table: {
                defaultValue: "",
            },
            control: { type: "text" },
            type: { category: "Options" },
        },
        type: {
            control: { type: "select" },
            options: ["none", "radio", "checkbox"],
            description: 'Can be "radio" / "checkbox"',
        },
        disabled: {
            description: "",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        partiallyDisabled: {
            description:
                "programmatically disabled, but remains keyboard focusable",
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: "false",
                },
                category: "Toggles",
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
        onCollapse: {
            action: "on-collapse",
            description: "Triggered on menu collapse",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onExpand: {
            action: "on-expand",
            description: "Triggered on menu expand",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onChange: {
            action: "on-change",
            description:
                "Triggered on item checked change, (checkbox/radio type only)",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }",
                },
            },
        },

        onSelect: {
            action: "on-select",
            description: "Triggered on item clicked (non radio/checkbox)",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, checked }",
                },
            },
        },

        spread: {
            control: {
                type: "object",
            },
            description: "Additional attributes being passed to component",
            table: {
                category: "Other",
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: "Button" as any,
    a11yMenuText: "Menu",
    item: [
        {
            renderBody: `item 1 that has very long text`,
        },
        {
            renderBody: `item 2`,
        },
        {
            renderBody: `item 3`,
        },
    ] as any,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-split-button", Standard.args),
        },
    },
};
