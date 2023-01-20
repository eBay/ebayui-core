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
    setSeriesColors,
    colorMapping,
} from '../../common/charts/shared';
import { debounce } from '../../common/event-utils';
import { ebayLegend } from '../../common/charts/legend';

const pointSize = 1.5;

export default class {
    onInput() {
        // if chartRef does not exist do not try to run setupCharts as it may be server side and highcharts only works on the client side
        if (this.chartRef && this.chartRef.destroy) {
            this.chartRef.destroy();
            this._setupCharts();
        }
    }

    onCreate() {
        this.cdnLoader = new CDNLoader(this, {
            stagger: true,
            key: 'highcharts',
            types: ['src', 'src', 'src'],
            files: ['highcharts.js', 'accessibility.js', 'pattern-fill.js'],
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
                ],
                this.input.version
            )
            .mount();
    }

    handleError(err) {
        this.emit('load-error', err);
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
        this.mouseOver = this.debounce((e) => this.handleMouseOver(e), 85); // 85ms delay for debounce so it doesn't colide with mouseOut debounce calls
    }
    _setupCharts() {
        // check if a single series was passed in for series and if so add it to a new array
        const series = Array.isArray(this.input.series) ? this.input.series : [this.input.series];

        // update the zIndex of each series object so they render in the correct order
        // and configure the markers that are displayed on hover
        series.forEach((s, i) => {
            s.zIndex = series.length - i;
            s.marker = {
                symbol: 'circle',
                borderWidth: 3,
            };
        });
        setSeriesColors(series);

        const config = {
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
    getTitleConfig() {
        return {
            text: this.input.title,
            align: 'left',
            useHTML: true,
            style: {
                // styles are set in JS since they are rendered in the SVG
                fontSize: '18px',
                fontWeight: 700,
            },
        };
    }
    getChartConfig() {
        return {
            type: 'area',
            backgroundColor: backgroundColor,
            style: {
                // styles are set in JS since they are rendered in the SVG
                fontFamily: chartFontFamily,
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
                format: this.input.xAxisLabelFormat ? this.input.xAxisLabelFormat : '{value:%b %e}',
                align: 'center',
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
    getYAxisConfig(series) {
        const component = this; // component reference used in formatter functions that don't have the same scope
        let yLabelsItterator = 0; // used when yAxisLabels array is provided in input
        let maxYAxisValue = 0; // use to determine the highest yAxis value
        series.forEach((s) => {
            maxYAxisValue = s.data.reduce((p, c) => (c > p ? c : p), maxYAxisValue);
        });
        return {
            gridLineColor: gridColor, // sets the horizontal grid line colors
            opposite: true, // moves yAxis labels to the right side of the chart
            reversedStacks: false, // makes so series one starts at the bottom of the yAxis, by default this is true
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
            maxVal: maxYAxisValue,
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
            formatter: function () {
                // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for dateFormat variables
                // s is used to compile html string of formatted tooltip data

                // TODO need to change this to use a component
                // eslint-disable-next-line no-undef,new-cap
                let s = `<b>${Highcharts.dateFormat('%b %e, %Y', this.x, false)}</b></br>`; // sets the displayed date at the top of the tooltip
                if (component.chartRef.series.length > 1) {
                    // setup html for multi series tooltip
                    component.chartRef.series.forEach((serie) => {
                        // cycle through each series
                        serie.data.forEach((d) => {
                            // cycle through each series data array to match x value with active hovered xAxis position
                            if (d.x === this.x) {
                                // when the x value matches the hovered xAxis position
                                s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">${serie.name}<span style="margin-left: 16px">${d.label}</span></div>`;
                            }
                        });
                    });
                } else {
                    // setup html for single series tooltip
                    // cycle through points of the single series and find the one that matches the active xAxis
                    this.points.forEach((d) => {
                        if (d.x === this.x) {
                            // when the x value matches the hovered xAxis position
                            s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;"><span style="margin-left: 16px">${d.point.label}</span></div>`;
                        }
                    });
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
                fontSize: '12px',
            },
        };
    }

    getPlotOptions() {
        return {
            series: {
                description: this.input.description, // set the description that was passed in
                // config stacking to normal to make sure series stack without overlapping
                // refer to https://api.highcharts.com/highcharts/plotOptions.area.stacking
                stacking: 'normal',
                point: {
                    // assign mouse events to point hovers
                    events: {
                        mouseOver: this.mouseOver,
                        mouseOut: this.mouseOut,
                    },
                },
            },
            area: {
                className: 'ebay-area-chart', // add class to area chart to allow targetted styles from style.less file
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
    debounce(func, timeout = 100) {
        let timer;
        return (...args) => {
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
                if (!d.onTick && d.className !== null) {
                    d.update(
                        {
                            className: null, // nullify className if not active
                            marker: {
                                enabled: false, // disable marker if not active
                            },
                        },
                        false, // disable auto redraw
                        false // disable auto animation
                    );
                } else if (d.onTick && d.className === null) {
                    d.update(
                        {
                            className: 'ebay-area-chart__marker--visible', // set classname
                            onTick: d.onTick, // sets the onTick flag to keep track of the points enabled status for mouse events
                            marker: {
                                enabled: true, // set marker enabled
                                radius: pointSize, // set the size of marker
                                lineColor: backgroundColor, // set border color of hover markers
                                lineWidth: 4, // set border width of hover markers
                                fillColor: '#000000', // set fill color of markers
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
            s.data.forEach((d) => {
                if (d.x === e.target.x) {
                    // if active xAxis hover position matches the data point x update the marker to display
                    d.update(
                        {
                            className: 'ebay-area-chart__marker--visible', // sets the classname
                            onTick: d.onTick, // sets the onTick flag to keep track of the points enabled status for mouse events
                            marker: {
                                enabled: true, // set marker enabled
                                radius: pointSize, // set the size of marker
                                lineColor: backgroundColor, // set border color of hover markers
                                lineWidth: 4, // set border width of hover markers
                                fillColor: '#000000', // set fill color of markers
                            },
                        },
                        false, // disable auto redraw
                        false // disable auto animation
                    );
                } else if (!d.onTick && d.className !== null) {
                    d.update(
                        {
                            className: null, // nullify className if not active
                            onTick: d.onTick, // sets the onTick flag to keep track of the points enabled status for mouse events
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
    onDestroy() {
        this.chartRef.destroy();
    }
}
