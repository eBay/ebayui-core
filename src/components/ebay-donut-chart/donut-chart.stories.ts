import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
// import Readme from "./README.md";
import Component from "./index.marko";
import { data } from "./examples/data.json";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "charts/ebay-donut-chart",
    component: Component,
    // parameters: {
    //     docs: {
    //         description: {
    //             component: Readme,
    //         },
    //     },
    // },
    argTypes: {
        title: {
            type: { name: "string", required: false },
            description: "A title displayed above the graph",
        },
        description: {
            type: { name: "string", required: true },
            description: "A description of what the chart is displaying",
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
        version: {
            type: { name: "string", require: false },
            description: "Highcharts version to load from CDN",
        },
    },
};

export const LargeLayout = Template.bind({});
LargeLayout.args = {
    series: [
        {
            data: data.slice(0, 3),
        },
    ],
    title: "Graph title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

export const SmallLayout = Template.bind({});
SmallLayout.args = {
    series: [
        {
            data: data.slice(0, 3),
        },
    ],
    title: "Graph title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "small",
};

export const TwoValues = Template.bind({});
TwoValues.args = {
    series: [
        {
            data: data.slice(0, 2),
        },
    ],
    title: "Graph title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

export const ThreeValues = Template.bind({});
ThreeValues.args = {
    series: [
        {
            data: data.slice(0, 3),
        },
    ],
    title: "Graph title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

export const FourValues = Template.bind({});
FourValues.args = {
    series: [
        {
            data: data.slice(0, 4),
        },
    ],
    title: "Graph title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};

export const FiveValues = Template.bind({});
FiveValues.args = {
    series: [
        {
            data,
        },
    ],
    title: "Graph title",
    metricValue: "174 Total",
    metricLabel: "3.78% return rate",
    layout: "large",
};
