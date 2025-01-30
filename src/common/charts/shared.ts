export const chartFontFamily = '"Market Sans", Arial, sans-serif',
    backgroundColor = "var(--color-background-primary)",
    gridColor = "var(--color-data-viz-grid)",
    labelsColor = "var(--color-foreground-secondary)",
    legendColor = "var(--color-foreground-primary)",
    legendInactiveColor = "var(--color-data-viz-legend-inactive)",
    legendHoverColor = "var(--color-data-viz-legend-hover)",
    tooltipBackgroundColor = "var(--color-background-primary)",
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
    setSeriesColors = function (series: Highcharts.SeriesOptions[]) {
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
            if (series[i].type === "bar") {
                (series[i] as Highcharts.SeriesBarOptions).borderColor = color;
                (series[i] as Highcharts.SeriesBarOptions).color = color;
            } else {
                (series[i] as Highcharts.SeriesAreaOptions).lineColor = color;
                (series[i] as Highcharts.SeriesAreaOptions).fillOpacity = 1;
            }
        }
    },
    setDonutColors = function (series: any) {
        const colors = [
            { lineColor: chartPrimaryColor, borderColor: chartPrimaryColor },
            {
                lineColor: chartSecondaryColor,
                borderColor: chartSecondaryColor,
            },
            {
                lineColor: patternTertiary,
                borderColor: chartTertiaryStrokeColor,
            },
            {
                lineColor: patternQuaternary,
                borderColor: chartQuaternaryStrokeColor,
            },
            {
                lineColor: chartQuinaryBackgroundColor,
                borderColor: chartQuinaryStrokeColor,
            },
        ];

        const { data } = series;

        data.forEach((item: any, index: number) => {
            item.lineColor = colors[index].lineColor;
            item.borderColor = colors[index].borderColor;
        });

        return colors.map((color: any) => color.lineColor);
    },
    setSeriesMarkerStyles = function (series: Highcharts.SeriesAreaOptions[]) {
        series.forEach((s, i) => {
            s.zIndex = series.length - i;
            s.marker = {
                symbol: "circle",
                lineWidth: 1,
                fillColor: "black",
                lineColor: "white",
                states: {
                    hover: {
                        animation: { duration: 0 },
                        radius: 4,
                        lineWidth: 2,
                    },
                    normal: {
                        animation: false,
                    },
                },
            };
        });
    };
