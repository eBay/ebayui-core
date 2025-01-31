import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import WithLabelTemplate from "./examples/external-label.marko";
import InFormTemplate from "./examples/in-form.marko";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import WithLabelCode from "./examples/external-label.marko?raw";
import InFormCode from "./examples/in-form.marko";
import DisabledCode from "./examples/disabled-with-label.marko";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

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
    title: "form input/ebay-select",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        floatingLabel: {
            type: "string",
            control: { type: "string" },
            description:
                "if set, then label will move up and down. Need to have first option to have a nullable value.",
        },
        borderless: {
            type: "boolean",
            control: { type: "boolean" },
            description: "whether button has borders",
        },
        isLarge: {
            type: "boolean",
            control: { type: "boolean" },
            description: "to show large version",
        },

        text: {
            control: { type: "text" },
            description: "text to use in the option",
            table: {
                category: "@option attributes",
            },
        },
        value: {
            control: { type: "text" },
            description:
                "used for the `value` attribute of the native `<option>`",
            table: {
                category: "@option attributes",
            },
        },
        selected: {
            control: { type: "text" },
            description:
                "used to determine which option is selected. This should be included in one and only one option.",
            table: {
                category: "@option attributes",
            },
        },
        option: {
            name: "@option",
            table: {
                category: "@attribute tags",
            },
        },
        onChange: {
            action: "on-change",
            description: "Triggered on option selected",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, index, selected }",
                },
            },
        },
    },
};

export const Floating = Template.bind({});
Floating.args = {
    floatingLabel: "Option",
    option: [
        {
            text: "Select an option",
            value: "",
        },
        {
            text: "option 1",
            value: "option 1",
        },
        {
            text: "option 2",
            value: "option 2",
        },
        {
            text: "option 3",
            value: "option 3",
        },
    ] as any,
};
Floating.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-select", Floating.args, {
                options: "option",
            }),
        },
    },
};

export const ExternalLabel: Story<Input> = (args) => ({
    input: args,
    component: WithLabelTemplate,
});

ExternalLabel.parameters = {
    docs: {
        source: {
            code: WithLabelCode,
        },
    },
};

ExternalLabel.args = {
    option: [
        {
            text: "Select an option",
            value: "",
        },
        {
            text: "option 1",
            value: "option 1",
        },
        {
            text: "option 2",
            value: "option 2",
        },
        {
            text: "option 3",
            value: "option 3",
        },
    ] as any,
};

export const Disabled: Story<Input> = (args) => ({
    input: args,
    component: DisabledTemplate,
});

Disabled.parameters = {
    docs: {
        source: {
            code: DisabledCode,
        },
    },
};

export const InForm: Story<Input> = (args) => ({
    input: args,
    component: InFormTemplate,
});

InForm.parameters = {
    docs: {
        source: {
            code: InFormCode,
        },
    },
};
