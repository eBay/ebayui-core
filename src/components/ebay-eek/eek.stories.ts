import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import eek, { type Input } from "./index.marko";
import example1 from "./examples/A+++.marko";
import example2 from "./examples/A++.marko";
import example3 from "./examples/A+.marko";
import example4 from "./examples/A.marko";
import example5 from "./examples/invalid.marko";
import example1Code from "./examples/A+++.marko?raw";
import example2Code from "./examples/A++.marko?raw";
import example3Code from "./examples/A+.marko?raw";
import example4Code from "./examples/A.marko?raw";
import example5Code from "./examples/invalid.marko?raw";
import { Story } from "@storybook/marko";

export default {
    title: "graphics & icons/ebay-eek",
    component: eek,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        rating: {
            control: { type: "text" },
            description: "The energy rating",
        },
        max: {
            control: { type: "text" },
            description: "The maximum range",
        },
        min: {
            control: { type: "text" },
            description: "The minimum range",
        },
        size: {
            options: ["large", "regular"],
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            type: { category: "Options" },
            description: "The size of the EEK.",
        },
    },
};

export const Default: Story<Input> = (args) => ({ input: args });
Default.args = {
    max: "A+++",
    min: "E",
    rating: "C",
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-eek", Default.args),
        },
    },
};

export const exampleOne = () => ({
    component: example1,
    name: "A+++",
});
exampleOne.storyName = "A+++";
exampleOne.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
        source: {
            code: example1Code,
        },
    },
};

export const exampleTwo = () => ({
    component: example2,
});
exampleTwo.storyName = "A++";
exampleTwo.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
        source: {
            code: example2Code,
        },
    },
};

export const exampleThree = () => ({
    component: example3,
    name: "A+",
});
exampleThree.storyName = "A++";
exampleThree.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
        source: {
            code: example3Code,
        },
    },
};

export const exampleFour = () => ({
    component: example4,
    name: "A",
});
exampleFour.storyName = "A";
exampleFour.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
        source: {
            code: example4Code,
        },
    },
};

export const invalidCombinations = () => ({
    component: example5,
});
invalidCombinations.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
        source: {
            code: example5Code,
        },
    },
};
