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
import { debounce } from "../../common/event-utils";
import { ebayLegend } from "../../common/charts/legend";
import type { WithNormalizedProps } from "../../global";
import type HighchartsTypes from "highcharts";
declare const Highcharts: typeof HighchartsTypes;

interface AreaChartInput extends Omit<Marko.Input<"div">, `on${string}`> {
    title: Highcharts.TitleOptions["text"];
    /**
     * input.xAxisLabelFormat allows overriding the default short month / day label.
     * refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat to customize
     **/
    "x-axis-label-format"?: Highcharts.XAxisLabelsOptions["format"];
    "x-axis-positioner"?: Highcharts.XAxisOptions["tickPositioner"];
    "y-axis-labels"?: Highcharts.YAxisLabelsOptions["format"];
    "y-axis-positioner"?: Highcharts.YAxisOptions["tickPositioner"];
    description?: Highcharts.SeriesAccessibilityOptionsObject["description"];
    "cdn-highcharts"?: string;
    "cdn-highcharts-accessibility"?: string;
    "cdn-highcharts-pattern-fill"?: string;
    version?: string;
    series: Highcharts.SeriesAreaOptions | Highcharts.SeriesAreaOptions[];
    "on-load-error": (err: Error) => void;
}

export interface Input extends WithNormalizedProps<AreaChartInput> {}

const pointSize = 1.5;

class AreaChart extends Marko.Component<Input> {
    declare chartRef: Highcharts.Chart;
    declare mouseOut: ReturnType<typeof debounce>;
    declare mouseOver: ReturnType<typeof debounce>;
    declare points: Highcharts.Point[];

    onInput() {
        // if chartRef does not exist do not try to run setupCharts as it may be server side and highcharts only works on the client side
        if (this.chartRef && this.chartRef.destroy) {
            this.chartRef.destroy();
            this._setupCharts();
        }
    }

    onMount() {
        highChartsLoad()
            .then(([highcharts]: any) => {
                window.Highcharts = highcharts.default;
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
        this._setupEvents();
        this._setupCharts();
    }
    getContainerId() {
        return `ebay-bar-chart-${this.id}`;
    }
    _initializeHighchartExtensions() {
        // add custom legend wrapper function
        // eslint-disable-next-line no-undef,new-cap
        ebayLegend(Highcharts);
    }
    _setupEvents() {
        // bind functions to keep scope and setup debounced versions of function calls
        this.debounce = debounce.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.mouseOut = this.debounce(() => this.handleMouseOut(), 80); // 80ms delay for debounce
        this.mouseOver = this.debounce(
            (e: Event) => this.handleMouseOver(e),
            85,
        ); // 85ms delay for debounce so it doesn't colide with mouseOut debounce calls
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
                lineWidth: 3,
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
        // eslint-disable-next-line no-undef,new-cap
        this.chartRef = Highcharts.chart(this.getContainerId(), config);
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
            type: "area",
            backgroundColor: backgroundColor,
            style: {
                // styles are set in JS since they are rendered in the SVG
                fontFamily: chartFontFamily,
            },
        };
    }
    getXAxisConfig(): Highcharts.XAxisOptions {
        return {
            // currently setup to support epoch time values for xAxisLabels.
            // It is possible to set custom non datetime xAxisLabels but will need changes to this component
            type: "datetime",
            labels: {
                format: this.input.xAxisLabelFormat
                    ? this.input.xAxisLabelFormat
                    : "{value:%b %e}",
                align: "center",
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            tickWidth: 0, // hide the vertical tick on xAxis labels
            crosshair: {
                zIndex: 3, // make sure the vertical crosshair line on hover shows up on top
            },
            tickPositioner: this.input.xAxisPositioner, // optional input to allow configuring the position of xAxis tick marks
        };
    }
    getYAxisConfig(
        series: Highcharts.SeriesAreaOptions[],
    ): Highcharts.YAxisOptions {
        const component = this; // component reference used in formatter functions that don't have the same scope
        let yLabelsIterator = 0; // used when yAxisLabels array is provided in input
        let maxYAxisValue = 0; // use to determine the highest yAxis value
        series.forEach((s) => {
            maxYAxisValue = s.data!.reduce(
                (p: number, c: any) => (c > p ? c : p),
                maxYAxisValue,
            ) as number;
        });
        return {
            gridLineColor: gridColor, // sets the horizontal grid line colors
            opposite: true, // moves yAxis labels to the right side of the chart
            reversedStacks: false, // makes so series one starts at the bottom of the yAxis, by default this is true
            labels: {
                // if yAxisLabels are not passed in display the standard label
                format: this.input.yAxisLabels ?? "${text}",
                // if yAxisLabels array is passed in this formatter function is needed to
                // return the proper label for each yAxis tick mark
                formatter: this.input.yAxisLabels
                    ? function () {
                          if (this.isFirst) {
                              yLabelsIterator = -1;
                          }
                          yLabelsIterator = yLabelsIterator + 1;
                          return (
                              component.input.yAxisLabels?.[yLabelsIterator] ??
                              ""
                          );
                      }
                    : undefined,
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            max: maxYAxisValue,
            title: {
                enabled: false, // hide the axis label next to the axis
            } as Highcharts.YAxisTitleOptions,
            offset: 0, // set to zero for no offset refer to https://api.highcharts.com/highcharts/yAxis.offset
            // passed in function for yAxisPositioner refer to https://api.highcharts.com/highcharts/yAxis.tickPositioner for use
            tickPositioner: this.input.yAxisPositioner,
        };
    }
    getLegendConfig() {
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
            itemHiddenStyle: {
                color: legendInactiveColor, // set legend text color when legend item has been clicked and hidden
            },
            itemHoverStyle: {
                color: legendHoverColor, // set legend text color on hover of legend element
            },
        };
    }

    getTooltipConfig() {
        const component = this; // component reference used in formatter functions that don't have the same scope
        return {
            formatter: function (this: any) {
                // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for dateFormat variables
                // s is used to compile html string of formatted tooltip data

                // TODO need to change this to use a component
                // eslint-disable-next-line no-undef,new-cap
                let s = `<b>${Highcharts.dateFormat(
                    "%b %e, %Y",
                    this.x,
                    false,
                )}</b></br>`; // sets the displayed date at the top of the tooltip
                if (component.chartRef.series.length > 1) {
                    // setup html for multi series tooltip
                    component.chartRef.series.forEach((serie) => {
                        // cycle through each series
                        serie.data.forEach((d) => {
                            // cycle through each series data array to match x value with active hovered xAxis position
                            if (d.x === this.x) {
                                // when the x value matches the hovered xAxis position
                                s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">${serie.name}<span style="margin-left: 16px">${d.name}</span></div>`;
                            }
                        });
                    });
                } else {
                    // setup html for single series tooltip
                    // cycle through points of the single series and find the one that matches the active xAxis
                    component.points.forEach((d) => {
                        if (d.x === this.x) {
                            // when the x value matches the hovered xAxis position
                            s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;"><span style="margin-left: 16px">${d.name}</span></div>`;
                        }
                    });
                }
                return s;
            } as any,
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
                    description: this.input.description, // set the description that was passed in
                },
                // config stacking to normal to make sure series stack without overlapping
                // refer to https://api.highcharts.com/highcharts/plotOptions.area.stacking
                stacking: "normal",
                point: {
                    // assign mouse events to point hovers
                    events: {
                        mouseOver: this.mouseOver,
                        mouseOut: this.mouseOut,
                    },
                },
            },
            area: {
                className: "ebay-area-chart", // add class to area chart to allow targetted styles from style.less file
                lineWidth: 1, // set the border line width for each series item.
                // states: { // set if we do not want series to fade out on legend hover uncomment this block
                //     inactive: {
                //         opacity: 1,
                //     }
                // }
            },
        };
    }

