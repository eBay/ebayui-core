import { load as highChartsLoad } from "@internal/highcharts";
import {
    chartFontFamily,
    backgroundColor,
    setDonutColors,
} from "../../common/charts/shared";
import { ebayDonut } from "../../common/charts/donut";
import type { WithNormalizedProps } from "../../global";
import tooltipTemplate from "./donut-tooltip.marko";
import type { LegendItem } from "../ebay-chart-legend/component";
import type HighchartsTypes from "highcharts";
declare const Highcharts: typeof HighchartsTypes;

interface SeriesDonutOptions extends Omit<Highcharts.SeriesOptions, "type"> {
    data: Highcharts.PointOptionsObject[];
    type?: "pie" | "variablepie";
}

interface DonutChartInput
    extends Omit<Marko.HTML.Div, `on${string}` | "title"> {
    title?: Marko.AttrTag<Marko.Renderable>;
    metricValue?: Marko.AttrTag<Marko.Renderable>;
    metricLabel?: Marko.AttrTag<Marko.Renderable>;
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    series: SeriesDonutOptions[];
    highchartsDescription?: string;
}

export interface Input extends WithNormalizedProps<DonutChartInput> {}

class DonutChart extends Marko.Component<Input> {
    declare chartRef: Highcharts.Chart;

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
        highChartsLoad()
            .then(() => {
                this.handleSuccess();
            })
            .catch((e: Error) => {
                this.handleError(e);
            });
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
        ebayDonut(Highcharts);
    }

    /**
     * Set up the chart with the input data and configuration options.
     */
    _setupChart() {
        // Set default type to "pie"
        const series = this.input.series?.map((series) => ({
            ...series,
            type: series.type || "pie",
        })) as Highcharts.SeriesOptionsType[];

        // Check series length, DS only supports one series
        if (series.length > 1) {
            console.warn("Donut chart only supports one series");
        }

        // Set the path colors and border colors for the series data
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
                enabled: false,
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
     * Configures the pie plot options: thickness.
     *
     * @returns {Highcharts.PlotOptions}
     */
    getPlotOptions(): Highcharts.PlotOptions {
        return {
            pie: {
                description: this.input.highchartsDescription,
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
     * @returns {LegendItem[]}
     */
    getLegendItems(): LegendItem[] {
        const { series } = this.input;
        return series[0].data.map((point) => {
            return {
                name: point.name,
                value: point.y,
            } as LegendItem;
        });
    }
}

export default DonutChart;
