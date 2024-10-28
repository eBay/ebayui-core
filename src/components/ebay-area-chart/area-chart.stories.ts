import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import sampleSeriesData from "./examples/data.json";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "charts/ebay-area-chart",
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
        description: {
            type: { name: "string", required: true },
            description: "A description of what the chart is displaying",
        },
        series: {
            type: { name: "object", required: true },
            description:
                "The series is an array of one to five arrays of point objects, each point contains an `x`, `y`, and `label`. `x` is an epoch/unix time code, `y` is a numeric value, `label` is what is displayed for the `y` value in the tool tip",
        },
        xAxisLabelFormat: {
            type: { name: "string", required: false },
            description:
                "Used to modify the display of the x-axis labels. Accepts a string like `{value:%Y-%m-%d}`. Refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for available format keys",
            table: {
                defaultValue: {
                    summary: "{value:%b %e}",
                },
            },
        },
        xAxisPositioner: {
            type: { name: "function", required: false },
            description:
                "A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed. You can access `this.dataMin` and `this.dataMax` from the function to help determine positions.",
        },
        yAxisLabels: {
            type: { name: "array", required: false },
            description:
                "An array of labels to use on the y-axis. Use in conjunction with yAxisPositioner. Make sure the length of the yAxisLabels match the length of the positions array returned by the yAxisPositioner function",
        },
        yAxisPositioner: {
            type: { name: "function", required: false },
            description:
                "A custom function that returns an array of numeric values where y-axis labels will be displayed. You can access `this.dataMin` and `this.dataMax` from the function to help determine positions",
        },
        class: {
            type: { name: "string", require: false },
            description:
                "A class name that will be added to the main chart container",
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    title: "Single series sample area chart",
    description: "this chart displays 30 days of sample values",
    series: sampleSeriesData.slice(0, 1),
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", Standard.args),
        },
    },
};

export const TwoSeries = Template.bind({});
TwoSeries.args = {
    title: "Two series sample area chart",
    description:
        "this chart displays 30 days of values for sample1 and sample2",
    series: sampleSeriesData.slice(0, 2),
};
TwoSeries.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", TwoSeries.args),
        },
    },
};

export const ThreeSeries = Template.bind({});
ThreeSeries.args = {
    title: "Three series sample area chart",
    description:
        "this chart displays 30 days of values for sample1, sample2 and sample3",
    series: sampleSeriesData.slice(0, 3),
    highchartOptions: {
        title: { text: "override!" },
    },
};
ThreeSeries.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", ThreeSeries.args),
        },
    },
};

export const FourSeries = Template.bind({});
FourSeries.args = {
    title: "Four series sample area chart",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, and sample4",
    series: sampleSeriesData.slice(0, 4),
};
FourSeries.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", FourSeries.args),
        },
    },
};

export const FiveSeries = Template.bind({});
FiveSeries.args = {
    title: "Five series sample area chart",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5",
    series: sampleSeriesData,
};
FiveSeries.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", FiveSeries.args),
        },
    },
};
