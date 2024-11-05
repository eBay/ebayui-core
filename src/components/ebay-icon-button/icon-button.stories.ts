import { Story } from "@storybook/marko";
import { addRenderBodies } from "../../common/storybook/utils";
import component from "./examples/icon-button.marko";
import code from "./examples/icon-button.marko?raw";
import Readme from "./README.md";
import { Input } from "./component-browser";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});
// const Template = args =({ input: withRenderBody(args) })

export default {
    title: "buttons/ebay-icon-button",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        href: {
            description: "url for link behaviour (switches to anchor tag)",
        },
        disabled: {
            description: "",
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
            control: { type: "boolean" },
        },
        size: {
            description: "alternative size for the icon button",
            options: ["small", "regular", "large"],
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
        },
        priority: {
            options: ["primary", "secondary", "tertiary", "none"],
            description:
                "Priority of the button. Toggle the color and border of the button",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        ariaLabel: {
            control: { type: "text" },
            name: "aria-label",
            description:
                "A descriptive label of what the icon button represents",
        },
        partiallyDisabled: {
            name: "partially-disabled",
            description:
                "programmatically disabled, but remains keyboard focusable",
            table: {
                defaultValue: {
                    summary: "false",
                },
                category: "Toggles",
            },
            control: { type: "boolean" },
        },
        badgeNumber: {
            name: "badge-number",
            description: "number to show in badge",
            table: {
                category: "Badge (only with variant=icon)",
            },
            type: "number",
        },
        badgeAriaLabel: {
            name: "badge-aria-label",
            description: "`aria-label` for badge",
            table: {
                category: "Badge",
            },
        },
        transparent: {
            description: "is icon button is transparent or not",
            table: {
                defaultValue: {
                    summary: "false",
                },
                category: "Toggles",
            },
            control: { type: "boolean" },
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

export const Default = Template.bind({});
Default.args = {
    href: "",
    disabled: false,
    partiallyDisabled: false,
    badgeNumber: 0,
    ariaLabel: "menu",
};
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
