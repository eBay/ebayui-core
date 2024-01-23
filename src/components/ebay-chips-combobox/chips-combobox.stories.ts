import { addRenderBodies } from "../../../.storybook/utils";
import { tagToString } from "../../../.storybook/storybook-code-source";
import Readme from "./README.md";
import Combobox from "./index.marko";

const Template = (args) => ({
    input: addRenderBodies(args),
});

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
        a11yDeleteButton: {
            control: { type: "text" },
            description: "The aria-label for the delete button on each chip.",
        },
        roledescription: {
            control: { type: "text" },
            description:
                "The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales",
        },
        options: {
            type: "array",
            control: { type: "object" },
            description: "array of autofill options to display",
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

export const Isolated = Template.bind({});
Isolated.args = {
    options: [
        "football",
        "baseball",
        "basketball",
        "hockey",
        "soccer",
        "volleyball",
        "golf",
        "tennis",
    ],
};
Isolated.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-combobox", Isolated.args, {
                options: "option",
            }),
        },
    },
    expanded: {
        table: {
            category: "disabled",
        },
    },
};
