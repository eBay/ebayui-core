import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import WithDescriptionTemplate from "./examples/with-description.marko";
import WithDescriptionTemplateCode from "./examples/with-description.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-listbox",
    component: Component,
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
                "used for the `name` attribute of the native `<select>`",
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
        selected: {
            description:
                "allows you to set the selected index option to `selected`",
        },
        option: {
            name: "@option",
            table: {
                category: "@attribute tags",
            },
        },
        text: {
            control: { type: "text" },
            table: {
                category: "@option attributes",
            },
        },
        value: {
            control: { type: "text" },
            table: {
                category: "@option attributes",
            },
        },
        disabled: {
            control: { type: "boolean" },
            table: {
                category: "@option attributes",
            },
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
    },
};

export const Standard = Template.bind({});
Standard.args = {
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
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-listbox", Standard.args),
        },
    },
};

export const withDescription = buildExtensionTemplate(
    WithDescriptionTemplate,
    WithDescriptionTemplateCode,
);
