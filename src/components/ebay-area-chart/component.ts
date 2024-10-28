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
    xLabelFormatter?: (value: string | number) => string;
    yLabelFormatter?: (value: string | number) => string;
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    "on-load-error"?: (err: Error) => void;
}

// deep merge function to merge the input options with the default options
function deepMerge(
    source: { [key: string]: any },
    target: { [key: string]: any },
) {
    for (const key in source) {
        if (source[key] instanceof Object)
            Object.assign(source[key], deepMerge(target[key], source[key]));
    }
    Object.assign(target || {}, source);
    return target;
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
            deepMerge(config, this.input.highchartOptions ?? {}),
        );
    }

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
                formatter: function () {
                    return (
                        xLabelFormatter?.(this.value) ??
                        this.axis.defaultLabelFormatter.call(this)
                    );
                },
                format: "{value:%b %e}",
                align: "center",
                style: {
                    color: labelsColor, // setting label colors
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
            gridLineColor: gridColor, // sets the horizontal grid line colors
            opposite: true, // moves yAxis labels to the right side of the chart
            reversedStacks: false, // makes so series one starts at the bottom of the yAxis, by default this is true
            labels: {
                formatter: function () {
                    return yLabelFormatter(this.value);
                },
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            title: {
                enabled: false, // hide the axis label next to the axis
            } as Highcharts.YAxisTitleOptions,
            offset: 0, // set to zero for no offset refer to https://api.highcharts.com/highcharts/yAxis.offset
        };
    }

    getLegendConfig(): HighchartsTypes.LegendOptions {
        return {
            // if only a single series is provided do not display the legend
            enabled:
                Array.isArray(this.input.series) &&
                this.input.series.length > 1,
            symbolRadius: 2, // corner radius on legend identifiers svg element
            symbolWidth: 12, // setting the width of the legend identifiers svg element
            symbolHeight: 12, // setting the height of the legend identifiers svg element
            itemStyle: {
                color: legendColor, // set the color of the text in the legend
            },
            align: "left",
            itemHiddenStyle: {
                color: legendInactiveColor, // set legend text color when legend item has been clicked and hidden
            },
            itemHoverStyle: {
                color: legendHoverColor, // set legend text color on hover of legend element
            },
        };
    }

    getTooltipConfig(): HighchartsTypes.TooltipOptions {
        const yLabelFormatter =
            this.input.yLabelFormatter ?? this._yLabelFormatter;
        return {
            formatter: function (this) {
                if (!this || !this.points) return "";
                let s =
                    "<div class='ebay-area-chart__tooltip-title'>" +
                    Highcharts.dateFormat("%b %e, %Y", this.x as number) +
                    "</div>";
                this.points.forEach(function (context) {
                    const label = context.point.label;
                    s +=
                        "<div class='ebay-area-chart__tooltip-value'><span>" +
                        context.series.name +
                        "</span><span>" +
                        label +
                        "</span></div>";
                });

                // Add total for stacked series
                if (this.points.length > 1) {
                    let total = this.points.reduce(
                        (acc, curr) => acc + (curr.y ?? 0),
                        0,
                    );
                    // total = Math.round(total * 100) / 100;
                    s +=
                        "<div class='ebay-area-chart__tooltip-value'><span>Total</span><span>";
                    s += yLabelFormatter(total);
                    s += "</span></div>";
                }

                return s;
            },
            useHTML: true, // allows defining html to format tooltip content
            backgroundColor: tooltipBackgroundColor, // sets tooltip background color
            borderWidth: 0, // hide the default border stroke
            borderRadius: 10, // set the border radius of the tooltip
            outside: true, // used to render the tooltip outside of the main SVG element
            shadow: false, // hide the default shadow as it conflicts with designs
            shared: true, // shared means that if there are multipe series passed in there will be a single tooltip element per xAxis point
            style: {
                filter: tooltipShadows, // sets tooltip shadows
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
