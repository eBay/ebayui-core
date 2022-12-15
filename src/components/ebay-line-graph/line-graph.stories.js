import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const sellingData = require('./selling-mock.json');

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

const sampleSeriesData = [
    {
        data: [
            {
                x: 1643673600000,
                y: -811.28,
                label: '$-811.28',
            },
            {
                x: 1643760000000,
                y: -1804.83,
                label: '$-1804.83',
            },
            {
                x: 1643846400000,
                y: -885.85,
                label: '$-885.85',
            },
            {
                x: 1643932800000,
                y: 949.67,
                label: '$949.67',
            },
            {
                x: 1644019200000,
                y: 21.24,
                label: '$21.24',
            },
            {
                x: 1644105600000,
                y: 623.81,
                label: '$623.81',
            },
            {
                x: 1644192000000,
                y: -1386.42,
                label: '$-1386.42',
            },
            {
                x: 1644278400000,
                y: -2963.25,
                label: '$-2963.25',
            },
            {
                x: 1644364800000,
                y: -3829.14,
                label: '$-3829.14',
            },
            {
                x: 1644451200000,
                y: -2878.11,
                label: '$-2878.11',
            },
            {
                x: 1644537600000,
                y: -2999.07,
                label: '$-2999.07',
            },
            {
                x: 1644624000000,
                y: -1639.63,
                label: '$-1639.63',
            },
            {
                x: 1644710400000,
                y: 607.03,
                label: '$607.03',
            },
            {
                x: 1644796800000,
                y: -62.25,
                label: '$-62.25',
            },
            {
                x: 1644883200000,
                y: 1808.09,
                label: '$1808.09',
            },
            {
                x: 1644969600000,
                y: 3884.39,
                label: '$3884.39',
            },
            {
                x: 1645056000000,
                y: 2002.01,
                label: '$2002.01',
            },
            {
                x: 1645142400000,
                y: 1186.69,
                label: '$1186.69',
            },
            {
                x: 1645228800000,
                y: 1312.35,
                label: '$1312.35',
            },
            {
                x: 1645315200000,
                y: 3353.77,
                label: '$3353.77',
            },
            {
                x: 1645401600000,
                y: 4770.2,
                label: '$4770.2',
            },
            {
                x: 1645488000000,
                y: 2861.46,
                label: '$2861.46',
            },
            {
                x: 1645574400000,
                y: 1659,
                label: '$1659',
            },
            {
                x: 1645660800000,
                y: -108.29,
                label: '$-108.29',
            },
            {
                x: 1645747200000,
                y: -982.37,
                label: '$-982.37',
            },
            {
                x: 1645833600000,
                y: 333.09,
                label: '$333.09',
            },
            {
                x: 1645920000000,
                y: 2155.24,
                label: '$2155.24',
            },
            {
                x: 1646006400000,
                y: 1162.43,
                label: '$1162.43',
            },
            {
                x: 1646092800000,
                y: 1166.61,
                label: '$1166.61',
            },
        ],
        title: 'Line Graph',
        name: 'Value 1',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 340.3,
                label: '$340.3',
            },
            {
                x: 1643760000000,
                y: 2471.82,
                label: '$2471.82',
            },
            {
                x: 1643846400000,
                y: 529.56,
                label: '$529.56',
            },
            {
                x: 1643932800000,
                y: 1663.67,
                label: '$1663.67',
            },
            {
                x: 1644019200000,
                y: 2134.97,
                label: '$2134.97',
            },
            {
                x: 1644105600000,
                y: 3761.53,
                label: '$3761.53',
            },
            {
                x: 1644192000000,
                y: 1301.55,
                label: '$1301.55',
            },
            {
                x: 1644278400000,
                y: 3423.35,
                label: '$3423.35',
            },
            {
                x: 1644364800000,
                y: 2747.74,
                label: '$2747.74',
            },
            {
                x: 1644451200000,
                y: 5073.93,
                label: '$5073.93',
            },
            {
                x: 1644537600000,
                y: 6844.62,
                label: '$6844.62',
            },
            {
                x: 1644624000000,
                y: 8460.86,
                label: '$8460.86',
            },
            {
                x: 1644710400000,
                y: 9496.45,
                label: '$9496.45',
            },
            {
                x: 1644796800000,
                y: 7215.15,
                label: '$7215.15',
            },
            {
                x: 1644883200000,
                y: 6527.58,
                label: '$6527.58',
            },
            {
                x: 1644969600000,
                y: 7611.97,
                label: '$7611.97',
            },
            {
                x: 1645056000000,
                y: 8970.63,
                label: '$8970.63',
            },
            {
                x: 1645142400000,
                y: 7097.47,
                label: '$7097.47',
            },
            {
                x: 1645228800000,
                y: 9201.15,
                label: '$9201.15',
            },
            {
                x: 1645315200000,
                y: 8417.03,
                label: '$8417.03',
            },
            {
                x: 1645401600000,
                y: 8853.57,
                label: '$8853.57',
            },
            {
                x: 1645488000000,
                y: 9524.27,
                label: '$9524.27',
            },
            {
                x: 1645574400000,
                y: 11695.93,
                label: '$11695.93',
            },
            {
                x: 1645660800000,
                y: 12302.77,
                label: '$12302.77',
            },
            {
                x: 1645747200000,
                y: 13624.34,
                label: '$13624.34',
            },
            {
                x: 1645833600000,
                y: 13236.8,
                label: '$13236.8',
            },
            {
                x: 1645920000000,
                y: 13940.84,
                label: '$13940.84',
            },
            {
                x: 1646006400000,
                y: 16020.66,
                label: '$16020.66',
            },
            {
                x: 1646092800000,
                y: 17547.55,
                label: '$17547.55',
            },
        ],
        title: 'Line Graph',
        name: 'Value 2',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 2402.49,
                label: '$2402.49',
            },
            {
                x: 1643760000000,
                y: 182.51,
                label: '$182.51',
            },
            {
                x: 1643846400000,
                y: -2202.33,
                label: '$-2202.33',
            },
            {
                x: 1643932800000,
                y: -2588.47,
                label: '$-2588.47',
            },
            {
                x: 1644019200000,
                y: -743.1,
                label: '$-743.1',
            },
            {
                x: 1644105600000,
                y: -2348.05,
                label: '$-2348.05',
            },
            {
                x: 1644192000000,
                y: -3619.6,
                label: '$-3619.6',
            },
            {
                x: 1644278400000,
                y: -2658.36,
                label: '$-2658.36',
            },
            {
                x: 1644364800000,
                y: -2074.69,
                label: '$-2074.69',
            },
            {
                x: 1644451200000,
                y: -4296.3,
                label: '$-4296.3',
            },
            {
                x: 1644537600000,
                y: -2029.44,
                label: '$-2029.44',
            },
            {
                x: 1644624000000,
                y: -2910.52,
                label: '$-2910.52',
            },
            {
                x: 1644710400000,
                y: -3751.44,
                label: '$-3751.44',
            },
            {
                x: 1644796800000,
                y: -4322.59,
                label: '$-4322.59',
            },
            {
                x: 1644883200000,
                y: -6187.51,
                label: '$-6187.51',
            },
            {
                x: 1644969600000,
                y: -3965.52,
                label: '$-3965.52',
            },
            {
                x: 1645056000000,
                y: -5565.79,
                label: '$-5565.79',
            },
            {
                x: 1645142400000,
                y: -3156.21,
                label: '$-3156.21',
            },
            {
                x: 1645228800000,
                y: -741.71,
                label: '$-741.71',
            },
            {
                x: 1645315200000,
                y: 131.72,
                label: '$131.72',
            },
            {
                x: 1645401600000,
                y: 2329.41,
                label: '$2329.41',
            },
            {
                x: 1645488000000,
                y: 743.32,
                label: '$743.32',
            },
            {
                x: 1645574400000,
                y: -1386.06,
                label: '$-1386.06',
            },
            {
                x: 1645660800000,
                y: -23.59,
                label: '$-23.59',
            },
            {
                x: 1645747200000,
                y: -446.53,
                label: '$-446.53',
            },
            {
                x: 1645833600000,
                y: -2482.72,
                label: '$-2482.72',
            },
            {
                x: 1645920000000,
                y: -1214.99,
                label: '$-1214.99',
            },
            {
                x: 1646006400000,
                y: 745.71,
                label: '$745.71',
            },
            {
                x: 1646092800000,
                y: 532.04,
                label: '$532.04',
            },
        ],
        title: 'Line Graph',
        name: 'Value 3',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 1659.13,
                label: '$1659.13',
            },
            {
                x: 1643760000000,
                y: 2010.16,
                label: '$2010.16',
            },
            {
                x: 1643846400000,
                y: 2506.64,
                label: '$2506.64',
            },
            {
                x: 1643932800000,
                y: 3025.7,
                label: '$3025.7',
            },
            {
                x: 1644019200000,
                y: 3961.44,
                label: '$3961.44',
            },
            {
                x: 1644105600000,
                y: 3061.87,
                label: '$3061.87',
            },
            {
                x: 1644192000000,
                y: 5453.7,
                label: '$5453.7',
            },
            {
                x: 1644278400000,
                y: 7225.72,
                label: '$7225.72',
            },
            {
                x: 1644364800000,
                y: 5288.24,
                label: '$5288.24',
            },
            {
                x: 1644451200000,
                y: 4039.02,
                label: '$4039.02',
            },
            {
                x: 1644537600000,
                y: 1949.47,
                label: '$1949.47',
            },
            {
                x: 1644624000000,
                y: -131.99,
                label: '$-131.99',
            },
            {
                x: 1644710400000,
                y: -190.02,
                label: '$-190.02',
            },
            {
                x: 1644796800000,
                y: -2423.83,
                label: '$-2423.83',
            },
            {
                x: 1644883200000,
                y: -4627.52,
                label: '$-4627.52',
            },
            {
                x: 1644969600000,
                y: -3025.02,
                label: '$-3025.02',
            },
            {
                x: 1645056000000,
                y: -1952.73,
                label: '$-1952.73',
            },
            {
                x: 1645142400000,
                y: 177.11,
                label: '$177.11',
            },
            {
                x: 1645228800000,
                y: -800.98,
                label: '$-800.98',
            },
            {
                x: 1645315200000,
                y: 768.99,
                label: '$768.99',
            },
            {
                x: 1645401600000,
                y: 655.82,
                label: '$655.82',
            },
            {
                x: 1645488000000,
                y: 2238.12,
                label: '$2238.12',
            },
            {
                x: 1645574400000,
                y: -38.5,
                label: '$-38.5',
            },
            {
                x: 1645660800000,
                y: -1196.35,
                label: '$-1196.35',
            },
            {
                x: 1645747200000,
                y: 946.44,
                label: '$946.44',
            },
            {
                x: 1645833600000,
                y: 817.48,
                label: '$817.48',
            },
            {
                x: 1645920000000,
                y: 293.82,
                label: '$293.82',
            },
            {
                x: 1646006400000,
                y: -1531.37,
                label: '$-1531.37',
            },
            {
                x: 1646092800000,
                y: 545.94,
                label: '$545.94',
            },
        ],
        title: 'Line Graph',
        name: 'Value 4',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 712.41,
                label: '$712.41',
            },
            {
                x: 1643760000000,
                y: -1413.36,
                label: '$-1413.36',
            },
            {
                x: 1643846400000,
                y: -2274.74,
                label: '$-2274.74',
            },
            {
                x: 1643932800000,
                y: -3396.13,
                label: '$-3396.13',
            },
            {
                x: 1644019200000,
                y: -2462.16,
                label: '$-2462.16',
            },
            {
                x: 1644105600000,
                y: -4740.43,
                label: '$-4740.43',
            },
            {
                x: 1644192000000,
                y: -4164.97,
                label: '$-4164.97',
            },
            {
                x: 1644278400000,
                y: -1933.18,
                label: '$-1933.18',
            },
            {
                x: 1644364800000,
                y: -1938.8,
                label: '$-1938.8',
            },
            {
                x: 1644451200000,
                y: -2565.66,
                label: '$-2565.66',
            },
            {
                x: 1644537600000,
                y: -3636.67,
                label: '$-3636.67',
            },
            {
                x: 1644624000000,
                y: -2633.09,
                label: '$-2633.09',
            },
            {
                x: 1644710400000,
                y: -803.22,
                label: '$-803.22',
            },
            {
                x: 1644796800000,
                y: 400.72,
                label: '$400.72',
            },
            {
                x: 1644883200000,
                y: -1859.62,
                label: '$-1859.62',
            },
            {
                x: 1644969600000,
                y: -2777.84,
                label: '$-2777.84',
            },
            {
                x: 1645056000000,
                y: -2515.71,
                label: '$-2515.71',
            },
            {
                x: 1645142400000,
                y: -3979.22,
                label: '$-3979.22',
            },
            {
                x: 1645228800000,
                y: -5790.6,
                label: '$-5790.6',
            },
            {
                x: 1645315200000,
                y: -8049.3,
                label: '$-8049.3',
            },
            {
                x: 1645401600000,
                y: -7924.14,
                label: '$-7924.14',
            },
            {
                x: 1645488000000,
                y: -10198.63,
                label: '$-10198.63',
            },
            {
                x: 1645574400000,
                y: -8511.37,
                label: '$-8511.37',
            },
            {
                x: 1645660800000,
                y: -6037.33,
                label: '$-6037.33',
            },
            {
                x: 1645747200000,
                y: -8014.84,
                label: '$-8014.84',
            },
            {
                x: 1645833600000,
                y: -5565.16,
                label: '$-5565.16',
            },
            {
                x: 1645920000000,
                y: -4305.32,
                label: '$-4305.32',
            },
            {
                x: 1646006400000,
                y: -6573.13,
                label: '$-6573.13',
            },
            {
                x: 1646092800000,
                y: -7835.57,
                label: '$-7835.57',
            },
        ],
        title: 'Line Graph',
        name: 'Value 5',
    },
];

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
