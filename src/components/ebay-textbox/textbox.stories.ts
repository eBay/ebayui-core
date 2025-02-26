import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import WithLabelTemplate from "./examples/external-label.marko";
import DisabledTemplate from "./examples/external-label-disabled.marko";
import FloatingLabelTemplate from "./examples/floating-label.marko";
import FloatingLabelAutocompleteTemplate from "./examples/floating-label-autocomplete.marko";
import WithBothIcons from "./examples/both-icons.marko";
import WithPostfixIcon from "./examples/postfix-icon.marko";
import WithPrefixIcon from "./examples/prefix-icon.marko";
import FullyDecoratedTemplate from "./examples/fully-decorated.marko";
import WithLabelCode from "./examples/external-label.marko?raw";
import DisabledCode from "./examples/external-label-disabled.marko?raw";
import FloatingLabelCode from "./examples/floating-label.marko?raw";
import FloatingLabelAutocompleteCode from "./examples/floating-label-autocomplete.marko?raw";
import WithBothIconsCode from "./examples/both-icons.marko?raw";
import WithPostfixIconCode from "./examples/postfix-icon.marko?raw";
import WithPrefixIconCode from "./examples/prefix-icon.marko?raw";
import FullyDecoratedCode from "./examples/fully-decorated.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component-browser";

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
    title: "form input/ebay-textbox",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        fluid: {
            type: "boolean",
            control: { type: "boolean" },
        },
        inputSize: {
            options: ["regular", "large"],
            type: { category: "Options" },
            description:
                'either "regular" or "large". If large, then renders larger sized textbox',
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
        },
        multiline: {
            type: "boolean",
            control: { type: "boolean" },
            description: "renders a multi-line texbox if true",
        },
        invalid: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "indicates a field-level error with red border if true",
        },
        floatingLabel: {
            description: "If set then shows this text as the floating label.",
            control: { type: "text" },
            table: {
                category: "floating-label",
                defaultValue: {
                    summary: "",
                },
            },
        },
        opaqueLabel: {
            description:
                "Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",
            control: { type: "boolean" },
            table: {
                category: "floating-label",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        buttonAriaLabel: {
            control: { type: "text" },
            description:
                "aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`",
        },
        prefixIcon: {
            name: "@prefix-icon",
            description:
                "An `<ebay-{name}-icon>` to show as the prefix icon. Cannot be used with floating-label.",
            table: {
                category: "@attribute tags",
            },
        },
        postfixIcon: {
            name: "@postfix-icon",
            description:
                "An `<ebay-{name}-icon>` to show as the postfix icon. Cannot be used with floating-label.",
            table: {
                category: "@attribute tags",
            },
        },
        prefixText: {
            name: "@prefix-text",
            description:
                "Text to show before the input. Can be used alongside prefix-icon.",
            table: {
                category: "@attribute tags",
            },
        },
        postfixText: {
            name: "@postfix-text",
            description:
                "Text to show after the input. Can be used alongside postfix-icon.",
            table: {
                category: "@attribute tags",
            },
        },
        onChange: {
            action: "on-change",
            description: "Triggered when focus leaves and value is changedf",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "onInput-change": {
            action: "on-input-change",
            description: "Triggered when the value of the input is changed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onBlur: {
            action: "on-blur",
            description: "Triggered on blur",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onKeypress: {
            action: "on-keypress",
            description: "Triggered on keypress",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onKeyup: {
            action: "on-keyup",
            description: "Triggered on keup",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },

        onKeydown: {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onInvalid: {
            action: "on-invalid",
            description: "Triggered when value is invalid",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        "onFloating-label-init": {
            action: "on-floating-label-init",
            description: "Triggered when floating label is initialized",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        "onButton-click": {
            action: "on-button-click",
            description:
                "Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
    },
};

export const WithLabel: Story<Input> = (args) => ({
    input: args,
    component: WithLabelTemplate,
});
WithLabel.args = {};
WithLabel.parameters = {
    docs: {
        source: {
            code: WithLabelCode,
        },
    },
};

export const Disabled: Story<Input> = (args) => ({
    input: args,
    component: DisabledTemplate,
});
Disabled.args = {};
Disabled.parameters = {
    docs: {
        source: {
            code: DisabledCode,
        },
    },
};

export const FloatingLabel: Story<Input> = (args) => ({
    input: args,
    component: FloatingLabelTemplate,
});
FloatingLabel.args = {};
FloatingLabel.parameters = {
    docs: {
        source: {
            code: FloatingLabelCode,
        },
    },
};

export const FloatingLabelAutocomplete: Story<Input> = (args) => ({
    input: args,
    component: FloatingLabelAutocompleteTemplate,
});
FloatingLabelAutocomplete.args = {};
FloatingLabelAutocomplete.parameters = {
    docs: {
        source: {
            code: FloatingLabelAutocompleteCode,
        },
    },
};

export const Isolated = Template.bind({});
Isolated.args = {};
Isolated.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-textbox", Isolated.args),
        },
    },
};

export const PrefixIcon: Story<Input> = (args) => ({
    input: args,
    component: WithPrefixIcon,
});
PrefixIcon.args = {};
PrefixIcon.parameters = {
    docs: {
        source: {
            code: WithPrefixIconCode,
        },
    },
};

export const PostfixIcon: Story<Input> = (args) => ({
    input: args,
    component: WithPostfixIcon,
});
PostfixIcon.args = {};
PostfixIcon.parameters = {
    docs: {
        source: {
            code: WithPostfixIconCode,
        },
    },
};

export const BothIcons: Story<Input> = (args) => ({
    input: args,
    component: WithBothIcons,
});
BothIcons.args = {};
BothIcons.parameters = {
    docs: {
        source: {
            code: WithBothIconsCode,
        },
    },
};

export const FullyDecorated: Story<Input> = (args) => ({
    input: args,
    component: FullyDecoratedTemplate,
});
FullyDecorated.args = {};
FullyDecorated.parameters = {
    docs: {
        source: {
            code: FullyDecoratedCode,
        },
    },
};
