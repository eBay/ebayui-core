export const chartFontFamily = '"Market Sans", Arial, sans-serif';
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
// patterns are in highcharts PatternOptionsObject format
// refer to https://api.highcharts.com/class-reference/Highcharts.PatternOptionsObject
export const pattern1 = {
    pattern: {
        path: {
            // d is a standard SVG path definition string
            // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
            d: 'M0 0 L0 3', // draw a 3 until vertical line
        },
        width: 4.5, // defines the x bounds of the repeating pattern
        height: 3, // defines the  y bounds of the repeating pattern
        backgroundColor: chartTertiaryBackgroundColor, // sets the patterns background color
        color: chartTertiaryStrokeColor, // sets the patterns stroke color
        patternTransform: 'rotate(-60)', // rotates the path -60 degrees
    },
};
export const pattern2 = {
    pattern: {
        path: {
            // d is a standard SVG path definition string
            // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
            d: 'M0 0 L3 0',
        },
        width: 3, // defines the x bounds of the repeating pattern
        height: 5, // defines the  y bounds of the repeating pattern
        backgroundColor: chartQuaternaryBackgroundColor, // sets the patterns background color
        color: chartQuaternaryStrokeColor, // sets the patterns stroke color
    },
};
// configure the color sequences based on how many series are used
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
// function is used to set up the colors including lineColor(svg stroke) on each of the series objects
// based on the length of the series array
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
