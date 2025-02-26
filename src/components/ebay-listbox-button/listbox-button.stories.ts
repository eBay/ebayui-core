import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import WithDescriptionTemplate from "./examples/with-description.marko";
import WithDescriptionTemplateCode from "./examples/with-description.marko?raw";
import WithErrorTemplate from "./examples/with-error.marko";
import WithErrorTemplateCode from "./examples/with-error.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-listbox-button",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selected: {
            description:
                "allows you to set the selected index option to `selected`",
        },
        borderless: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether button has borders ",
        },
        fluid: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether listbox width is 100% ",
        },
        buttonName: {
            control: { type: "text" },
            description:
                "used for the `name` attribute of the native `<button>` ",
        },
        truncate: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows",
        },
        hasError: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether listbox is in an error state or not",
        },
        collapseOnSelect: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "When an option is selected, the dropdown menu collapses into the button",
        },
        listSelection: {
            table: {
                defaultValue: {
                    summary: "manual",
                },
            },
            description:
                "If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",
            option: ["manual", "auto"],
            type: "select",
        },
        strategy: {
            control: { type: "select" },
            options: ["absolute", "fixed"],
            table: {
                defaultValue: {
                    summary: "absolute",
                },
            },
            description:
                "Swap between fixed and absolute positioning strategy. Use fixed when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",
        },
        prefixId: {
            control: { type: "text" },
            description:
                "id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`",
        },
        floatingLabel: {
            control: { type: "text" },
            description:
                "The label to add that floats to the top when item is selected. Cannot be used with `prefix-label`",
        },
        unselectedText: {
            control: { type: "text" },
            description:
                'The text to be shown when no options are selected. Default is "-". Cannot be used with `floating-label`',
        },
        prefixLabel: {
            control: { type: "text" },
            description:
                "The label to add before each selected item on the button. Cannot be used with `prefix-id`",
        },
        option: {
            name: "@option",
            table: {
                category: "@attribute tags",
            },
        },
        text: {
            table: {
                control: { type: "text" },
                category: "@option attributes",
            },
        },
        value: {
            table: {
                control: { type: "value" },
                category: "@option attributes",
            },
        },
        variant: {
            description:
                "If `form`, changes appearance to match other form-specific dropdown-esque components for visual consistency.",
            option: ["standard", "form"],
            type: "select",
        },

        onChange: {
            action: "on-change",
            description: "Triggered on item clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected, wasClicked }",
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
    },
};

export const Default = Template.bind({});
Default.args = {
    prefixLabel: "Selected:",
    option: [
        {
            value: "1",
            text: "Option 1",
        },
        {
            value: "2",
            text: "Option 2",
        },
        {
            value: "3",
            text: "Option 3",
        },
    ] as any,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-listbox-button", Default.args),
        },
    },
};

export const withDescription = buildExtensionTemplate(
    WithDescriptionTemplate,
    WithDescriptionTemplateCode,
);

export const withError = buildExtensionTemplate(
    WithErrorTemplate,
    WithErrorTemplateCode,
);
