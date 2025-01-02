import type { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component-browser";
import WithLabelTemplate from "./examples/with-label.marko";
import DisabledTemplate from "./examples/disabled-with-label.marko";
import WithLabelCode from "./examples/with-label.marko?raw";
import DisabledCode from "./examples/disabled-with-label.marko?raw";

const Template: Story<Input> = (args) => ({ input: args });

export default {
    title: "form input/ebay-switch",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        onChange: {
            action: "on-change",
            description: "Triggered on change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value, checked }",
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

export const Isolated = Template.bind({});
Isolated.args = {};
Isolated.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-switch", Isolated.args),
        },
    },
};
