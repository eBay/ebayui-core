import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Combobox from "./index.marko";
import type { Input } from "./component";
import SearchFilteringTemplate from "./examples/search-filtering.marko";
import SearchFilteringTemplateCode from "./examples/search-filtering.marko?raw";
import ActionableButtonTemplate from "./examples/actionable-button.marko";
import ActionableButtonTemplateCode from "./examples/actionable-button.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "form input/ebay-combobox",
    component: Combobox,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        name: {
            control: { type: "text" },
            description:
                "used for the `name` attribute of the `<input>` element",
        },
        borderless: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether button has borders ",
        },
        disabled: {
            type: "boolean",
            control: { type: "boolean" },
            description: "sets the disabled attribute of the input",
        },
        expanded: {
            control: { type: "boolean" },
            description: "sets whether the listbox is expanded",
        },
        autocomplete: {
            control: { type: "text" },
            description:
                "default is `none`; available values are `none` or `list`. For list, will automatically filter results while typing.",
        },
        listSelection: {
            control: { type: "text" },
            description:
                "default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys.",
        },
        "floating-label": {
            control: { type: "text" },
            description:
                "The label to show on the combobox which moves up when focused",
        },
        fluid: {
            control: { type: "boolean" },
            type: "boolean",
            description:
                "If true, combobox will span the entire width of it's container",
        },
        option: {
            name: "@option",
            table: {
                category: "@attribute tags",
            },
        },
        text: {
            description: "string to use in the option",
            control: { type: "text" },
            table: {
                category: "@option attributes",
            },
        },
        sticky: {
            control: { type: "boolean" },
            type: "boolean",
            table: {
                category: "@option attributes",
            },
            description:
                "If true, the option will always be shown even if it does not match the filter",
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
        onChange: {
            action: "on-change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected }",
                },
            },

            description: "same as the `onChange` event, which fires on blur",
        },
        "onInput-change": {
            action: "on-input-change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected }",
                },
            },
            description:
                "same as the `onInput` event, which fires with every keypress",
        },
        onSelect: {
            action: "on-select",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected }",
                },
            },
            description:
                "similar to a `<select>`, which fires when an option is clicked or selected",
        },
        "onFloating-label-init": {
            action: "on-floating-label-init",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected }",
                },
            },
            description: "when floating label finishes initializing",
        },
        onFocus: {
            action: "on-focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected }",
                },
            },

            description: "same as the `onFocus` event, which fires on focus",
        },
    },
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
    name: "example1text",
    autocomplete: "list",
    value: "",
    option: [
        { text: "August Campaign" },
        { text: "4th of July Sale (paused)" },
        { text: "Basic Offer" },
        { text: "Basic Offer 2" },
        { text: "Basic Offer 3" },
        { text: "Basic Offer 4" },
    ],
    floatingLabel: "Default Label",
} as any;
FloatingLabel.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-combobox", FloatingLabel.args, {
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

export const Isolated = Template.bind({});
Isolated.args = {
    name: "example1text",
    autocomplete: "list",
    option: [
        { text: "August Campaign", value: "1" },
        { text: "4th of July Sale (paused)", value: "2" },
        { text: "Basic Offer", value: "3" },
        { text: "Basic Offer 2", value: "4" },
        { text: "Basic Offer 3", value: "5" },
        { text: "Basic Offer 4", value: "6" },
    ],
} as any;
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

export const SearchFiltering = buildExtensionTemplate(
    SearchFilteringTemplate,
    SearchFilteringTemplateCode,
);

export const ActionableButton = buildExtensionTemplate(
    ActionableButtonTemplate,
    ActionableButtonTemplateCode,
);
