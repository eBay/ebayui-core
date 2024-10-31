import { CDNLoader } from "../../common/cdn";
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

interface AreaChartInput extends Omit<Marko.Input<"div">, `on${string}`> {
    title?: Highcharts.TitleOptions["text"];
    description?: Highcharts.SeriesAccessibilityOptionsObject["description"];
    series: Highcharts.SeriesAreaOptions | Highcharts.SeriesAreaOptions[];
    highchartOptions?: Highcharts.Options;
    xLabelFormatter?: (
        value: string | number,
        dateFormat: typeof Highcharts.dateFormat,
    ) => string;
    yLabelFormatter?: (value: string | number) => string;
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    "on-load-error"?: (err: Error) => void;
}

export interface Input extends WithNormalizedProps<AreaChartInput> {}

class AreaChart extends Marko.Component<Input> {
    declare chartRef: Highcharts.Chart;
    declare cdnLoader: CDNLoader;

    onInput() {
        // if chartRef does not exist do not try to run setupCharts as it may be server side and highcharts only works on the client side
        if (this.chartRef && this.chartRef.destroy) {
            this.chartRef.destroy();
            this._setupCharts();
        }
    }

    onCreate() {
        this.cdnLoader = new CDNLoader(this as any, {
            stagger: true,
            key: "highcharts",
            types: ["src", "src", "src"],
            files: ["highcharts.js", "accessibility.js", "pattern-fill.js"],
            setLoading: () => {},
            handleError: this.handleError.bind(this),
            handleSuccess: this.handleSuccess.bind(this),
        });
    }

    onMount() {
        this.cdnLoader
            .setOverrides(
                [
                    this.input.cdnHighcharts,
                    this.input.cdnHighchartsAccessibility,
                    this.input.cdnHighchartsPatternFill,
                ] as string[],
                this.input.version,
            )
            .mount();
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

    _initializeHighchartExtensions() {
        // add custom legend wrapper function
        ebayLegend(Highcharts);
    }

    _setupCharts() {
        // check if a single series was passed in for series and if so add it to a new array
        const series = Array.isArray(this.input.series)
            ? this.input.series
            : [this.input.series];

        // update the zIndex of each series object so they render in the correct order
        // and configure the markers that are displayed on hover
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

        setSeriesColors(series);

        const config: Highcharts.Options = {
            title: this.getTitleConfig(),
            chart: this.getChartConfig(),
            colors: colorMapping,
            xAxis: this.getXAxisConfig(),
            yAxis: this.getYAxisConfig(series),
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

    // Default formatter for the y-axis labels
    // This function will format the y-axis labels as compact USD currency
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

    // Deep merge two Highcharts config objects
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

    getTitleConfig(): Highcharts.TitleOptions {
        return {
            text: this.input.title,
            align: "left",
            useHTML: true,
            style: {
                // styles are set in JS since they are rendered in the SVG
                fontSize: "18px",
                fontWeight: "700",
            },
        };
    }

    getChartConfig(): Highcharts.ChartOptions {
        return {
            type: "areaspline",
            animation: false,
            backgroundColor: backgroundColor,
            style: {
                // styles are set in JS since they are rendered in the SVG
                fontFamily: chartFontFamily,
            },
        };
    }

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

    getYAxisConfig(
        series: Highcharts.SeriesAreaOptions[],
    ): Highcharts.YAxisOptions {
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

    getTooltipConfig(): Highcharts.TooltipOptions {
        const yLabelFormatter =
            this.input.yLabelFormatter ?? this._yLabelFormatter;
        return {
            formatter: function (this) {
                const date = Highcharts.dateFormat(
                    "%b %e, %Y",
                    this.x as number,
                );
                const total = yLabelFormatter(
                    this.points?.reduce(
                        (acc, curr) => acc + (curr.y ?? 0),
                        0,
                    ) || 0,
                );
                return tooltipTemplate.renderToString({
                    date,
                    total,
                    points: this.points,
                } as TooltipInput);
            },
            // positioner: function (
            //     this: Highcharts.Tooltip,
            //     labelWidth: number,
            //     labelHeight: number,
            //     point: Highcharts.TooltipPositionerPointObject,
            // ): Highcharts.PositionObject {
            //     // This code positions the tooltop centered above the stack of series data points
            //     // By default, the tooltip is positioned to the left/right and centered vertically on the current series point
            //     // Loop over each series[].data[], find closest one that matches plotX
            //     const plotX = point.plotX || 0;
            //     const points = component.chartRef.series.map((s) =>
            //         s.data.find((p) => {
            //             return Math.round(p?.plotX || 0) === plotX;
            //         }),
            //     );
            //     // Find closest plotY value relative to the top of the chart
            //     const minY = Math.min(...points.map((p) => p?.plotY || 0));
            //     const chartPosition = this.chart.pointer.getChartPosition();
            //     const distance = 32;
            //     const x = plotX + chartPosition.left - labelWidth / 2;
            //     const y =
            //         chartPosition.top +
            //         this.chart.plotTop +
            //         minY -
            //         labelHeight -
            //         distance;
            //     return { x, y };
            // },
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

    getPlotOptions(): Highcharts.PlotOptions {
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
            areaspline: {
                className: "ebay-area-chart",
                lineWidth: 1,
            },
        };
    }

    onDestroy() {
        this.chartRef.destroy();
    }
}

export default AreaChart;
