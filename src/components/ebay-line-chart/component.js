import { CDNLoader } from '../../common/cdn';
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
    lineChartPrimaryColor,
    lineChartSecondaryColor,
    lineChartTertiaryColor,
    lineChartQueternaryColor,
    lineChartQuinaryColor,
    trendPositiveColor,
    trendNegativeColor,
} from '../../common/charts/shared';
import { debounce } from '../../common/event-utils';
import tooltipTemplate from './tooltip.marko';

const pointSize = 6; // controls the size of the plot point markers on lines

export default class {
    onCreate() {
        this.axisTicksLength = -1;

        this.cdnLoader = new CDNLoader(this, {
            stagger: true,
            key: 'highcharts',
            types: ['src', 'src'],
            files: ['highcharts.js', 'accessibility.js'],
            setLoading: () => {},
            handleError: this.handleError.bind(this),
            handleSuccess: this.handleSuccess.bind(this),
        });
    }

    handleError(err) {
        this.emit('load-error', err);
    }
    handleSuccess() {
        this._setupChart();
    }

    onMount() {
        this.cdnLoader
            .setOverrides(
                [this.input.cdnHighcharts, this.input.cdnHighchartsAccessibility],
                this.input.version
            )
            .mount();
    }

    onInput() {
        // if chartRef does not exist do not try to run setupCharts as it may be server side and highcharts only works on the client side
        if (this.chartRef && this.chartRef.destroy) {
            this.chartRef.destroy();
            this._setupCharts();
        }
    }
    getContainerId() {
        return `ebay-line-graph-${this.id}`;
    }

    _setupChart() {
        const colors = [
            // configure the array of colors to use for each series
            lineChartPrimaryColor,
            lineChartSecondaryColor,
            lineChartTertiaryColor,
            lineChartQueternaryColor,
            lineChartQuinaryColor,
        ];

        // check if a single series was passed in for series and if so add it to a new array
        const series = Array.isArray(this.input.series) ? this.input.series : [this.input.series];

        if (this.input.trend) {
            // if the trend property exist check value and adjust the first color
            const trend = typeof this.input.trend === 'string' && this.input.trend.toLowerCase(); // if trend of type string force to lowercase
            const isPositive = series[0].data[0].y < series[0].data[series[0].data.length - 1].y; // auto trend positive check between first and last data values of the single series
            if (
                trend === 'positive' || // if "positive" is passed in for the trend property
                (trend !== 'negative' && trend !== 'neutral' && isPositive) // if check if trend is does not equal negative or neutral, and if so use the auto positive calculation
            ) {
                colors[0] = trendPositiveColor; // set the color to the positive trend color
            } else if (trend === 'negative' || (trend !== 'neutral' && !isPositive)) {
                // if the trend property equals negative, or trend does not equal neutral and isPositive is false
                colors[0] = trendNegativeColor; // set the negative trend color
            }
        }

        // configure the symbol used for each series markers
        series.forEach((s, i) => {
            s.marker = {
                symbol: this.getSymbol(i),
            };
        });

        const chart = this.getChartConfig();
        const xAxis = this.getXAxisConfig();
        const yAxis = this.getYAxisConfig(series);
        const legend = this.getLegendConfig();
        const tooltip = this.getTooltipConfig();
        const plotOptions = this.getPlotOptionsConfig(series);

        const title = {
            text: this.input.title,
            align: 'left',
            useHTML: true,
            style: {
                fontSize: '18px',
                fontWeight: 700,
            },
        };

        const config = {
            title,
            chart,
            colors,
            xAxis,
            yAxis,
            legend,
            tooltip,
            plotOptions,
            series, // pass in the configured series array
            credits: {
                enabled: false, // hide the highcharts label and link in the bottom right of chart
            },
        };

        // initialize and keep reference to chart
        // eslint-disable-next-line no-undef,new-cap
        this.chartRef = Highcharts.chart(this.getContainerId(), config);
        // call update markers after the initial render to determine which markers to display if plotPoints is set to true
        this.updateMarkers();
    }

