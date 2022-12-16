import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-bar-chart',
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
        series: {
            type: { name: 'object', required: true },
            description:
                'The series is an array of one to five arrays of point objects, each point contains an `x`, `y`, and `label`. `x` is an epoch/unix time code, `y` is a numeric value, `label` is what is displayed for the `y` value in the tool tip',
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
        stacked: {
            type: { name: 'boolean', required: false },
            description: 'Stacked can bet set to `true` or `false` and defaults to false',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        class: {
            type: { name: 'string', require: false },
            description: 'A class name that will be added to the main chart container',
        },
    },
};

const sampleSeriesData = [
    {
        data: [
            {
                x: 1643673600000,
                y: 686.42,
                label: '$686.42',
            },
            {
                x: 1643760000000,
                y: 3395.53,
                label: '$3395.53',
            },
            {
                x: 1643846400000,
                y: 4623.43,
                label: '$4623.43',
            },
            {
                x: 1643932800000,
                y: 742.12,
                label: '$742.12',
            },
            {
                x: 1644019200000,
                y: 4525.82,
                label: '$4525.82',
            },
            {
                x: 1644105600000,
                y: 1568.92,
                label: '$1568.92',
            },
            {
                x: 1644192000000,
                y: 3511.5,
                label: '$3511.5',
            },
            {
                x: 1644278400000,
                y: 313.66,
                label: '$313.66',
            },
            {
                x: 1644364800000,
                y: 653.18,
                label: '$653.18',
            },
            {
                x: 1644451200000,
                y: 3117,
                label: '$3117',
            },
            {
                x: 1644537600000,
                y: 4497.92,
                label: '$4497.92',
            },
            {
                x: 1644624000000,
                y: 4206.77,
                label: '$4206.77',
            },
            {
                x: 1644710400000,
                y: 4640.38,
                label: '$4640.38',
            },
            {
                x: 1644796800000,
                y: 1849.15,
                label: '$1849.15',
            },
            {
                x: 1644883200000,
                y: 4105.95,
                label: '$4105.95',
            },
            {
                x: 1644969600000,
                y: 2996.36,
                label: '$2996.36',
            },
            {
                x: 1645056000000,
                y: 2358.2,
                label: '$2358.2',
            },
            {
                x: 1645142400000,
                y: 3641.09,
                label: '$3641.09',
            },
            {
                x: 1645228800000,
                y: 3654.44,
                label: '$3654.44',
            },
            {
                x: 1645315200000,
                y: 1418.79,
                label: '$1418.79',
            },
            {
                x: 1645401600000,
                y: 207.46,
                label: '$207.46',
            },
            {
                x: 1645488000000,
                y: 1606.93,
                label: '$1606.93',
            },
            {
                x: 1645574400000,
                y: 604.25,
                label: '$604.25',
            },
            {
                x: 1645660800000,
                y: 3205.45,
                label: '$3205.45',
            },
        ],
        title: 'Bar Chart',
        name: 'Value 1',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 2016.88,
                label: '$2016.88',
            },
            {
                x: 1643760000000,
                y: 3035.94,
                label: '$3035.94',
            },
            {
                x: 1643846400000,
                y: 1452.5,
                label: '$1452.5',
            },
            {
                x: 1643932800000,
                y: 582.67,
                label: '$582.67',
            },
            {
                x: 1644019200000,
                y: 1283.86,
                label: '$1283.86',
            },
            {
                x: 1644105600000,
                y: 3912.73,
                label: '$3912.73',
            },
            {
                x: 1644192000000,
                y: 2448.16,
                label: '$2448.16',
            },
            {
                x: 1644278400000,
                y: 717.37,
                label: '$717.37',
            },
            {
                x: 1644364800000,
                y: 590.24,
                label: '$590.24',
            },
            {
                x: 1644451200000,
                y: 1308.96,
                label: '$1308.96',
            },
            {
                x: 1644537600000,
                y: 3744.15,
                label: '$3744.15',
            },
            {
                x: 1644624000000,
                y: 1693.57,
                label: '$1693.57',
            },
            {
                x: 1644710400000,
                y: 4594.56,
                label: '$4594.56',
            },
            {
                x: 1644796800000,
                y: 3426.48,
                label: '$3426.48',
            },
            {
                x: 1644883200000,
                y: 2364.75,
                label: '$2364.75',
            },
            {
                x: 1644969600000,
                y: 3338.47,
                label: '$3338.47',
            },
            {
                x: 1645056000000,
                y: 2217.38,
                label: '$2217.38',
            },
            {
                x: 1645142400000,
                y: 4269.42,
                label: '$4269.42',
            },
            {
                x: 1645228800000,
                y: 1811.27,
                label: '$1811.27',
            },
            {
                x: 1645315200000,
                y: 4247.46,
                label: '$4247.46',
            },
            {
                x: 1645401600000,
                y: 3230.72,
                label: '$3230.72',
            },
            {
                x: 1645488000000,
                y: 236.64,
                label: '$236.64',
            },
            {
                x: 1645574400000,
                y: 2960.39,
                label: '$2960.39',
            },
            {
                x: 1645660800000,
                y: 720.03,
                label: '$720.03',
            },
        ],
        title: 'Bar Chart',
        name: 'Value 2',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 3744.38,
                label: '$3744.38',
            },
            {
                x: 1643760000000,
                y: 4091.42,
                label: '$4091.42',
            },
            {
                x: 1643846400000,
                y: 1269.12,
                label: '$1269.12',
            },
            {
                x: 1643932800000,
                y: 4966.14,
                label: '$4966.14',
            },
            {
                x: 1644019200000,
                y: 1268.94,
                label: '$1268.94',
            },
            {
                x: 1644105600000,
                y: 4357.47,
                label: '$4357.47',
            },
            {
                x: 1644192000000,
                y: 3517.96,
                label: '$3517.96',
            },
            {
                x: 1644278400000,
                y: 4678.7,
                label: '$4678.7',
            },
            {
                x: 1644364800000,
                y: 4080.55,
                label: '$4080.55',
            },
            {
                x: 1644451200000,
                y: 1224.7,
                label: '$1224.7',
            },
            {
                x: 1644537600000,
                y: 356.99,
                label: '$356.99',
            },
            {
                x: 1644624000000,
                y: 1534.12,
                label: '$1534.12',
            },
            {
                x: 1644710400000,
                y: 328.14,
                label: '$328.14',
            },
            {
                x: 1644796800000,
                y: 4199.1,
                label: '$4199.1',
            },
            {
                x: 1644883200000,
                y: 4078.09,
                label: '$4078.09',
            },
            {
                x: 1644969600000,
                y: 1475.89,
                label: '$1475.89',
            },
            {
                x: 1645056000000,
                y: 2874.13,
                label: '$2874.13',
            },
            {
                x: 1645142400000,
                y: 2888.78,
                label: '$2888.78',
            },
            {
                x: 1645228800000,
                y: 658.46,
                label: '$658.46',
            },
            {
                x: 1645315200000,
                y: 2050.67,
                label: '$2050.67',
            },
            {
                x: 1645401600000,
                y: 1971.17,
                label: '$1971.17',
            },
            {
                x: 1645488000000,
                y: 4168.71,
                label: '$4168.71',
            },
            {
                x: 1645574400000,
                y: 425.5,
                label: '$425.5',
            },
            {
                x: 1645660800000,
                y: 3665.67,
                label: '$3665.67',
            },
        ],
        title: 'Bar Chart',
        name: 'Value 3',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 3840.06,
                label: '$3840.06',
            },
            {
                x: 1643760000000,
                y: 4828.12,
                label: '$4828.12',
            },
            {
                x: 1643846400000,
                y: 2265.45,
                label: '$2265.45',
            },
            {
                x: 1643932800000,
                y: 4496.69,
                label: '$4496.69',
            },
            {
                x: 1644019200000,
                y: 4393.03,
                label: '$4393.03',
            },
            {
                x: 1644105600000,
                y: 624.28,
                label: '$624.28',
            },
            {
                x: 1644192000000,
                y: 3722.88,
                label: '$3722.88',
            },
            {
                x: 1644278400000,
                y: 4590.79,
                label: '$4590.79',
            },
            {
                x: 1644364800000,
                y: 1679.32,
                label: '$1679.32',
            },
            {
                x: 1644451200000,
                y: 4748.64,
                label: '$4748.64',
            },
            {
                x: 1644537600000,
                y: 1822.92,
                label: '$1822.92',
            },
            {
                x: 1644624000000,
                y: 1384.22,
                label: '$1384.22',
            },
            {
                x: 1644710400000,
                y: 2966.97,
                label: '$2966.97',
            },
            {
                x: 1644796800000,
                y: 4730.39,
                label: '$4730.39',
            },
            {
                x: 1644883200000,
                y: 3929.62,
                label: '$3929.62',
            },
            {
                x: 1644969600000,
                y: 3731.83,
                label: '$3731.83',
            },
            {
                x: 1645056000000,
                y: 4785.14,
                label: '$4785.14',
            },
            {
                x: 1645142400000,
                y: 2657.6,
                label: '$2657.6',
            },
            {
                x: 1645228800000,
                y: 4816.07,
                label: '$4816.07',
            },
            {
                x: 1645315200000,
                y: 4493.61,
                label: '$4493.61',
            },
            {
                x: 1645401600000,
                y: 2887.25,
                label: '$2887.25',
            },
            {
                x: 1645488000000,
                y: 1905.9,
                label: '$1905.9',
            },
            {
                x: 1645574400000,
                y: 706.83,
                label: '$706.83',
            },
            {
                x: 1645660800000,
                y: 1516,
                label: '$1516',
            },
        ],
        title: 'Bar Chart',
        name: 'Value 4',
    },
    {
        data: [
            {
                x: 1643673600000,
                y: 3510.98,
                label: '$3510.98',
            },
            {
                x: 1643760000000,
                y: 2558.58,
                label: '$2558.58',
            },
            {
                x: 1643846400000,
                y: 2028.93,
                label: '$2028.93',
            },
            {
                x: 1643932800000,
                y: 3998.57,
                label: '$3998.57',
            },
            {
                x: 1644019200000,
                y: 1234.8,
                label: '$1234.8',
            },
            {
                x: 1644105600000,
                y: 3512.28,
                label: '$3512.28',
            },
            {
                x: 1644192000000,
                y: 554.04,
                label: '$554.04',
            },
            {
                x: 1644278400000,
                y: 4934.67,
                label: '$4934.67',
            },
            {
                x: 1644364800000,
                y: 3190.14,
                label: '$3190.14',
            },
            {
                x: 1644451200000,
                y: 2894.57,
                label: '$2894.57',
            },
            {
                x: 1644537600000,
                y: 68.99,
                label: '$68.99',
            },
            {
                x: 1644624000000,
                y: 3051.49,
                label: '$3051.49',
            },
            {
                x: 1644710400000,
                y: 1766.32,
                label: '$1766.32',
            },
            {
                x: 1644796800000,
                y: 1998.19,
                label: '$1998.19',
            },
            {
                x: 1644883200000,
                y: 3695.29,
                label: '$3695.29',
            },
            {
                x: 1644969600000,
                y: 46.56,
                label: '$46.56',
            },
            {
                x: 1645056000000,
                y: 3877.75,
                label: '$3877.75',
            },
            {
                x: 1645142400000,
                y: 2752.76,
                label: '$2752.76',
            },
            {
                x: 1645228800000,
                y: 4341.6,
                label: '$4341.6',
            },
            {
                x: 1645315200000,
                y: 1836.76,
                label: '$1836.76',
            },
            {
                x: 1645401600000,
                y: 346.63,
                label: '$346.63',
            },
            {
                x: 1645488000000,
                y: 1149.93,
                label: '$1149.93',
            },
            {
                x: 1645574400000,
                y: 4566.77,
                label: '$4566.77',
            },
            {
                x: 1645660800000,
                y: 4337.08,
                label: '$4337.08',
            },
        ],
        title: 'Bar Chart',
        name: 'Value 5',
    },
];
function getSeriesData(series, days) {
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
            code: tagToString('bar-chart', singleSeriesFiveDays.args),
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
            code: tagToString('bar-chart', singleSeriesThirteenDays.args),
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
            code: tagToString('bar-chart', singleSeriesThirtyDays.args),
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
            code: tagToString('bar-chart', twoSeriesEightDays.args),
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
            code: tagToString('bar-chart', threeSeriesThreeDays.args),
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
            code: tagToString('bar-chart', fourSeriesFourDays.args),
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
            code: tagToString('bar-chart', fiveSeriesThreeDays.args),
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
            code: tagToString('bar-chart', fiveSeriesSixDays.args),
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
            code: tagToString('bar-chart', twoSeriesStacked.args),
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
            code: tagToString('bar-chart', threeSeriesStacked.args),
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
            code: tagToString('bar-chart', fourSeriesStacked.args),
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
            code: tagToString('bar-chart', fiveSeriesStacked.args),
        },
    },
};
