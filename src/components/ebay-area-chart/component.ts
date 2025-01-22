import { load as highChartsLoad } from "@internal/highcharts";
import {
    chartFontFamily,
    backgroundColor,
    gridColor,
    labelsColor,
    legendColor,
    legendInactiveColor,
    legendHoverColor,
    tooltipBackgroundColor,
    tooltipShadows,
    setSeriesColors,
    colorMapping,
    setSeriesMarkerStyles,
} from "../../common/charts/shared";
import { ebayLegend } from "../../common/charts/legend";
import type { WithNormalizedProps } from "../../global";
import tooltipTemplate from "./tooltip.marko";
import type { Input as TooltipInput } from "./tooltip.marko";
import type HighchartsTypes from "highcharts";
declare const Highcharts: typeof HighchartsTypes;

// Extend highcharts series data with a label property
declare module "highcharts" {
    export interface Point {
        label?: string;
    }
}

interface AreaChartInput extends Omit<Marko.HTML.Div, `on${string}`> {
    title?: Highcharts.TitleOptions["text"];
    description?: Highcharts.SeriesAccessibilityOptionsObject["description"];
    series: Highcharts.SeriesAreaOptions | Highcharts.SeriesAreaOptions[];
    tooltipValueFormatter?: (value: string | number) => string;
    tooltipTitleFormatter?: (
        value: string | number,
        dateFormat: typeof Highcharts.dateFormat,
    ) => string;
    xLabelFormatter?: (
        value: string | number,
        dateFormat: typeof Highcharts.dateFormat,
    ) => string;
    yLabelFormatter?: (value: string | number) => string;
    areaType?: "areaspline" | "area";
    highchartOptions?: Highcharts.Options;
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    "on-load-error"?: (err: Error) => void;
}

export interface Input extends WithNormalizedProps<AreaChartInput> {}

class AreaChart extends Marko.Component<Input> {
    declare chartRef: Highcharts.Chart;

    onInput() {
        // if chartRef does not exist do not try to run setupCharts as it may be server side and highcharts only works on the client side
        if (this.chartRef && this.chartRef.destroy) {
            this.chartRef.destroy();
            this._setupCharts();
        }
    }

    onMount() {
        highChartsLoad()
            .then(() => {
                this.handleSuccess();
            })
            .catch((e: Error) => {
                this.handleError(e);
            });
    }

    handleError(err: Error) {
        this.emit("load-error", err);
    }

    handleSuccess() {
        this._initializeHighchartExtensions();
        this._setupCharts();
    }

    getContainerId() {
        return `ebay-bar-chart-${this.id}`;
    }

    /**
     * Initialize the highchart extensions
     */
    _initializeHighchartExtensions() {
        // add custom legend wrapper function
        ebayLegend(Highcharts);
    }

    /**
     * Set up the chart with the input data and configuration options.
     */
    _setupCharts() {
        // check if a single series was passed in for series and if so add it to a new array
        const series = Array.isArray(this.input.series)
            ? this.input.series
            : [this.input.series];

        setSeriesMarkerStyles(series);

        setSeriesColors(series);

        const config: Highcharts.Options = {
            title: this.getTitleConfig(),
            chart: this.getChartConfig(),
            colors: colorMapping,
            xAxis: this.getXAxisConfig(),
            yAxis: this.getYAxisConfig(),
            legend: this.getLegendConfig(),
            tooltip: this.getTooltipConfig(),
            plotOptions: this.getPlotOptions(),
            series, // pass in the configured series array
            credits: {
                enabled: false, // hide the highcharts label and link in the bottom right of chart
            },
        };
        // initialize and keep reference to chart
        this.chartRef = Highcharts.chart(
            this.getContainerId(),
            this._mergeConfigs(config, this.input.highchartOptions ?? {}),
        );
    }

    /**
     * Default format function for the tooltip titles
     */
    _tooltipTitleFormatter(
        value: number | string,
        dateFormat: typeof Highcharts.dateFormat,
    ) {
        if (typeof value === "string") {
            value = parseFloat(value);
        }
        return dateFormat("%b %e, %Y", value);
    }

    /**
     * Default format function for the tooltip values
     */
    _tooltipValueFormatter(value: number | string) {
        if (typeof value === "string") {
            value = parseFloat(value);
        }
        return Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    }

    /**
     * Default format function for the yAxis labels
     */
    _yLabelFormatter(value: number | string) {
        if (typeof value === "string") {
            value = parseFloat(value);
        }
        return Intl.NumberFormat("en-US", {
            notation: "compact",
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 4,
        }).format(value);
    }

    /**
     * Merge the source Highcharts config into the target Highcharts config
     *
     * Allows for custom overrides of ebay default Highcharts configuration settings
     */
    _mergeConfigs(
        source: { [key: string]: any },
        target: { [key: string]: any },
    ) {
        for (const key in source) {
            if (source[key] instanceof Object)
                Object.assign(
                    source[key],
                    this._mergeConfigs(target[key], source[key]),
                );
        }
        Object.assign(target || {}, source);
        return target;
    }

