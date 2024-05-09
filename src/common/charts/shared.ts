export const chartFontFamily = '"Market Sans", Arial, sans-serif',
    backgroundColor = "var(--color-background-primary)",
    gridColor = "var(--color-data-viz-grid)",
    labelsColor = "var(--color-data-viz-labels)",
    legendColor = "var(--color-data-viz-legend)",
    legendInactiveColor = "var(--color-data-viz-legend-inactive)",
    legendHoverColor = "var(--color-data-viz-legend-hover)",
    tooltipBackgroundColor = "var(--color-neutral-0)",
    tooltipShadows =
        "drop-shadow(0 2px 7px var(--color-data-viz-tooltip-shadow-primary)) drop-shadow(0 5px 7px var(--color-data-viz-tooltip-shadow-secondary))",
    lineChartPrimaryColor = "var(--color-data-viz-line-chart-primary)",
    lineChartSecondaryColor = "var(--color-data-viz-line-chart-secondary)",
    lineChartTertiaryColor = "var(--color-data-viz-line-chart-tertiary)",
    lineChartQueternaryColor = "var(--color-data-viz-line-chart-queternary)",
    lineChartQuinaryColor = "var(--color-data-viz-line-chart-quinary)",
    trendPositiveColor = "var(--color-data-viz-trend-positive)",
    trendNegativeColor = "var(--color-data-viz-trend-negative)",
    chartPrimaryColor = "var(--color-data-viz-chart-primary)",
    chartSecondaryColor = "var(--color-data-viz-chart-secondary)",
    chartTertiaryBackgroundColor =
        "var(--color-data-viz-chart-tertiary-background)",
    chartTertiaryStrokeColor = "var(--color-data-viz-chart-tertiary-stroke)",
    chartQuaternaryBackgroundColor =
        "var(--color-data-viz-chart-quaternary-background)",
    chartQuaternaryStrokeColor =
        "var(--color-data-viz-chart-quaternary-stroke)",
    chartQuinaryBackgroundColor =
        "var(--color-data-viz-chart-quinary-background)",
    chartQuinaryStrokeColor = "var(--color-data-viz-chart-quinary-stroke)",
    // patterns are in highcharts PatternOptionsObject format
    // refer to https://api.highcharts.com/class-reference/Highcharts.PatternOptionsObject
    patternTertiary = {
        pattern: {
            path: {
                // d is a standard SVG path definition string
                // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
                d: "M0 0 L0 3", // draw a 3 until vertical line
            },
            width: 4.5, // defines the x bounds of the repeating pattern
            height: 3, // defines the  y bounds of the repeating pattern
            backgroundColor: chartTertiaryBackgroundColor, // sets the patterns background color
            color: chartTertiaryStrokeColor, // sets the patterns stroke color
            patternTransform: "rotate(-60)", // rotates the path -60 degrees
        },
    },
    patternQuaternary = {
        pattern: {
            path: {
                // d is a standard SVG path definition string
                // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
                d: "M0 0 L3 0",
            },
            width: 3, // defines the x bounds of the repeating pattern
            height: 5, // defines the  y bounds of the repeating pattern
            backgroundColor: chartQuaternaryBackgroundColor, // sets the patterns background color
            color: chartQuaternaryStrokeColor, // sets the patterns stroke color
        },
    },
    colorMapping = [
        chartPrimaryColor,
        chartSecondaryColor,
        patternTertiary,
        patternQuaternary,
        chartQuinaryBackgroundColor,
    ],
    // function is used to set up the colors including lineColor(svg stroke) on each of the series objects
    // based on the length of the series array
    setSeriesColors = function (series: Highcharts.PlotAreaOptions[]) {
        const strokeColorMapping = [
            chartPrimaryColor,
            chartSecondaryColor,
            chartTertiaryStrokeColor,
            chartQuaternaryStrokeColor,
            chartQuaternaryStrokeColor,
        ];

        for (let i = 0; i < series.length; i++) {
            // Added a modulus in case the user passes in more than 5 series so it doesn't error out
            const color = strokeColorMapping[i % strokeColorMapping.length];
            series[i].lineColor = color;
            series[i].borderColor = color;
        }
    },
    setDonutColors = function (series: any) {
        const colorsSingle = [chartPrimaryColor],
            colorsTwo = [chartPrimaryColor, chartSecondaryColor],
            colorsThree = [
                chartPrimaryColor,
                chartSecondaryColor,
                patternTertiary,
            ],
            colorsMore = [
                chartPrimaryColor,
                chartSecondaryColor,
                patternTertiary,
                patternQuaternary,
                chartQuinaryBackgroundColor,
            ];

        const { data } = series;
        let colors;
        switch (data.length) {
            case 1:
                colors = colorsSingle;
                data[0].lineColor = data[0].borderColor = chartPrimaryColor;
                break;
            case 2:
                colors = colorsTwo;
                data[0].lineColor = data[0].borderColor = chartPrimaryColor;
                data[1].lineColor = data[1].borderColor =
                chartSecondaryColor;
                break;
            case 3:
                colors = colorsThree;
                data[0].lineColor = data[0].borderColor = chartPrimaryColor;
                data[1].lineColor = data[1].borderColor = chartSecondaryColor
                    ;
                data[2].lineColor = data[2].borderColor = chartTertiaryStrokeColor;
                break;
            default:
                colors = colorsMore;
                data[0].lineColor = data[0].borderColor = chartPrimaryColor;
                data[1].lineColor = data[1].borderColor = chartSecondaryColor;
                data[2].lineColor = data[2].borderColor = chartTertiaryStrokeColor;
                if (data.length > 3) {
                    data[3].lineColor = data[3].borderColor =
                        chartQuaternaryStrokeColor;
                }
                if (data.length > 4) {
                    data[4].lineColor = data[4].borderColor =
                        chartQuinaryStrokeColor;
                }
        }
        return colors;
    },
    setLegendColors = function (series: any[]) {
        switch (series.length) {
            case 1:
                return ["primary"];
            case 2:
                console.log("legend colors");
                return ["secondary", "primary"];
            case 3:
                return ["secondary", "primary", "tertiary"];
            default:
                return [
                    "secondary",
                    "tertiary",
                    "primary",
                    "quaternary",
                    "quinary",
                ];
        }
    };
