export const backgroundColor = 'var(--color-background-primary)';
export const gridColor = 'var(--color-data-viz-grid)';
export const labelsColor = 'var(--color-data-viz-labels)';
export const legendColor = 'var(--color-data-viz-legend)';
export const legendInactiveColor = 'var(--color-data-viz-legend-inactive)';
export const legendHoverColor = 'var(--color-data-viz-legend-hover)';
export const tooltipBackgroundColor = 'var(--color-neutral-0)';
export const tooltipShadows =
    'drop-shadow(0 2px 7px var(--color-data-viz-tooltip-shadow-primary)) drop-shadow(0 5px 7px var(--color-data-viz-tooltip-shadow-secondary))';
export const lineChartPrimaryColor = 'var(--color-data-viz-line-chart-primary)';
export const lineChartSecondaryColor = 'var(--color-data-viz-line-chart-secondary)';
export const lineChartTertiaryColor = 'var(--color-data-viz-line-chart-tertiary)';
export const lineChartQueternaryColor = 'var(--color-data-viz-line-chart-queternary)';
export const lineChartQuinaryColor = 'var(--color-data-viz-line-chart-quinary)';
export const trendPositiveColor = 'var(--color-data-viz-trend-positive)';
export const trendNegativeColor = 'var(--color-data-viz-trend-negative)';
export const chartPrimaryColor = 'var(--color-data-viz-chart-primary)';
export const chartSecondaryColor = 'var(--color-data-viz-chart-secondary)';
export const chartTertiaryBackgroundColor = 'var(--color-data-viz-chart-tertiary-background)';
export const chartTertiaryStrokeColor = 'var(--color-data-viz-chart-tertiary-stroke)';
export const chartQuaternaryBackgroundColor = 'var(--color-data-viz-chart-quaternary-background)';
export const chartQuaternaryStrokeColor = 'var(--color-data-viz-chart-quaternary-stroke)';
export const chartQuinaryBackgroundColor = 'var(--color-data-viz-chart-quinary-background)';
export const chartQuinaryStrokeColor = 'var(--color-data-viz-chart-quinary-stroke)';
export const pattern1 = {
    pattern: {
        path: {
            d: 'M0 0 L0 3',
        },
        width: 4.5,
        height: 3,
        backgroundColor: chartTertiaryBackgroundColor,
        color: chartTertiaryStrokeColor,
        patternTransform: 'rotate(-60 50 50)',
    },
};
export const pattern2 = {
    pattern: {
        path: {
            d: 'M0 0 L3 0',
        },
        width: 3,
        height: 5,
        backgroundColor: chartQuaternaryBackgroundColor,
        color: chartQuaternaryStrokeColor,
    },
};
export const colorsSingle = [chartPrimaryColor];
export const colorsTwo = [chartSecondaryColor, chartPrimaryColor];
export const colorsThree = [chartSecondaryColor, chartPrimaryColor, pattern1];
export const colorsMore = [
    chartSecondaryColor,
    pattern1,
    chartPrimaryColor,
    pattern2,
    chartQuinaryBackgroundColor,
];
export function setSeriesColors(series) {
    let colors;
    switch (series.length) {
        case 1:
            colors = colorsSingle;
            series[0].lineColor = series[0].borderColor = chartPrimaryColor;
            break;
        case 2:
            colors = colorsTwo;
            series[0].lineColor = series[0].borderColor = chartSecondaryColor;
            series[1].lineColor = series[1].borderColor = chartPrimaryColor;
            break;
        case 3:
            colors = colorsThree;
            series[0].lineColor = series[0].borderColor = chartSecondaryColor;
            series[1].lineColor = series[1].borderColor = chartPrimaryColor;
            series[2].lineColor = series[2].borderColor = chartTertiaryStrokeColor;
            break;
        default:
            colors = colorsMore;
            series[0].lineColor = series[0].borderColor = chartSecondaryColor;
            series[1].lineColor = series[1].borderColor = chartTertiaryStrokeColor;
            series[2].lineColor = series[2].borderColor = chartPrimaryColor;
            if (series.length > 3) {
                series[3].lineColor = series[3].borderColor = chartQuaternaryStrokeColor;
            }
            if (series.length > 4) {
                series[4].lineColor = series[4].borderColor = chartQuaternaryStrokeColor;
            }
    }
    return colors;
}
