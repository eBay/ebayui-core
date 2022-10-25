import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

function getPositiveTrend(days) {
    const data = [];
    const length = days !== undefined ? days : 30;
    for (let i = 0; i < length; i++) {
        const d = new Date(`Feb ${i + 1}, 2022 00:00:00 UTC`);

        let v = i === 0 ? 0 : data[i - 1].y;
        v = parseFloat((v + Math.random() * 5000 - Math.random() * 2500).toFixed(2));
        if (v < 0) {
            v = 0;
        }
        data.push({
            x: d.getTime(),
            y: v,
            label: `$${v}`,
        });
    }

    return {
        data,
    };
}

const multipleLineSeries = (num, days) => {
    const series = [];
    const totalDays = days || 10 + Math.floor(Math.random() * 20);
    for (let i = 0; i < num; i++) {
        series.push(getPositiveTrend(totalDays));
        series[series.length - 1].name = `Value ${i + 1}`;
    }
    return series;
};

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-area-chart',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    title: 'Single series sample area chart',
    description: 'this chart displays 30 days of sample values',
    series: multipleLineSeries(1, 30),
};

export const TwoSeries = Template.bind({});
TwoSeries.args = {
    title: 'Two series sample area chart',
    description: 'this chart displays 30 days of values for sample1 and sample2',
    series: multipleLineSeries(2, 30),
};

export const ThreeSeries = Template.bind({});
ThreeSeries.args = {
    title: 'Three series sample area chart',
    description: 'this chart displays 30 days of values for sample1, sample2 and sample3',
    series: multipleLineSeries(3, 30),
};

export const FourSeries = Template.bind({});
FourSeries.args = {
    title: 'Four series sample area chart',
    description: 'this chart displays 30 days of values for sample1, sample2, sample3, and sample4',
    series: multipleLineSeries(4, 30),
};

export const FiveSeries = Template.bind({});
FiveSeries.args = {
    title: 'Five series sample area chart',
    description:
        'this chart displays 30 days of values for sample1, sample2, sample3, sample4, and sample5',
    series: multipleLineSeries(5, 30),
};
