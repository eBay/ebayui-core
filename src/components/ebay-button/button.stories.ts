import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import button, { type Input } from "./index.marko";
import Readme from "./README.md";
import ExpandButtonTemplate from "./examples/expand-button.marko";
import ExpandButtonTemplateCode from "./examples/expand-button.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});
// const Template = args =({ input: withRenderBody(args) })

export default {
    title: "buttons/ebay-button",
    component: button,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        renderBody: {},
        href: {
            description: "url for link behaviour (switches to anchor tag)",
        },
        size: {
            options: ["large", "regular", "small"],
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
        fluid: {
            description: "button fills 100% width of container",
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        borderless: {
            description: "Shows button without border.",
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        bodyState: {
            description:
                "when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none",
            options: ["none", "loading", "reset", "expand"],
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: { category: "Options" },
        },
        a11yText: {
            description: "aria label for button when bodyState === loading",
            table: {
                defaultValue: "",
            },
            control: { type: "text" },
            type: { category: "Options" },
        },
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
            options: ["standard", "destructive", "form"],
            description:
                "transforms to a specific variant that styles in conjunction with priority",
            table: {
                defaultValue: {
                    summary: "standard",
                },
            },
            type: { category: "Options" },
        },
        partiallyDisabled: {
            description:
                "programmatically disabled, but remains keyboard focusable",
            table: {
                defaultValue: {
                    summary: "false",
                },
                category: "Toggles",
            },
        },
        transparent: {
            description:
                "transparent background color (overrides `priority` setting)",
            table: {
                defaultValue: {
                    summary: "false",
                },
                category: "Toggles",
            },
        },
        fixedHeight: {
            description: "fixes the height based on `size`",
            table: {
                defaultValue: {
                    summary: "false",
                },
                category: "Toggles",
            },
        },
        truncate: {
            description:
                "used in conjunction with `fixedHeight`; truncates text to single line with ellipsis when text overflows",
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
    renderBody: "Button",
    href: "",
    fluid: false,
    borderless: false,
    size: null,
    disabled: false,
    priority: null,
    partiallyDisabled: false,
    transparent: false,
    fixedHeight: false,
    truncate: false,
} as any;

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-button", Standard.args),
        },
    },
};

export const ExpandButton = buildExtensionTemplate(
    ExpandButtonTemplate,
    ExpandButtonTemplateCode,
);
