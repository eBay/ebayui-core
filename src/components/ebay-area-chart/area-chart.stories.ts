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

const seriesDataWithoutLabels = sampleSeriesData.map((series) => {
    const { data, ...rest } = series;
    return {
        ...rest,
        data: data.map((point) => {
            const { label, ...rest } = point;
            return rest;
        }),
    };
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
        highchartOptions: {
            type: { name: "object", required: false },
            description:
                "A highcharts options object that will be merged with the default options",
        },
        xLabelFormatter: {
            type: { name: "function", required: false },
            description:
                "A function that will be used to format the x-axis labels. Provides the value and a date formatter function. By default is formatted as `MMM dd`. Refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for available format keys",
        },
        yLabelFormatter: {
            type: { name: "function", required: false },
            description:
                "A function that will be used to format the y-axis labels. By default is formatted as USD currency.",
        },
        tooltipValueFormatter: {
            type: { name: "function", required: false },
            description:
                "A function that will be used to format the tooltip series values and total. By default is formatted as USD currency.",
        },
        areaType: {
            type: { name: "string", required: false },
            description:
                "The type of area chart to display. By default is `spline`. Options are `spline` and `area`",
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
    series: sampleSeriesData.slice(0, 1) as Highcharts.SeriesAreaOptions[],
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", Standard.args),
        },
    },
};

export const TwoSeries = Template.bind({});
TwoSeries.args = {
    title: "Two series sample area chart",
    description:
        "this chart displays 30 days of values for sample1 and sample2",
    series: sampleSeriesData.slice(0, 2) as Highcharts.SeriesAreaOptions[],
};
TwoSeries.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", TwoSeries.args),
        },
    },
};

export const ThreeSeries = Template.bind({});
ThreeSeries.args = {
    title: "Three series sample area chart",
    description:
        "this chart displays 30 days of values for sample1, sample2 and sample3",
    series: sampleSeriesData.slice(0, 3) as Highcharts.SeriesAreaOptions[],
};
ThreeSeries.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", ThreeSeries.args),
        },
    },
};

export const FourSeries = Template.bind({});
FourSeries.args = {
    title: "Four series sample area chart",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, and sample4",
    series: sampleSeriesData.slice(0, 4) as Highcharts.SeriesAreaOptions[],
};
FourSeries.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", FourSeries.args),
        },
    },
};

export const FiveSeries = Template.bind({});
FiveSeries.args = {
    title: "Five series sample area chart",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5",
    series: sampleSeriesData as Highcharts.SeriesAreaOptions[],
};
FiveSeries.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", FiveSeries.args),
        },
    },
};

export const WithUnitlessYFormat = Template.bind({});
WithUnitlessYFormat.args = {
    title: "Custom y-axis label and tooltip value format",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5",
    series: seriesDataWithoutLabels as Highcharts.SeriesAreaOptions[],
    yLabelFormatter: (value) => `${value}`,
    tooltipValueFormatter: (value) => `${value}`,
};
WithUnitlessYFormat.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", WithUnitlessYFormat.args),
        },
    },
};

export const WithXLabelFormat = Template.bind({});
WithXLabelFormat.args = {
    title: "Custom x-axis label format",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5",
    series: sampleSeriesData as Highcharts.SeriesAreaOptions[],
    xLabelFormatter: (value, dateFormat) => {
        if (typeof value !== "number") {
            return value;
        }
        return dateFormat("%A", value);
    },
    tooltipTitleFormatter(value, dateFormat) {
        if (typeof value !== "number") {
            return value;
        }
        return dateFormat("%A", value);
    },
};

WithXLabelFormat.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", WithXLabelFormat.args),
        },
    },
};

export const NonSpline = Template.bind({});
NonSpline.args = {
    title: "Area chart with non-spline type",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5",
    series: sampleSeriesData.slice(0, 1) as Highcharts.SeriesAreaOptions[],
    areaType: "area",
};

NonSpline.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-area-chart", NonSpline.args),
        },
    },
};

export const CustomHighchartOptions = Template.bind({});
CustomHighchartOptions.args = {
    title: "Custom highchart options",
    description:
        "this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5",
    series: sampleSeriesData.slice(0, 1) as Highcharts.SeriesAreaOptions[],
    highchartOptions: {
        yAxis: {
            ceiling: 45000,
            tickAmount: 4,
        },
    },
};
