import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import sampleSeriesData from "./examples/data.json";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "charts/ebay-line-chart",
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
        trend: {
            type: { name: "boolean", required: false },
            description:
                "Trend can bet set to `true`, `positive`, or `negative` if set to true the trend is auto calculated by comparing the first and last data points y value",
        },
        series: {
            type: { name: "object", required: true },
            description:
                "The series is an array of one to five arrays of point objects, each point contains an `x`, `y`, and `label`. `x` is an epoch/unix time code, `y` is a numeric value, `label` is what is displayed for the `y` value in the tool tip",
        },
        plotPoints: {
            type: { name: "boolean", required: false },
            description:
                "Defaults to false, if set to true markers will appear on series lines at the x-axis tick mark positions.",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
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
        renderTooltipOutside: {
            type: { name: "boolean", require: false },
            description:
                "Defaults to `true`, if set to false the tooltip will render inside the chart container. Set to `false` when rendering in a modal.",
            table: {
                defaultValue: {
                    summary: "true",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
    ] as any,
    title: "standard line graph with single series",
    description: "sample line graph description",
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", Standard.args),
        },
    },
};

export const TrendAutoPositive = Template.bind({});
TrendAutoPositive.args = {
    series: {
        data: sampleSeriesData[0].data,
    },
    trend: true,
    title: "positive trend graph",
    description: "standard line graph with single series the tend set to true",
} as any;

TrendAutoPositive.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TrendAutoPositive.args),
        },
    },
};

export const TrendSetPositive = Template.bind({});
TrendSetPositive.args = {
    series: {
        data: sampleSeriesData[3].data,
    } as any,
    trend: "positive",
    title: "forced positive trend graph",
    description:
        'standard line graph with single series the tend set to "positive"',
};

TrendSetPositive.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TrendSetPositive.args),
        },
    },
};

export const TrendAutoNegative = Template.bind({});
TrendAutoNegative.args = {
    series: {
        data: sampleSeriesData[3].data,
    },
    trend: true,
    title: "negative trend graph",
    description: "standard line graph with single series the tend set to true",
} as any;

TrendAutoNegative.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TrendAutoNegative.args),
        },
    },
};

export const TrendSetNegative = Template.bind({});
TrendSetNegative.args = {
    series: {
        data: sampleSeriesData[1].data,
    } as any,
    trend: "negative",
    title: "forced negative trend graph",
    description:
        'standard line graph with single series the tend set to "negative"',
};

TrendSetNegative.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TrendSetNegative.args),
        },
    },
};

export const TrendSetNeutral = Template.bind({});
TrendSetNeutral.args = {
    series: {
        data: sampleSeriesData[0].data,
    } as any,
    trend: "neutral",
};

TrendSetNeutral.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TrendSetNeutral.args),
        },
    },
};

export const TwoSeries = Template.bind({});
TwoSeries.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
    ],
} as any;

TwoSeries.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TwoSeries.args),
        },
    },
};

export const TwoSeriesWithPlotPoints = Template.bind({});
TwoSeriesWithPlotPoints.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
    ],
    plotPoints: true,
} as any;

TwoSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", TwoSeriesWithPlotPoints.args),
        },
    },
};

export const ThreeSeries = Template.bind({});
ThreeSeries.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
        {
            data: sampleSeriesData[2].data,
        },
    ],
} as any;

ThreeSeries.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", ThreeSeries.args),
        },
    },
};

export const ThreeSeriesWithPlotPoints = Template.bind({});
ThreeSeriesWithPlotPoints.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
        {
            data: sampleSeriesData[2].data,
        },
    ],
    plotPoints: true,
} as any;

ThreeSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", ThreeSeriesWithPlotPoints.args),
        },
    },
};

export const FourSeries = Template.bind({});
FourSeries.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
        {
            data: sampleSeriesData[2].data,
        },
        {
            data: sampleSeriesData[3].data,
        },
    ],
} as any;

FourSeries.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", FourSeries.args),
        },
    },
};

export const FourSeriesWithPlotPoints = Template.bind({});
FourSeriesWithPlotPoints.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
        {
            data: sampleSeriesData[2].data,
        },
        {
            data: sampleSeriesData[3].data,
        },
    ],
    plotPoints: true,
} as any;

FourSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", FourSeriesWithPlotPoints.args),
        },
    },
};

export const FiveSeries = Template.bind({});
FiveSeries.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
        {
            data: sampleSeriesData[2].data,
        },
        {
            data: sampleSeriesData[3].data,
        },
        {
            data: sampleSeriesData[4].data,
        },
    ],
} as any;

FiveSeries.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", FiveSeries.args),
        },
    },
};

export const FiveSeriesWithPlotPoints = Template.bind({});
FiveSeriesWithPlotPoints.args = {
    series: [
        {
            data: sampleSeriesData[0].data,
        },
        {
            data: sampleSeriesData[1].data,
        },
        {
            data: sampleSeriesData[2].data,
        },
        {
            data: sampleSeriesData[3].data,
        },
        {
            data: sampleSeriesData[4].data,
        },
    ],
    plotPoints: true,
} as any;

FiveSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString("line-chart", FiveSeriesWithPlotPoints.args),
        },
    },
};
