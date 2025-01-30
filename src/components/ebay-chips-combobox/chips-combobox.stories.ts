import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Combobox from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import SelectedTemplate from "./examples/selected.marko";
import SelectedCode from "./examples/selected.marko?raw";

export default {
    title: "form input/ebay-chips-combobox",
    component: Combobox,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        disabled: {
            type: "boolean",
            control: { type: "boolean" },
            description: "sets the disabled attribute of the input",
        },
        expanded: {
            control: { type: "boolean" },
            description: "sets whether the listbox is expanded",
        },
        fluid: {
            control: { type: "boolean" },
            type: "boolean",
            description:
                "If true, combobox will span the entire width of it's container",
        },
        error: {
            control: { type: "boolean" },
            type: "boolean",
            description: "sets the error state of the input",
        },
        listSelection: {
            control: { type: "text" },
            description:
                "default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys.",
        },
        a11yDeleteButtonText: {
            control: { type: "text" },
            description: "The aria-label for the delete button on each chip.",
        },
        roledescription: {
            control: { type: "text" },
            description:
                "The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales",
        },
        placeholder: {
            control: { type: "text" },
            description:
                "The input placeholder text. This will be the label for the input when no text is entered.",
        },
        selected: {
            control: { type: "array" },
            table: {
                defaultValue: {
                    summary: "[]",
                },
            },

            description:
                "A list of selected options. Each item is the string that will be displayed in the selected list of chips. If it matches an item in the dropdown, it won't be shown in dropdown",
        },
        option: {
            name: "@option",
            description:
                "Repeatable attribute tag containing the autofill options",
        },
        text: {
            table: {
                category: "@option attributes",
            },
            description: "The text contained in the autofill option",
        },
        onChange: {
            action: "on-change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ selected }",
                },
            },

            description: "fires when the selected chips change",
        },
        onCollapse: {
            action: "on-collapse",
            table: {
                category: "Events",
            },
            description: " collapsed content",
        },
        onExpand: {
            action: "on-expand",
            table: {
                category: "Events",
            },
            description: " expanded content",
        },
    },
};

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode, {
    placeholder: "Add item",
});

export const Selected = buildExtensionTemplate(SelectedTemplate, SelectedCode, {
    placeholder: "Add item",
    selected: ["Option 1", "Option 3", "Custom Option"],
});
