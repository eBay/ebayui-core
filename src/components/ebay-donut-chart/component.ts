import { CDNLoader } from "../../common/cdn";
import {
    chartFontFamily,
    backgroundColor,
    setDonutColors,
    setLegendColors,
} from "../../common/charts/shared";
import { ebayDonut } from "../../common/charts/donut";
import type { WithNormalizedProps } from "../../global";
import tooltipTemplate from "./donut-tooltip.marko";
import type HighchartsTypes from "highcharts";
declare const Highcharts: typeof HighchartsTypes;

// Highcharts CDN URLs
// These are temporary until 11.4.0 is on ebay cdn
// TODO: Remove these and include "11.4.0" as version input instead once it's on ebay cdn
const highcharts11_4_0 =
    "https://cdnjs.cloudflare.com/ajax/libs/highcharts/11.4.0/highcharts.js";
const accessibility11_4_0 =
    "https://cdnjs.cloudflare.com/ajax/libs/highcharts/11.4.0/modules/accessibility.js";
const patternFill11_4_0 =
    "https://cdnjs.cloudflare.com/ajax/libs/highcharts/11.4.0/modules/pattern-fill.js";

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
    description?: Highcharts.PlotSeriesOptions["description"];
    metricValue?: string;
    metricLabel?: string;
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    series: SeriesDonutOptions[];
}

export interface Input extends WithNormalizedProps<DonutChartInput> {}

interface State {
    activeIndex: number | null;
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
            activeIndex: null,
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
                    this.input.cdnHighcharts ?? highcharts11_4_0,
                    this.input.cdnHighchartsAccessibility ??
                        accessibility11_4_0,
                    this.input.cdnHighchartsPatternFill ?? patternFill11_4_0,
                ] as string[],
                this.input.version ?? "11.4.0",
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
        ebayDonut(Highcharts);
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
                description: this.input.description,
                size: "100%",
                thickness: 10,
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
                            component.setActiveIndex(null);
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
            hideDelay: 250,
            useHTML: true,
            backgroundColor: "transparent",
            padding: 0,
            borderWidth: 0,
            borderRadius: 0,
            outside: true,
            shadow: false,
            shared: true,
            style: {
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
    setActiveIndex(index: number | null) {
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
        this.setActiveIndex(null);

        // Reset the state for all points
        this.chartRef.series[0].data.forEach((point) => {
            point.setState();
        });
    }
}

export default DonutChart;