    /**
     * Get the title configuration for the chart
     */
    getTitleConfig(): Highcharts.TitleOptions {
        return {
            text: this.input.title,
            align: "left",
            useHTML: true,
            style: {
                fontSize: "18px",
                fontWeight: "700",
            },
        };
    }

    /**
     * Get the chart configuration for the chart
     */
    getChartConfig(): Highcharts.ChartOptions {
        const type = this.input.areaType ?? "areaspline";
        return {
            type,
            animation: false,
            backgroundColor: backgroundColor,
            style: {
                fontFamily: chartFontFamily,
            },
        };
    }

    /**
     * Get the xAxis configuration for the chart
     */
    getXAxisConfig(): Highcharts.XAxisOptions {
        const xLabelFormatter = this.input.xLabelFormatter;
        return {
            // currently setup to support epoch time values for xAxisLabels.
            // It is possible to set custom non datetime xAxisLabels but will need changes to this component
            type: "datetime",
            labels: {
                formatter: xLabelFormatter
                    ? function () {
                          return xLabelFormatter?.(
                              this.value,
                              Highcharts.dateFormat,
                          );
                      }
                    : undefined,
                format: "{value:%b %e}",
                align: "center",
                style: {
                    color: labelsColor,
                },
            },
            tickWidth: 0, // hide the vertical tick on xAxis labels
            crosshair: {
                color: "rgba(0, 0, 0, 0.2)",
                zIndex: 3,
            },
        };
    }

    /**
     * Get the yAxis configuration for the chart
     */
    getYAxisConfig(): Highcharts.YAxisOptions {
        // Formatter function for the yAxis labels
        const yLabelFormatter =
            this.input.yLabelFormatter ?? this._yLabelFormatter;

        return {
            gridLineColor: gridColor,
            opposite: true, // moves yAxis labels to the right side of the chart
            reversedStacks: false, // makes so series one starts at the bottom of the yAxis, by default this is true
            labels: {
                formatter: function () {
                    return yLabelFormatter(this.value);
                },
                style: {
                    color: labelsColor,
                },
            },
            title: {
                enabled: false,
            } as Highcharts.YAxisTitleOptions,
            offset: 0,
        };
    }

    /**
     * Get the legend configuration for the chart
     */
    getLegendConfig(): Highcharts.LegendOptions {
        return {
            // If only a single series is provided do not display the legend
            enabled:
                Array.isArray(this.input.series) &&
                this.input.series.length > 1,
            symbolRadius: 2,
            symbolWidth: 12,
            symbolHeight: 12,
            itemStyle: {
                color: legendColor,
                fontWeight: "normal",
            },
            align: "left",
            itemHiddenStyle: {
                color: legendInactiveColor,
            },
            itemHoverStyle: {
                color: legendHoverColor,
            },
        };
    }

    /**
     * Get the tooltip configuration for the chart
     */
    getTooltipConfig(): Highcharts.TooltipOptions {
        const tooltipValueFormatter =
            this.input.tooltipValueFormatter ?? this._tooltipValueFormatter;

        const tooltipTitleFormatter =
            this.input.tooltipTitleFormatter ?? this._tooltipTitleFormatter;

        return {
            formatter: function (this) {
                const date = tooltipTitleFormatter(
                    this.x ?? 0,
                    Highcharts.dateFormat,
                );

                // Display formatted total, only if there are more than one points
                const total =
                    this.points &&
                    this.points.length > 1 &&
                    this.points.reduce(
                        (acc, curr) => acc + (curr.y ?? 0) * 100,
                        0,
                    ) / 100;

                return tooltipTemplate.renderToString({
                    date,
                    total: total || 0,
                    points: this.points,
                    valueFormatter: tooltipValueFormatter,
                } as TooltipInput);
            },
            useHTML: true,
            backgroundColor: tooltipBackgroundColor,
            borderWidth: 0,
            borderRadius: 10,
            outside: true,
            shadow: false,
            shared: true,
            style: {
                filter: tooltipShadows,
                fontSize: "12px",
            },
        };
    }

    /**
     * Get the plot options configuration for the chart
     */
    getPlotOptions(): Highcharts.PlotOptions {
        const type = this.input.areaType ?? "areaspline";
        return {
            series: {
                accessibility: {
                    description: this.input.description,
                },
                stacking: "normal",
                states: {
                    hover: {
                        halo: { size: 0 },
                    },
                },
                marker: {
                    enabled: false,
                    animation: { duration: 0 },
                },
            },
            [type]: {
                className: "ebay-area-chart",
                lineWidth: 1,
            },
        };
    }

    onDestroy() {
        this.chartRef?.destroy();
    }
}

export default AreaChart;
