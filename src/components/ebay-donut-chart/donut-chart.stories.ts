import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";

import WithAttrTagsTemplate from "./examples/with-attr-tags.marko";
import WithAttrTagsCode from "./examples/with-attr-tags.marko?raw";

import { data } from "./examples/data.json";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
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
        layout: "fullscreen",
    },
    argTypes: {
        title: {
            type: "string|@title",
            description: "A title displayed above the graph",
        },
        metricValue: {
            type: "string|@metricValue",
            description: "A primary metric value that summarizes the chart",
        },
        metricLabel: {
            type: "string|@metricLabel",
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
        series: {
            type: { name: "array", require: true },
            description:
                "Highcharts series data for the chart. Only one series is supported for donut chart.",
        },
        highchartsDescription: {
            type: { name: "string", require: false },
            description: "Highcharts description, not visible on the chart",
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
    highchartsDescription: "Donut chart description",
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
    highchartsDescription: "Donut chart description",
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
    highchartsDescription: "Donut chart description",
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
    highchartsDescription: "Donut chart description",
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
    highchartsDescription: "Donut chart description",
};

FiveValues.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-donut-chart", FiveValues.args),
        },
    },
};

export const NoMetrics = Template.bind({});
NoMetrics.args = {
    series: [
        {
            data: data.slice(0, 4),
        },
    ],
    title: "Donut chart title, no metrics",
    highchartsDescription: "Donut chart description",
};

export const WithAttributeTags: Story<Input> = (args) => ({
    input: args,
    component: WithAttrTagsTemplate,
});
WithAttributeTags.args = {};
WithAttributeTags.parameters = {
    docs: {
        source: {
            code: WithAttrTagsCode,
        },
    },
};
