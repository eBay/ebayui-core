import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';
import * as sampleSeriesData from './examples/data.json';
import * as sellingData from './selling-mock.json';

function getSellingSample() {
    return {
        data: sellingData.model.salesTrendData.chartData.points.map((p) => ({
            x: p.xValue,
            y: p.yValue,
            tooltip: p.tooltip.dataItems.reduce((tp, c) => {
                let t = tp;
                t += '<div>';
                t += c.textSpans.reduce((tsp, tc) => {
                    if (tc.styles && tc.styles.includes('BOLD')) {
                        return `<span>${tsp}<b>${tc.text}</b></span>`;
                    }
                    return `<span>${tsp}${tc.text}</span>`;
                }, '');
                t += '</div>';
                return t;
            }, ''),
        })),
    };
}
function getSellingSampleAxisLabels(axis) {
    return sellingData.model.salesTrendData.chartData[`${axis}Axis`].labels.reduce((p, c) => {
        p.push(c.textSpans[0].text);
        return p;
    }, []);
}
function getSellingSampleTrendDirection() {
    return sellingData.model.salesTrendData.chartData.lineColor;
}

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-line-graph',
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
            type: { name: 'string', required: false },
            description: 'A title displayed above the graph',
        },
        description: {
            type: { name: 'string', required: true },
            description: 'A description of what the chart is displaying',
        },
        trend: {
            type: { name: 'boolean', required: false },
            description:
                'Trend can bet set to `true`, `positive`, or `negative` if set to true the trend is auto calculated by comparing the first and last data points y value',
        },
        series: {
            type: { name: 'object', required: true },
            description:
                'The series is an array of one to five arrays of point objects, each point contains an `x`, `y`, and `label`. `x` is an epoch/unix time code, `y` is a numeric value, `label` is what is displayed for the `y` value in the tool tip',
        },
        plotPoints: {
            type: { name: 'boolean', required: false },
            description:
                'Defaults to false, if set to true markers will appear on series lines at the x-axis tick mark positions.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        xAxisLabelFormat: {
            type: { name: 'string', required: false },
            description:
                'Used to modify the display of the x-axis labels. Accepts a string like `{value:%Y-%m-%d}`. Refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for available format keys',
            table: {
                defaultValue: {
                    summary: '{value:%b %e}',
                },
            },
        },
        xAxisPositioner: {
            type: { name: 'function', required: false },
            description:
                'A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed. You can access `this.dataMin` and `this.dataMax` from the function to help determine positions.',
        },
        yAxisLabels: {
            type: { name: 'array', required: false },
            description:
                'An array of labels to use on the y-axis. Use in conjunction with yAxisPositioner. Make sure the length of the yAxisLabels match the length of the positions array returned by the yAxisPositioner function',
        },
        yAxisPositioner: {
            type: { name: 'function', required: false },
            description:
                'A custom function that returns an array of numeric values where y-axis labels will be displayed. You can access `this.dataMin` and `this.dataMax` from the function to help determine positions',
        },
        class: {
            type: { name: 'string', require: false },
            description: 'A class name that will be added to the main chart container',
        },
    },
};
function getTickPositions() {
    const min = Math.floor(this.dataMin);
    const max = Math.ceil(this.dataMax);
    return [min, (min + max) / 2, max];
}

export const Standard = Template.bind({});
Standard.args = {
    series: sampleSeriesData.slice(0, 1),
    title: 'standard line graph with single series',
    description: 'sample line graph description',
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', Standard.args),
        },
    },
};

export const TrendAutoPositive = Template.bind({});
TrendAutoPositive.args = {
    series: {
        data: sampleSeriesData[0].data,
    },
    trend: true,
    title: 'positive trend graph',
    description: 'standard line graph with single series the tend set to true',
};

TrendAutoPositive.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TrendAutoPositive.args),
        },
    },
};

export const TrendSetPositive = Template.bind({});
TrendSetPositive.args = {
    series: {
        data: sampleSeriesData[3].data,
    },
    trend: 'positive',
    title: 'forced positive trend graph',
    description: 'standard line graph with single series the tend set to "positive"',
};

TrendSetPositive.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TrendSetPositive.args),
        },
    },
};

export const TrendAutoNegative = Template.bind({});
TrendAutoNegative.args = {
    series: {
        data: sampleSeriesData[3].data,
    },
    trend: true,
    title: 'negative trend graph',
    description: 'standard line graph with single series the tend set to true',
};

TrendAutoNegative.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TrendAutoNegative.args),
        },
    },
};

export const TrendSetNegative = Template.bind({});
TrendSetNegative.args = {
    series: {
        data: sampleSeriesData[1].data,
    },
    trend: 'negative',
    title: 'forced negative trend graph',
    description: 'standard line graph with single series the tend set to "negative"',
};

TrendSetNegative.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TrendSetNegative.args),
        },
    },
};

export const TrendSetNeutral = Template.bind({});
TrendSetNeutral.args = {
    series: {
        data: sampleSeriesData[0].data,
    },
    trend: 'neutral',
};

TrendSetNeutral.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TrendSetNeutral.args),
        },
    },
};

export const SellingSample = Template.bind({});
SellingSample.args = {
    series: getSellingSample(),
    xAxisLabelFormat: '{value:%b %e, %Y}',
    yAxisLabels: getSellingSampleAxisLabels('y'),
    xAxisPositioner: getTickPositions,
    yAxisPositioner: getTickPositions,
    trend: getSellingSampleTrendDirection(),
    class: 'selling-sample',
};

SellingSample.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', SellingSample.args),
        },
    },
};

export const TwoSeries = Template.bind({});
TwoSeries.args = {
    series: sampleSeriesData.slice(0, 2),
};

TwoSeries.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TwoSeries.args),
        },
    },
};

export const TwoSeriesWithPlotPoints = Template.bind({});
TwoSeriesWithPlotPoints.args = {
    series: sampleSeriesData.slice(0, 2),
    plotPoints: true,
};

TwoSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', TwoSeriesWithPlotPoints.args),
        },
    },
};

export const ThreeSeries = Template.bind({});
ThreeSeries.args = {
    series: sampleSeriesData.slice(0, 3),
};

ThreeSeries.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', ThreeSeries.args),
        },
    },
};

export const ThreeSeriesWithPlotPoints = Template.bind({});
ThreeSeriesWithPlotPoints.args = {
    series: sampleSeriesData.slice(0, 3),
    plotPoints: true,
};

ThreeSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', ThreeSeriesWithPlotPoints.args),
        },
    },
};

export const FourSeries = Template.bind({});
FourSeries.args = {
    series: sampleSeriesData.slice(0, 4),
};

FourSeries.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', FourSeries.args),
        },
    },
};

export const FourSeriesWithPlotPoints = Template.bind({});
FourSeriesWithPlotPoints.args = {
    series: sampleSeriesData.slice(0, 4),
    plotPoints: true,
};

FourSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', FourSeriesWithPlotPoints.args),
        },
    },
};

export const FiveSeries = Template.bind({});
FiveSeries.args = {
    series: sampleSeriesData,
};

FiveSeries.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', FiveSeries.args),
        },
    },
};

export const FiveSeriesWithPlotPoints = Template.bind({});
FiveSeriesWithPlotPoints.args = {
    series: sampleSeriesData,
    plotPoints: true,
};

FiveSeriesWithPlotPoints.parameters = {
    docs: {
        source: {
            code: tagToString('line-graph', FiveSeriesWithPlotPoints.args),
        },
    },
};
