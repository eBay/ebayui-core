import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import * as sampleData from "./examples/data.json";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "charts/ebay-spark-line",
    excludeStories: ".*",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        data: {
            type: { name: "array", required: true },
            description:
                "an array of point objects, each point contains an `x` and `y` value",
        },
        trend: {
            type: { name: "string", required: false },
            description:
                "Trend can bet set to `positive` or `negative` to change the color of the line",
        },
    },
};

export const Basic = Template.bind({});
Basic.args = sampleData.basic;

Basic.parameters = {
    docs: {
        source: {
            code: tagToString("spark-line", Basic.args),
        },
    },
};

export const Positive = Template.bind({});
Positive.args = sampleData.positive as any;

Positive.parameters = {
    docs: {
        source: {
            code: tagToString("spark-line", Positive.args),
        },
    },
};

export const Negative = Template.bind({});
Negative.args = sampleData.negative as any;

Negative.parameters = {
    docs: {
        source: {
            code: tagToString("spark-line", Negative.args),
        },
    },
};
