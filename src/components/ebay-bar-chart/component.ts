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
} from "../../common/charts/shared";

import { ebayLegend } from "../../common/charts/legend";
import { eBayColumns } from "../../common/charts/bar-chart";
import type HighchartsTypes from "highcharts";
declare const Highcharts: typeof HighchartsTypes;

import subtemplate from "./subtemplate.marko";
import type { WithNormalizedProps } from "../../global";

interface SeriesItem
    extends Highcharts.PlotAreaOptions,
        Omit<Highcharts.SeriesBarOptions, "dataLabels" | "pointRange"> {
    top?: boolean;
    bottom?: boolean;
    group?: string;
}

interface BarChartInput extends Omit<Marko.HTML.Div, `on${string}` | "title"> {
    title: Highcharts.TitleOptions["text"];
    description?: Highcharts.SeriesOptionsType["description"];
    "x-axis-label-format"?: Highcharts.XAxisLabelsOptions["format"];
    "x-axis-positioner"?: Highcharts.XAxisOptions["tickPositioner"];
    "y-axis-labels"?: Highcharts.YAxisLabelsOptions["format"][];
    "y-axis-positioner"?: Highcharts.YAxisOptions["tickPositioner"];
    series: SeriesItem | SeriesItem[];
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    stacked?: boolean;
}

export interface Input extends WithNormalizedProps<BarChartInput> {}