    // debounce used to help improve performance on mouse interactions
    debounce<T extends (...args: any) => void>(func: T, timeout = 100) {
        let timer: NodeJS.Timeout;
        return (...args: Parameters<T>) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }
    handleMouseOut() {
        // this function is debounced to improve performance
        this.chartRef.series.forEach((s) => {
            s.data.forEach((d) => {
                // check if hover is on the xAxis (onTick) for each item,
                // and if they have a className remove and disable the marker
                if (d.getClassName() !== null) {
                    d.update(
                        {
                            className: undefined, // nullify className if not active
                            marker: {
                                enabled: false, // disable marker if not active
                            },
                        },
                        false, // disable auto redraw
                        false, // disable auto animation
                    );
                } else if (d.getClassName() === null) {
                    d.update(
                        {
                            className: "ebay-area-chart__marker--visible", // set classname
                            marker: {
                                enabled: true, // set marker enabled
                                radius: pointSize, // set the size of marker
                                lineColor: backgroundColor, // set border color of hover markers
                                lineWidth: 4, // set border width of hover markers
                                fillColor: "#000000", // set fill color of markers
                            },
                        },
                        false, // disable auto redraw
                        false, // disable auto animation
                    );
                }
            });
        });
        this.chartRef.redraw(); // trigger redraw after all points have been updated
    }
    handleMouseOver(e: any) {
        // this function is debounced to improve performance
        this.chartRef.series.forEach((s) => {
            s.data.forEach((d) => {
                if (d.x === e.target.x) {
                    // if active xAxis hover position matches the data point x update the marker to display
                    d.update(
                        {
                            className: "ebay-area-chart__marker--visible", // sets the classname
                            marker: {
                                enabled: true, // set marker enabled
                                radius: pointSize, // set the size of marker
                                lineColor: backgroundColor, // set border color of hover markers
                                lineWidth: 4, // set border width of hover markers
                                fillColor: "#000000", // set fill color of markers
                            },
                        },
                        false, // disable auto redraw
                        false, // disable auto animation
                    );
                } else if (d.getClassName() !== null) {
                    d.update(
                        {
                            className: undefined, // nullify className if not active
                            marker: {
                                enabled: false, // disable marker
                            },
                        },
                        false, // disable auto redraw
                        false, // disable auto animation
                    );
                }
            });
        });
        this.chartRef.redraw(); // trigger redraw after all points have been updated
    }
    onDestroy() {
        this.chartRef.destroy();
    }
}

export default AreaChart;
