import { Story } from "@storybook/marko";
import Readme from "./README.md";
import fixed from "./examples/all.marko";
import code from "./examples/all.marko?raw";
import component, { type Input } from "./index.marko";

export default {
    title: "graphics & icons/ebay-flag",
    component: component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        a11yText: {
            description: "The aria label for the outer container.",
        },
    },
};
export const Default: Story<Input> = (args) => ({
    input: args,
    component: fixed,
});
Default.args = {};
Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};
