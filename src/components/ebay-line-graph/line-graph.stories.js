import { addRenderBodies } from '../../../.storybook/utils';
// import { tagToString } from '../../../.storybook/storybook-code-source';
// import Readme from './README.md';
import Component from './index.marko';

const sellingData = require('./selling-mock.json');

const getLineGraphData = (days) => {
    const data = [];
    const length = days !== undefined ? days : 14;
    for (let i = 0; i < length; i++) {
        const d = new Date(`Feb ${i + 1}, 2022 00:00:00 UTC`);

        let v = i === 0 ? 0 : data[i - 1].y;
        v = parseFloat((v + Math.random() * 5000 - 2500).toFixed(2));
        data.push({
            x: d.getTime(),
            y: v,
            label: `$${v}`,
        });
    }

    return {
        data,
        title: 'Line Graph',
    };
};

const multipleLineSeries = (num, days) => {
    const series = [];
    const totalDays = days || 10 + Math.floor(Math.random() * 20);
    for (let i = 0; i < num; i++) {
        series.push(getLineGraphData(totalDays));
        series[series.length - 1].name = `Value ${i + 1}`;
    }
    return series;
};

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

function getPositiveTrend(days) {
    const data = [];
    const length = days !== undefined ? days : 14;
    for (let i = 0; i < length; i++) {
        const d = new Date(`Feb ${i + 1}, 2022 00:00:00 UTC`);

        let v = i === 0 ? 0 : data[i - 1].y;
        v = parseFloat((v + Math.random() * 5000 - Math.random() * 2500).toFixed(2));

        data.push({
            x: d.getTime(),
            y: v,
            label: `$${v}`,
        });
    }

    return {
        data,
        title: 'Positive Trend',
    };
}
function getNegativeTrend(days) {
    const data = [];
    const length = days !== undefined ? days : 14;
    for (let i = 0; i < length; i++) {
        const d = new Date(`Feb ${i + 1}, 2022 00:00:00 UTC`);

        let v = i === 0 ? 30000 : data[i - 1].y;
        v = parseFloat((v - Math.random() * 5000 + Math.random() * 2500).toFixed(2));

        data.push({
            x: d.getTime(),
            y: v,
            label: `$${v}`,
        });
    }

    return {
        data,
        title: 'Negative Trend',
    };
}

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'charts/ebay-line-graph',
    component: Component,
    // parameters: {
    //     docs: {
    //         description: {
    //             component: Readme
    //         }
    //     }
    // },
};
function getTickPositions() {
    const min = Math.floor(this.dataMin);
    const max = Math.ceil(this.dataMax);
    return [min, (min + max) / 2, max];
}

export const Standard = Template.bind({});
Standard.args = {
    series: multipleLineSeries(1, 10),
};

export const TrendAutoPositive = Template.bind({});
TrendAutoPositive.args = {
    series: getPositiveTrend(30),
    trend: true,
};

export const TrendSetPositive = Template.bind({});
TrendSetPositive.args = {
    series: getLineGraphData(30),
    trend: 'positive',
};

export const TrendAutoNegative = Template.bind({});
TrendAutoNegative.args = {
    series: getNegativeTrend(30),
    trend: true,
};

export const TrendSetNegative = Template.bind({});
TrendSetNegative.args = {
    series: getLineGraphData(30),
    trend: 'negative',
};

export const TrendSetNeutral = Template.bind({});
TrendSetNeutral.args = {
    series: getLineGraphData(30),
    trend: 'neutral',
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

export const TwoSeries = Template.bind({});
TwoSeries.args = {
    series: multipleLineSeries(2),
};

export const TwoSeriesWithPlotPoints = Template.bind({});
TwoSeriesWithPlotPoints.args = {
    series: multipleLineSeries(2),
    plotPoints: true,
};

export const ThreeSeries = Template.bind({});
ThreeSeries.args = {
    series: multipleLineSeries(3),
};

export const ThreeSeriesWithPlotPoints = Template.bind({});
ThreeSeriesWithPlotPoints.args = {
    series: multipleLineSeries(3),
    plotPoints: true,
};

export const FourSeries = Template.bind({});
FourSeries.args = {
    series: multipleLineSeries(4),
};

export const FourSeriesWithPlotPoints = Template.bind({});
FourSeriesWithPlotPoints.args = {
    series: multipleLineSeries(4),
    plotPoints: true,
};

export const FiveSeries = Template.bind({});
FiveSeries.args = {
    series: multipleLineSeries(5),
};

export const FiveSeriesWithPlotPoints = Template.bind({});
FiveSeriesWithPlotPoints.args = {
    series: multipleLineSeries(5),
    plotPoints: true,
};
