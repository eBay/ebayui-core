import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component";
import sampleSeriesData from "./examples/data.json";
import { Story } from "@storybook/marko";
const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "charts/ebay-bar-chart",
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
        stacked: {
            type: { name: "boolean", required: false },
            description:
                "Stacked can bet set to `true` or `false` and defaults to false",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        class: {
            type: { name: "string", require: false },
            description:
                "A class name that will be added to the main chart container",
        },
    },
};

function getSeriesData(series: number, days: number): any {
    return sampleSeriesData.slice(0, series).map((s) => ({
        ...s,
        data: s.data.slice(0, days),
    }));
}

export const singleSeriesFiveDays = Template.bind({});
singleSeriesFiveDays.args = {
    series: getSeriesData(1, 5),
};
singleSeriesFiveDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", singleSeriesFiveDays.args),
        },
    },
};

export const singleSeriesThirteenDays = Template.bind({});
singleSeriesThirteenDays.args = {
    series: getSeriesData(1, 13),
};
singleSeriesThirteenDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", singleSeriesThirteenDays.args),
        },
    },
};

export const singleSeriesThirtyDays = Template.bind({});
singleSeriesThirtyDays.args = {
    series: getSeriesData(1, 30),
};
singleSeriesThirtyDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", singleSeriesThirtyDays.args),
        },
    },
};

export const twoSeriesEightDays = Template.bind({});
twoSeriesEightDays.args = {
    series: getSeriesData(2, 8),
};
twoSeriesEightDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", twoSeriesEightDays.args),
        },
    },
};

export const threeSeriesThreeDays = Template.bind({});
threeSeriesThreeDays.args = {
    series: getSeriesData(3, 3),
};
threeSeriesThreeDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", threeSeriesThreeDays.args),
        },
    },
};

export const fourSeriesFourDays = Template.bind({});
fourSeriesFourDays.args = {
    series: getSeriesData(4, 4),
};
fourSeriesFourDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", fourSeriesFourDays.args),
        },
    },
};

export const fiveSeriesThreeDays = Template.bind({});
fiveSeriesThreeDays.args = {
    series: getSeriesData(5, 3),
};
fiveSeriesThreeDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", fiveSeriesThreeDays.args),
        },
    },
};

export const fiveSeriesSixDays = Template.bind({});
fiveSeriesSixDays.args = {
    series: getSeriesData(5, 6),
};
fiveSeriesSixDays.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", fiveSeriesSixDays.args),
        },
    },
};

export const twoSeriesStacked = Template.bind({});
twoSeriesStacked.args = {
    series: getSeriesData(2, 24),
    stacked: true,
};
twoSeriesStacked.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", twoSeriesStacked.args),
        },
    },
};

export const threeSeriesStacked = Template.bind({});
threeSeriesStacked.args = {
    series: getSeriesData(3, 24),
    stacked: true,
};
threeSeriesStacked.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", threeSeriesStacked.args),
        },
    },
};

export const fourSeriesStacked = Template.bind({});
fourSeriesStacked.args = {
    series: getSeriesData(4, 24),
    stacked: true,
};
fourSeriesStacked.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", fourSeriesStacked.args),
        },
    },
};

export const fiveSeriesStacked = Template.bind({});
fiveSeriesStacked.args = {
    series: getSeriesData(5, 24),
    stacked: true,
};
fiveSeriesStacked.parameters = {
    docs: {
        source: {
            code: tagToString("bar-chart", fiveSeriesStacked.args),
        },
    },
};
