import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import { data } from "./examples/data.json";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "charts/ebay-donut-chart",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        title: {
            type: { name: "string", required: false },
            description: "A title displayed above the graph",
        },
        metricValue: {
            type: { name: "string", required: true },
            description: "A primary metric value that summarizes the chart",
        },
        metricLabel: {
            type: { name: "string", required: true },
            description: "A supporting label for the primary metric value",
        },
        class: {
            type: { name: "string", require: false },
            description:
                "A class name that will be added to the main chart container",
        },
        cdnHighcharts: {
            type: { name: "string", require: false },
            description: "CDN url override for loading highcharts",
        },
        cdnHighchartsAccessibility: {
            type: { name: "string", require: false },
            description:
                "CDN url override for loading highcharts accessibility module",
        },
        cdnHighchartsPatternFill: {
            type: { name: "string", require: false },
            description:
                "CDN url override for loading highcharts pattern-fill module",
        },
        version: {
            type: { name: "string", require: false },
            description: "Highcharts version to load from CDN",
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    series: [
        {
            data: data.slice(0, 3),
        },
    ],
    title: "Donut chart title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-donut-chart", Standard.args),
        },
    },
};

export const TwoValues = Template.bind({});
TwoValues.args = {
    series: [
        {
            data: data.slice(0, 2),
        },
    ],
    title: "Donut chart with two values",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

TwoValues.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-donut-chart", TwoValues.args),
        },
    },
};

export const ThreeValues = Template.bind({});
ThreeValues.args = {
    series: [
        {
            data: data.slice(0, 3),
        },
    ],
    title: "Donut chart with three values",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

ThreeValues.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-donut-chart", ThreeValues.args),
        },
    },
};

export const FourValues = Template.bind({});
FourValues.args = {
    series: [
        {
            data: data.slice(0, 4),
        },
    ],
    title: "Donut chart with four values",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

FourValues.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-donut-chart", FourValues.args),
        },
    },
};

export const FiveValues = Template.bind({});
FiveValues.args = {
    series: [
        {
            data,
        },
    ],
    title: "Donut chart with five values",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

FiveValues.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-donut-chart", FiveValues.args),
        },
    },
};
