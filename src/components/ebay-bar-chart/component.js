import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import patternFill from 'highcharts/modules/pattern-fill';

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
} from '../../common/charts/shared';

import { ebayLegend } from '../../common/charts/legend';
import { eBayColumns } from '../../common/charts/bar-chart';

export default class {
    onMount() {
        this._initializeHighchartsExtensions();
        this._setupCharts();
    }
    getContainerId() {
        return `ebay-bar-chart-${this.id}`;
    }
    _initializeHighchartsExtensions() {
        // enable highcharts accessibility with wrapper function
        accessibility(Highcharts);
        // patternFill highcharts wrapper function enables rendering patterns instead of just solid colors
        patternFill(Highcharts);
        // add custom legend wrapper function
        ebayLegend(Highcharts);
        // add custom columns wrapper to enable rounded bar corners, and stacks with spaces between each stacked point
        eBayColumns(Highcharts);
    }
    _setupCharts() {
        // check if a single series was passed in for series and if so add it to a new array
        const series = Array.isArray(this.input.series) ? this.input.series : [this.input.series];
        // controls rounded corders and spacing at the bottom of data points
        if (this.input.stacked) {
            series[0].bottom = true; // set a variable on the first series so it renders rounder corners on the bottom of the bar
            series[series.length - 1].top = true; // set a variable on the last series to render rounded corner on the top of the bar

            series.forEach((s) => {
                // used to help link each series to the previous one for stacked views
                // refer to https://api.highcharts.com/highcharts/series.column.linkedTo
                s.group = ':previous';
            });
        } else {
            // if not stacked, set the top and bottom flag on each series so the single bar has rounded top and bottom corners
            series.forEach((s) => {
                s.top = true;
                s.bottom = true;
            });
        }
        const config = {
            title: {
                text: this.input.title, // set the title that will render above the chart
            },
            chart: this.getChartConfig(),
            colors: setSeriesColors(series),
            xAxis: this.getXAxisConfig(),
            yAxis: this.getYAxisConfig(series),
            legend: this.getLegendConfig(),
            tooltip: this.getTooltipConfig(),
            plotOptions: this.getPlotOptionsConfig(),
            series,
            credits: {
                enabled: false, // hide the highcharts label and link in the bottom right
            },
        };
        this.chartRef = Highcharts.chart(this.getContainerId(), config);
        this.chartRef.redraw();
    }

