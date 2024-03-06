import * as Highcharts from "highcharts";

import patternFill from "highcharts/modules/pattern-fill";

import { CDNLoader } from "../../common/cdn";
import {
    chartFontFamily,
    backgroundColor,
    tooltipBackgroundColor,
    tooltipShadows,
    setDonutColors,
    setLegendColors,
} from "../../common/charts/shared";

import { ebayDonut } from "../../common/charts/donut";

import type { WithNormalizedProps } from "../../global";

// Breakout ??
import tooltipTemplate from "./tooltip.marko";

// Uncomment when cdn loader version is set
//
// import type HighchartsTypes from "highcharts";
// declare const Highcharts: typeof HighchartsTypes;

interface SeriesDonutOptions extends Highcharts.SeriesPieOptions {
    data: Highcharts.PointOptionsObject[];
}

export interface DonutLegendItem {
    name: string;
    value: number | string | undefined;
    symbolClass?: string;
}

interface DonutChartInput
    extends Omit<Marko.Input<"div">, `on${string}` | "title"> {
    title?: string;
    metricValue?: string;
    metricLabel?: string;
    layout?: "small" | "large";
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    series: SeriesDonutOptions[];
}

export interface Input extends WithNormalizedProps<DonutChartInput> {}

interface State {
    activeIndex: number;
}

class DonutChart extends Marko.Component<Input, State> {
    declare cdnLoader: CDNLoader;
    declare chartRef: Highcharts.Chart;

    onCreate() {
        // Set up the CDN loader for Highcharts
        this.cdnLoader = new CDNLoader(this as any, {
            stagger: true,
            key: "highcharts",
            types: ["src", "src"],
            files: ["highcharts.js", "accessibility.js", "pattern-fill.js"],
            setLoading: () => {},
            handleError: this.handleError.bind(this),
            handleSuccess: this.handleSuccess.bind(this),
        });

        // State for hover index
        this.state = {
            activeIndex: -1,
        };
    }

    // Handle CDN Loader errors
    handleError(err: Error) {
        this.emit("load-error", err);
    }

    // Handle CDN Loader success
    handleSuccess() {
        this._initializeHighchartsExtensions();
        this._setupChart();
    }

    onMount() {
        this.cdnLoader
            .setOverrides(
                [
                    this.input.cdnHighcharts,
                    this.input.cdnHighchartsAccessibility,
                    // Not working atm
                    // this.input.cdnHighchartsPatternFill,
                ] as string[],
                this.input.version,
            )
            .mount();
    }

    /**
     * Generate a unique id for the container element.
     *
     * @returns {string} The id of the container element
     */
    getContainerId() {
        return `ebay-donut-graph-${this.id}`;
    }

    /**
     * Initializes highcharts extensions
     */
    _initializeHighchartsExtensions() {
        // Adds spacing between donut slices
        // Accepts a highcharts instance and a spacing value
        ebayDonut(Highcharts, this.input.layout === "small" ? 4 : 6);

        // Add pattern-fill module
        // Need to add HC version to CDN
        patternFill(Highcharts);
    }

    /**
     * Set up the chart with the input data and configuration options.
     */
    _setupChart() {
        const { series } = this.input;

        // Check series length
        if (series.length > 1) {
            console.warn("Donut chart only supports one series");
        }

        // Set the colors for the series data
        const colors = setDonutColors(series[0]);

        const chart = this.getChartConfig();
        const plotOptions = this.getPlotOptions();
        const tooltip = this.getTooltipConfig();

        const config: Highcharts.Options = {
            chart,
            colors,
            title: {
                text: undefined,
            },
            plotOptions,
            series,
            tooltip,
            credits: {
                enabled: false, // Sorry highcharts
            },
        };

        this.chartRef = Highcharts.chart(this.getContainerId(), config);
    }

    /**
     * Chart configuration options: configures the chart type, background color, font family, events.
     *
     * @returns {Highcharts.ChartOptions}
     */
    getChartConfig(): Highcharts.ChartOptions {
        return {
            type: "pie",
            spacing: [0, 0, 0, 0],
            margin: [0, 0, 0, 0],
            backgroundColor: backgroundColor,
            style: {
                fontFamily: chartFontFamily,
            },
        };
    }

    /**
     * Configures the pie plot options: thickness, hover state.
     *
     * @returns {Highcharts.PlotOptions}
     */
    getPlotOptions(): Highcharts.PlotOptions {
        const component = this;

        return {
            pie: {
                size: "100%",
                thickness: this.input.layout === "small" ? 8 : 12,
                allowPointSelect: false,
                cursor: "pointer",
                borderRadius: "30%",
                dataLabels: {
                    enabled: false,
                },
                states: {
                    hover: {
                        halo: { size: 0 },
                    },
                },
                point: {
                    events: {
                        mouseOver: function () {
                            component.setActiveIndex(this.index);
                        },
                        mouseOut: function () {
                            component.setActiveIndex(-1);
                        },
                    },
                },
            },
        };
    }

    /**
     * Format tooltip to match design specs.
     *
     * @returns {Highcharts.TooltipOptions}
     */
    getTooltipConfig(): Highcharts.TooltipOptions {
        return {
            formatter: function (a) {
                return tooltipTemplate.renderToString({
                    name: this.point.name,
                    value: `${this.point.y}`,
                });
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
     * Returns the legend items for the chart.
     *
     * @returns {DonutLegendItem[]}
     */
    getLegendItems(): DonutLegendItem[] {
        const { series } = this.input;

        // Adds classes to the legend items
        const colors = setLegendColors(series[0].data);

        return series[0].data.map((point, index) => {
            return {
                name: point.name,
                value: point.y,
                symbolClass: colors[index],
            } as DonutLegendItem;
        });
    }

    /**
     * Set the active index for the hover state.
     *
     * @param {number} index The index of the active point
     */
    setActiveIndex(index: number) {
        this.state.activeIndex = index;
    }

    /**
     * Handle focus on a donut slice path.
     *
     * @param {Highcharts.Point} point The point that was clicked
     */
    handlePathFocus(index: number) {
        // Set the active index
        this.setActiveIndex(index);

        // Set state for all points to inactive
        this.chartRef.series[0].data.forEach((point) => {
            point.setState("inactive");
        });

        // Set state for the focused point to hover
        this.chartRef.series[0].data[index].setState("hover");
    }

    /**
     * Handle blur on a donut slice path.
     */
    handlePathBlur() {
        // Reset the active index
        this.setActiveIndex(-1);

        // Reset the state for all points
        this.chartRef.series[0].data.forEach((point) => {
            point.setState();
        });
    }
}

export default DonutChart;