class BarChart extends Marko.Component<Input> {
    declare chartRef: Highcharts.Chart;
    declare chart: Highcharts.Chart;
    declare series: Highcharts.Series;

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
        this._initializeHighchartsExtensions();
        this._setupCharts();
    }

    getContainerId() {
        return `ebay-bar-chart-${this.id}`;
    }

    _initializeHighchartsExtensions() {
        // add custom legend wrapper function
        // eslint-disable-next-line no-undef,new-cap
        ebayLegend(Highcharts);
        // add custom columns wrapper to enable rounded bar corners, and stacks with spaces between each stacked point
        // eslint-disable-next-line no-undef,new-cap
        eBayColumns(Highcharts);
    }
    _setupCharts() {
        // check if a single series was passed in for series and if so add it to a new array
        const series = Array.isArray(this.input.series)
            ? this.input.series
            : [this.input.series];
        const stacked = this.input.stacked;
        const title = this.input.title;

        // controls rounded corders and spacing at the bottom of data points
        if (stacked) {
            series[0].bottom = true; // set a variable on the first series so it renders rounder corners on the bottom of the bar
            series[series.length - 1].top = true; // set a variable on the last series to render rounded corner on the top of the bar

            series.forEach((s) => {
                // used to help link each series to the previous one for stacked views
                // refer to https://api.highcharts.com/highcharts/series.column.linkedTo
                s.group = ":previous";
            });
        } else {
            // if not stacked, set the top and bottom flag on each series so the single bar has rounded top and bottom corners
            series.forEach((s) => {
                s.top = true;
                s.bottom = true;
            });
        }

        // Cast series to Highcharts.SeriesBarOptions[] to avoid type errors
        setSeriesColors(series as Highcharts.SeriesBarOptions[]);

        const config: Highcharts.Options = {
            title: {
                text: title, // set the title that will render above the chart
            },
            chart: this.getChartConfig(),
            colors: colorMapping,
            xAxis: this.getXAxisConfig(),
            yAxis: this.getYAxisConfig(series),
            legend: this.getLegendConfig(),
            tooltip: this.getTooltipConfig(),
            plotOptions: this.getPlotOptionsConfig(),
            series: series as Highcharts.SeriesOptionsType[],
            credits: {
                enabled: false, // hide the highcharts label and link in the bottom right
            },
        };
        // eslint-disable-next-line no-undef,new-cap
        this.chartRef = Highcharts.chart(this.getContainerId(), config);
        this.chartRef.redraw();
    }

    getChartConfig(): Highcharts.ChartOptions {
        return {
            type: "column",
            backgroundColor,
            style: {
                fontFamily: chartFontFamily, // set the font for all chart svg text elements
            },
        };
    }

    getXAxisConfig(): Highcharts.XAxisOptions {
        const xAxisLabelFormat = this.input.xAxisLabelFormat;
        const xAxisPositioner = this.input.xAxisPositioner;
        return {
            // currently setup to support epoch time values for xAxisLabels.
            // It is possible to set custom non datetime xAxisLabels but will need changes to this component
            type: "datetime",
            labels: {
                // input.xAxisLabelFormat allows overriding the default short month / day label
                // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat to customize
                format: xAxisLabelFormat || "{value:%b %e}",
                align: "center",
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            tickWidth: 0, // hide the vertical tick on xAxis labels
            tickPositioner: xAxisPositioner, // optional input to allow configuring the position of xAxis tick marks
        };
    }

    getYAxisConfig(series: SeriesItem[]): Highcharts.YAxisOptions {
        const yAxisLabels = this.input.yAxisLabels;
        const yAxisPositioner = this.input.yAxisPositioner;

        let maxVal = 0; // use to determine the highest yAxis value
        series.forEach((s) => {
            maxVal = s.data!.reduce(
                (p: number, c: any) => (c > p ? c : p),
                maxVal,
            ) as number;
        });
        let yLabelsItterator = 0;
        return {
            gridLineColor: gridColor, // sets the horizontal grid line colors
            opposite: true, // moves yAxis labels to the right side of the chart
            reversedStacks: false, // makes so series one starts at the bottom of the yAxis, by default this is true
            labels: {
                format: yAxisLabels ? undefined : "${text}",
                // if yAxisLabels array is passed in this formatter function is needed to
                // return the proper label for each yAxis tick mark
                formatter: yAxisLabels
                    ? function () {
                          if (this.isFirst) {
                              yLabelsItterator = -1;
                          }
                          yLabelsItterator = yLabelsItterator + 1;
                          return yAxisLabels[yLabelsItterator] as string;
                      }
                    : undefined,
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            max: maxVal,
            title: {
                enabled: false, // hide the axis label next to the axis
            } as Highcharts.YAxisTitleOptions,
            offset: 0, // set to zero for no offset refer to https://api.highcharts.com/highcharts/yAxis.offset
            // passed in function for yAxisPositioner refer to https://api.highcharts.com/highcharts/yAxis.tickPositioner for use
            tickPositioner: yAxisPositioner,
        };
    }

    getLegendConfig(): Highcharts.LegendOptions {
        const series = this.input.series;
        return {
            symbolRadius: 2, // set corner radius of legend identifiers
            enabled: Array.isArray(series) && series.length > 1, // disabled legend if only one series is passed in
            itemStyle: {
                color: legendColor, // set the color of the legend text
            },
            itemHiddenStyle: {
                color: legendInactiveColor, // set the color of the legend text when clicked to hide
            },
            itemHoverStyle: {
                color: legendHoverColor, // set the color of the legend text when hovering
            },
        };
    }
    // returns a function that can be called on each mouseover event
    tooltipFormatter() {
        const stacked = this.input.stacked;
        return function (this: any) {
            // references to the charts updates series array, only available when the returned tooltip function is called and not before
            const series = this.series.chart.series;

            // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for dateFormat variables
            return subtemplate.renderToString({
                // eslint-disable-next-line no-undef,new-cap
                date: Highcharts.dateFormat("%b %e, %Y", this.x, false),
                data: stacked ? series : this.point,
                stacked,
                x: this.x,
            } as any);
        };
    }
    tooltipPositioner(labelWidth: number, labelHeight: number) {
        const series = this.chart.series;
        const chartPosition = this.chart.pointer.getChartPosition(); // returns the pointers top and left positions
        const hpIndex = this.chart.hoverPoint!.index; // reference to the index of the original hovered point of the series
        const hoverPoint = this.chart.hoverPoint!, // reference to the original hovered point of the series
            y = // setting the y position of the tooltip to the top of the hovered stack of points
                chartPosition.top +
                (hoverPoint?.series.yAxis as any).top +
                (series[series.length - 1].data[hpIndex] as any).shapeY -
                labelHeight -
                15; // adjust for the arrow
        let x = // setting the x position of the tooltip based on the center of the hovered stack of points
            chartPosition.left +
            (hoverPoint as any).dlBox.x +
            (hoverPoint as any).dlBox.width * 0.5 -
            labelWidth * 0.5 +
            3; // offset padding
        // check left bound and adjust if the tooltip would be clipped
        if (x < 6) {
            x = 6;
        }
        // check right bound and adjust if the tooltip would be clipped
        if (
            x + (hoverPoint as any).dlBox.width >
            chartPosition.left + this.chart.chartWidth - 6
        ) {
            x =
                chartPosition.left +
                this.chart.chartWidth -
                (hoverPoint as any).dlBox.width -
                6;
        }
        return { x, y }; // return the tooltip x and y position
    }

    getTooltipConfig(): Highcharts.TooltipOptions {
        const stacked = this.input.stacked;
        return {
            formatter: this.tooltipFormatter(),
            useHTML: true, // allows defining html to format tooltip content
            backgroundColor: tooltipBackgroundColor, // sets tooltip background color
            borderWidth: 0, // hide the default border stroke
            borderRadius: 10, // set the border radius of the tooltip
            outside: true, // used to render the tooltip outside of the main SVG element
            shadow: false, // hide the default shadow as it conflicts with designs
            style: {
                filter: tooltipShadows, // sets tooltip shadows
                fontSize: "12px",
            },
            // this callback function is used to position the tooltip at the top of the stacked bars
            positioner: stacked ? this.tooltipPositioner : undefined,
        };
    }

    legendItemClick() {
        // returns a function so that can access input values
        const stacked = this.input.stacked;
        return function (this: any) {
            const series = this.chart.series;
            if (stacked) {
                // setTimeout with 0 ms to push this function to the end of the execution stack to prevent issues with hover events
                setTimeout(() => {
                    let topFound = false;
                    let bottomFound = false;
                    // loop through and reset bottom variables on series based on their visibility
                    for (let i = 0; i < series.length; i++) {
                        if (!bottomFound && series[i].visible) {
                            series[i].options.bottom = true;
                            bottomFound = true;
                        } else {
                            series[i].options.bottom = false;
                        }
                    }

                    // loop through and reset top variables on series based on their visibility
                    for (let i = series.length - 1; i >= 0; i--) {
                        if (!topFound && series[i].visible) {
                            series[i].options.top = true;
                            topFound = true;
                        } else {
                            series[i].options.top = false;
                        }
                    }
                    this.chart.redraw(); // redraw the chart after all series variables have been updated
                }, 0);
            }
        };
    }

    // handleMouseOver returns a function while keeping scope to the class compnent to access input values
    handleMouseOver() {
        const stacked = this.input.stacked;
        return function (this: Highcharts.Point) {
            const refPoint = this; // this is the active hovered point of the series
            const chart = this.series.chart;
            chart.series.forEach(
                (
                    s, // loop through each series
                ) =>
                    s.points.forEach((p) => {
                        // loop through each point in the series
                        if (
                            (stacked && p.x !== refPoint.x) || // if the stacked flag is set to true and each points x value does not match
                            (!stacked && p !== refPoint) // or if not stacked and refPoint does not match the current point
                        ) {
                            p.update(
                                {
                                    opacity: 0.2, // set opacity
                                } as Highcharts.PointOptionsObject,
                                false, // do not update immediately
                            );
                        }
                    }),
            );
            chart.redraw(); // trigger chart redraw after all points have been updated
        };
    }

    handleMouseOut() {
        const chart = this.series.chart;
        chart.series.forEach(
            (
                s, // loop through each series
            ) =>
                s.points.forEach(
                    (
                        p, // loop through each point in the series
                    ) =>
                        p.update(
                            {
                                opacity: 1, // update the opacity to 1
                            } as Highcharts.PointOptionsObject,
                            false, // do not update immediately
                        ),
                ),
        );
        chart.redraw(); // trigger chart redraw after all points have been updated
    }

    getPlotOptionsConfig(): Highcharts.PlotOptions {
        const description = this.input.description;
        const stacked = this.input.stacked;
        return {
            series: {
                description,
            },
            column: {
                events: {
                    legendItemClick: this.legendItemClick(),
                },
                stacking: stacked ? "normal" : undefined, // set stacking to normal if stacked flag is set
                groupPadding: 0.1, // padding around groups of points
                pointPadding: 0.15, // padding between single points
                states: {
                    inactive: {
                        opacity: 1, // prevents other points in the same stack from fading out
                    },
                },
                point: {
                    events: {
                        mouseOver: this.handleMouseOver(), // handleMouseOver returns a function so it can access component input values
                        mouseOut: this.handleMouseOut,
                    },
                },
            },
        };
    }
    onDestroy() {
        this.chartRef.destroy();
    }
}

export default BarChart;