    getSymbol(index) {
        let s;
        switch (index) {
            case 1:
                s = 'square';
                break;
            case 2:
                s = 'triangle';
                break;
            case 3:
                s = 'triangle-down';
                break;
            case 4:
                s = 'diamond';
                break;
            default: // 0 index
                s = 'circle';
                break;
        }
        return s;
    }
    getChartConfig() {
        return {
            type: 'line',
            backgroundColor: backgroundColor,
            style: {
                fontFamily: chartFontFamily,
            },
            events: {
                // on chart redraw trigger updateMarkers to look for changes in xAxis tick marks and adjust series markers visibility accordingly
                redraw: () => this.updateMarkers(),
            },
        };
    }
    getXAxisConfig() {
        return {
            // currently setup to support epoch time values for xAxisLabels.
            // It is possible to set custom non datetime xAxisLabels but will need changes to this component
            type: 'datetime',
            labels: {
                // input.xAxisLabelFormat allows overriding the default short month / day label
                // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat to customize
                format: this.input.xAxisLabelFormat || '{value:%b %e}',
                align: 'center',
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            tickWidth: 0, // hide the vertical tick on xAxis labels
            tickPositioner: this.input.xAxisPositioner, // optional input to allow configuring the position of xAxis tick marks
        };
    }
    getYAxisConfig(series) {
        const component = this; // component reference used in formatter functions that don't have the same scope
        let yLabelsItterator = 0; // used when yAxisLabels array is provided in input
        let maxVal = 0; // use to determine the highest yAxis value
        // configure the symbol used for each series markers

        series.forEach((seriesItem) => {
            maxVal = Math.max(...seriesItem.data, maxVal);
        });
        return {
            gridLineColor: gridColor, // sets the horizontal grid line colors
            opposite: true, // moves yAxis labels to the right side of the chart
            labels: {
                // if yAxisLabels are not passed in display the standard label
                format: !this.input.yAxisLabels && '${text}',
                // if yAxisLabels array is passed in this formatter function is needed to
                // return the proper label for each yAxis tick mark
                formatter:
                    this.input.yAxisLabels &&
                    function () {
                        if (this.isFirst) {
                            yLabelsItterator = -1;
                        }
                        yLabelsItterator = yLabelsItterator + 1;
                        return component.input.yAxisLabels[yLabelsItterator];
                    },
                style: {
                    color: labelsColor, // setting label colors
                },
            },
            maxVal,
            title: {
                enabled: false, // hide the axis label next to the axis
            },
            offset: 0, // set to zero for no offset refer to https://api.highcharts.com/highcharts/yAxis.offset
            // passed in function for yAxisPositioner refer to https://api.highcharts.com/highcharts/yAxis.tickPositioner for use
            tickPositioner: this.input.yAxisPositioner,
        };
    }
    getLegendConfig() {
        return {
            // if only a single series is provided do not display the legend
            enabled: this.input.series.length > 1,
            symbolRadius: 6, // corner radius on legend identifiers svg element
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
            formatter: function () {
                // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for dateFormat variables
                return tooltipTemplate.renderToString({
                    // eslint-disable-next-line no-undef,new-cap
                    date: Highcharts.dateFormat('%b %e, %Y', this.points[0].x, false),
                    points: this.points,
                    seriesLength: component.input.series.length > 1,
                });
            },
            useHTML: true, // allows defining html to format tooltip content
            backgroundColor: tooltipBackgroundColor, // sets tooltip background color
            borderWidth: 0, // hide the default border stroke
            borderRadius: 10, // set the border radius of the tooltip
            outside: true, // used to render the tooltip outside of the main SVG element
            shadow: false, // hide the default shadow as it conflicts with designs
            crosshairs: {
                dashStyle: 'solid', // makes a yaxis cross hair appear over the hovered xAxis data points
            },
            shared: true, // shared means that if there are multipe series passed in there will be a single tooltip element per xAxis point
            style: {
                filter: tooltipShadows, // sets tooltip shadows
                fontSize: '12px',
            },
        };
    }
    getPlotOptionsConfig(series) {
        const mouseOut = debounce(() => this.handleMouseOut(), 80);
        const mouseOver = debounce((e) => this.handleMouseOver(e), 85); // 85ms delay for debounce so it doesn't colide with mouseOut debounce calls

        return {
            line: {
                events: {
                    // assign mouse events to point hovers
                    mouseOut,
                },
            },
            series: {
                description: this.input.description, // set the description that was passed in
                lineWidth: 3, // sets the line width for series lines
                // sets the starting point of the xAxis to the first data point
                // if not set the auto resizing of the xAxis will often leave a gap in data on the left hand side
                pointStart: series[0].data[0].x,
                point: {
                    // assign mouse events to point hovers
                    events: {
                        mouseOver,
                        mouseOut,
                    },
                },
            },
        };
    }
    handleMouseOut() {
        // this function is debounced to improve performance
        this.chartRef.series.forEach((s) => {
            s.data.forEach((data) => {
                // check if hover is on the xAxis (onTick) for each item,
                // and if they have a className remove and disable the marker
                if (!data.onTick && data.className !== null) {
                    data.update(
                        {
                            className: null, // nullify className if not active
                            marker: {
                                enabled: false, // disable marker if not active
                            },
                        },
                        false, // disable auto redraw
                        false // disable auto animation
                    );
                } else if (data.onTick && data.className === null) {
                    data.update(
                        {
                            className: 'ebay-line-graph__marker--visible', // set classname
                            onTick: data.onTick, // sets the onTick flag to keep track of the points enabled status for mouse events
                            marker: {
                                enabled: true, // set marker enabled
                                radius: pointSize, // set the size of marker
                                lineColor: backgroundColor, // set border color of hover markers
                                lineWidth: 2, // sets the border line width of the marker symbol
                            },
                        },
                        false, // disable auto redraw
                        false // disable auto animation
                    );
                }
            });
        });
        this.chartRef.redraw(); // trigger redraw after all points have been updated
    }
    handleMouseOver(e) {
        // this function is debounced to improve performance
        this.chartRef.series.forEach((s) => {
            s.data.forEach((data) => {
                // if active xAxis hover position matches the data point x update the marker to display
                if (data.x === e.target.x) {
                    data.update(
                        {
                            className: 'ebay-line-graph__marker--visible', // sets the classname
                            onTick: data.onTick, // sets the onTick flag to keep track of the points enabled status for mouse events
                            marker: {
                                enabled: true, // set marker enabled
                                radius: pointSize, // set the size of marker
                                lineColor: backgroundColor, // set border color of hover markers
                                lineWidth: 2, // sets the border line width of the marker symbol
                            },
                        },
                        false, // disable auto redraw
                        false // disable auto animation
                    );
                } else if (!data.onTick && data.className !== null) {
                    data.update(
                        {
                            className: null, // nullify className if not active
                            onTick: data.onTick, // sets the onTick flag to keep track of the points enabled status for mouse events
                            marker: {
                                enabled: false, // disable marker
                            },
                        },
                        false, // disable auto redraw
                        false // disable auto animation
                    );
                }
            });
        });
        this.chartRef.redraw(); // trigger redraw after all points have been updated
    }
    updateMarkers(e) {
        if (this.input.plotPoints) {
            // ticks is an object with the xaxis date values as their keys
            // setting tickValues to the keys of the ticks object and parsing into an int for data matching of xValues in series below
            this.tickValues = Object.keys(this.chartRef.axes[0].ticks).map((value) =>
                parseInt(value, 10)
            );

            // this checks if the resize has adjust the number of xAxis tick marks, and if so make updates
            if (this.axisTicksLength !== this.tickValues.length || e === true) {
                // update the axisTicksLenth variable used for checks in the updateMarkers calls
                this.axisTicksLength = this.tickValues.length;
                // loops through each series if a className exist remove and hide the marker
                this.chartRef.series.forEach((series) => {
                    // looping through each series data array
                    series.data.forEach((data) => {
                        if (data.className !== null) {
                            data.update(
                                {
                                    className: null, // removing className used to help keep track of active markers
                                    onTick: false, // sets the onTick flag to keep track of the points enabled status for mouse events
                                    marker: {
                                        enabled: false, // disable the marker
                                    },
                                },
                                false, // disable auto redraw
                                false // disable auto animation
                            );
                        }
                    });
                });

                // loop through each series again and update markers that line up to xAxis tick marks
                this.chartRef.series.forEach((series) => {
                    // loop through each searies data objects
                    series.data.forEach((data) => {
                        // loop through the tickValues that come from the x axis ticks and are epoch time stamps
                        this.tickValues.forEach((tick) => {
                            // if the current point x value matches the tickValue or the updateMarkers event exist from the redraw event
                            if (tick === data.x || data.x === e) {
                                if (data.className === null) {
                                    data.update(
                                        {
                                            className: 'ebay-line-graph__marker--visible', // add the ebay-line-graph__marker--visible class to boost it's visibility
                                            onTick: true, // sets the onTick flag to keep track of the points enabled status for mouse events
                                            marker: {
                                                enabled: true, // set marker enabled
                                                radius: pointSize, // set the size of the marker
                                                lineColor: backgroundColor, // set the border color of the hover markers
                                                lineWidth: 2, // set the border width of the hover markers
                                            },
                                        },
                                        false, // disable auto redraw
                                        false // disable auto animation
                                    );
                                }
                            }
                        });
                    });
                });
                this.chartRef.redraw(); // trigger redraw after all points have been updated
            }
        }
    }
    onDestroy() {
        this.chartRef.destroy();
    }
}
