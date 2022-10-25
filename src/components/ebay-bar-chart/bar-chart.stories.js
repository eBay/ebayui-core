import { addRenderBodies } from '../../../.storybook/utils';
// import { tagToString } from '../../../.storybook/storybook-code-source';
// import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});
function getBarChartData(days) {
    const data = [];
    const length = days !== undefined ? days : 14;
    for (let i = 0; i < length; i++) {
        const d = new Date(`Feb ${i + 1}, 2022 00:00:00 UTC`);

        const v = parseFloat((Math.random() * 5000).toFixed(2));
        data.push({
            x: d.getTime(),
            y: v,
            label: `$${v}`,
        });
    }

    return {
        data,
        title: 'Bar Chart',
    };
}

function multipleBarSeries(num, days) {
    const series = [];
    const totalDays = days || 10 + Math.floor(Math.random() * 20);
    for (let i = 0; i < num; i++) {
        series.push(getBarChartData(totalDays));
        series[series.length - 1].name = `Value ${i + 1}`;
    }
    return series;
}

export default {
    title: 'charts/ebay-bar-chart',
    component: Component,
    // parameters: {
    //     docs: {
    //         description: {
    //             component: Readme
    //         }
    //     }
    // },
};

export const singleSeriesFiveDays = Template.bind({});
singleSeriesFiveDays.args = {
    series: multipleBarSeries(1, 5),
};

export const singleSeriesThirteenDays = Template.bind({});
singleSeriesThirteenDays.args = {
    series: multipleBarSeries(1, 13),
};

export const singleSeriesThirtyDays = Template.bind({});
singleSeriesThirtyDays.args = {
    series: multipleBarSeries(1, 30),
};

export const twoSeriesEightDays = Template.bind({});
twoSeriesEightDays.args = {
    series: multipleBarSeries(2, 8),
};

export const threeSeriesThreeDays = Template.bind({});
threeSeriesThreeDays.args = {
    series: multipleBarSeries(3, 3),
};

export const fourSeriesFourDays = Template.bind({});
fourSeriesFourDays.args = {
    series: multipleBarSeries(4, 4),
};

export const fiveSeriesThreeDays = Template.bind({});
fiveSeriesThreeDays.args = {
    series: multipleBarSeries(5, 3),
};

export const fiveSeriesSixDays = Template.bind({});
fiveSeriesSixDays.args = {
    series: multipleBarSeries(5, 6),
};

export const twoSeriesStacked = Template.bind({});
twoSeriesStacked.args = {
    series: multipleBarSeries(2),
    stacked: true,
};

export const threeSeriesStacked = Template.bind({});
threeSeriesStacked.args = {
    series: multipleBarSeries(3),
    stacked: true,
};

export const fourSeriesStacked = Template.bind({});
fourSeriesStacked.args = {
    series: multipleBarSeries(4),
    stacked: true,
};

export const fiveSeriesStacked = Template.bind({});
fiveSeriesStacked.args = {
    series: multipleBarSeries(5),
    stacked: true,
};