    getChartConfig() {
        return {
            type: 'column',
            backgroundColor: backgroundColor, // set the chart background color
            style: {
                fontFamily: chartFontFamily, // set the font for all chart svg text elements
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
            tickPositioner: this.input.xAxisPositioner, // optional input to allow configuring the position of xAxis tick marks
        };
    }

    getYAxisConfig(series) {
        const component = this; // component reference used in formatter functions that don't have the same scope
        let maxVal = 0; // use to determine the highest yAxis value
        series.forEach((s) => {
            maxVal = s.data.reduce((p, c) => (c > p ? c : p), maxVal);
        });
        let yLabelsItterator = 0;
        return {
            gridLineColor: gridColor, // sets the horizontal grid line colors
            opposite: true, // moves yAxis labels to the right side of the chart
            reversedStacks: false, // makes so series one starts at the bottom of the yAxis, by default this is true
            labels: {
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
            symbolRadius: 2, // set corner radius of legend identifiers
            enabled: this.input.series.length > 1, // disabled legend if only one series is passed in
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
    tooltipFormatter() {
        // function returns a function so it can keep a reference to the component scope
        const component = this; // component reference used in formatter functions that don't have the same scope
        return function () {
            // refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for dateFormat variables
            // s is used to compile html string of formatted tooltip data
            let s = `<b>${Highcharts.dateFormat('%b %e, %Y', this.x, false)}</b>`; // sets the displayed date at the top of the tooltip
            if (component.input.stacked) {
                // setup html for stacked tooltip
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
                // add the label value from the data point to the tooltip below the date
                s += `<div><span>${this.point.label}</span></div>`;
            }
            return s;
        };
    }
    tooltipPositioner(labelWidth, labelHeight) {
        const chartPosition = this.chart.pointer.getChartPosition(); // returns the pointers top and left positions
        const hpIndex = this.chart.hoverPoint.index; // reference to the index of the original hovered point of the series
        const hoverPoint = this.chart.hoverPoint, // reference to the original hovered point of the series
            y = // setting the y position of the tooltip to the top of the hovered stack of points
                chartPosition.top +
                hoverPoint.series.yAxis.top +
                this.chart.series[this.chart.series.length - 1].data[hpIndex].shapeY -
                labelHeight -
                15; // adjust for the arrow
        let x = // setting the x position of the tooltip based on the center of the hovered stack of points
            chartPosition.left +
            hoverPoint.dlBox.x +
            hoverPoint.dlBox.width * 0.5 -
            labelWidth * 0.5 +
            3; // offset padding
        // check left bound and adjust if the tooltip would be clipped
        if (x < 6) {
            x = 6;
        }
        // check right bound and adjust if the tooltip would be clipped
        if (x + hoverPoint.dlBox.width > chartPosition.left + this.chart.chartWidth - 6) {
            x = chartPosition.left + this.chart.chartWidth - hoverPoint.dlBox.width - 6;
        }
        return { x, y }; // return the tooltip x and y position
    }

    getTooltipConfig() {
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
                fontSize: '12px',
            },
            // this callback function is used to position the tooltip at the top of the stacked bars
            positioner: this.input.stacked && this.tooltipPositioner,
        };
    }

    legendItemClick() {
        // returns a function so that can access input values
        const component = this; // component reference used in item click functions that don't have the same scope
        return function () {
            if (component.input.stacked) {
                // setTimeout with 0 ms to push this function to the end of the execution stack to prevent issues with hover events
                setTimeout(() => {
                    let topFound = false;
                    let bottomFound = false;
                    // loop through and reset bottom variables on series based on their visibility
                    for (let i = 0; i < this.chart.series.length; i++) {
                        if (!bottomFound && this.chart.series[i].visible) {
                            this.chart.series[i].options.bottom = true;
                            bottomFound = true;
                        } else {
                            this.chart.series[i].options.bottom = false;
                        }
                    }

                    // loop through and reset top variables on series based on their visibility
                    for (let i = this.chart.series.length - 1; i >= 0; i--) {
                        if (!topFound && this.chart.series[i].visible) {
                            this.chart.series[i].options.top = true;
                            topFound = true;
                        } else {
                            this.chart.series[i].options.top = false;
                        }
                    }
                    this.chart.redraw(); // redraw the chart after all series variables have been updated
                }, 0);
            }
        };
    }

    // handleMouseOver returns a function while keeping scope to the class compnent to access input values
    handleMouseOver() {
        const component = this; // component reference used in mouse over functions that don't have the same scope
        return function () {
            const refPoint = this; // this is the active hovered point of the series
            const chart = this.series.chart;
            chart.series.forEach(
                (
                    s // loop through each series
                ) =>
                    s.points.forEach((p) => {
                        // loop through each point in the series
                        if (
                            (component.input.stacked && p.x !== refPoint.x) || // if the stacked flag is set to true and each points x value does not match
                            (!component.input.stacked && p !== refPoint) // or if not stacked and refPoint does not match the current point
                        ) {
                            p.update(
                                {
                                    opacity: 0.2, // set opacity
                                },
                                false // do not update immediately
                            );
                        }
                    })
            );
            chart.redraw(); // trigger chart redraw after all points have been updated
        };
    }

    handleMouseOut() {
        const chart = this.series.chart;
        chart.series.forEach(
            (
                s // loop through each series
            ) =>
                s.points.forEach(
                    (
                        p // loop through each point in the series
                    ) =>
                        p.update(
                            {
                                opacity: 1, // update the opacity to 1
                            },
                            false // do not update immediately
                        )
                )
        );
        chart.redraw(); // trigger chart redraw after all points have been updated
    }

    getPlotOptionsConfig() {
        return {
            series: {
                description: this.input.description,
            },
            column: {
                events: {
                    legendItemClick: this.legendItemClick(),
                },
                stacking: this.input.stacked ? 'normal' : null, // set stacking to normal if stacked flag is set
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
