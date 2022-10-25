import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import patternFill from 'highcharts/modules/pattern-fill';

import {
    backgroundColor,
    gridColor,
    labelsColor,
    legendColor,
    legendInactiveColor,
    legendHoverColor,
    tooltipBackgroundColor,
    tooltipShadows,
    setSeriesColors,
} from '../../common/charts/colors';

import { ebayLegend } from '../../common/charts/legend';
import { eBayColumns } from '../../common/charts/bar-chart';

if (typeof Highcharts === 'object') {
    accessibility(Highcharts);
    patternFill(Highcharts);
    ebayLegend(Highcharts);
    eBayColumns(Highcharts);
}

export default class {
    onCreate() {
        this.chartRef = null;
        this.axisTicksLength = -1;
        this.state = {
            containerId: `ebay-bar-chart-${this.id}`,
        };
    }
    onMount() {
        const _this = this;

        const series = Array.isArray(this.input.series) ? this.input.series : [this.input.series];

        let maxVal = 0;
        series.forEach((s) => {
            maxVal = s.data.reduce((p, c) => (c > p ? c : p), maxVal);
        });

        const colors = setSeriesColors(series);

        // controls rounded corders and spacing at the bottom of data points
        if (this.input.stacked) {
            series[0].bottom = true;
            series[series.length - 1].top = true;

            series.forEach((s) => {
                s.group = ':previous';
            });
        } else {
            series.forEach((s) => {
                s.top = true;
                s.bottom = true;
            });
        }
        let yLabelsItterator = 0;
        const config = {
            title: {
                text: this.input.title,
            },
            chart: {
                type: 'column',
                backgroundColor: backgroundColor,
                style: {
                    fontFamily: '"Market Sans", Arial, sans-serif',
                },
            },
            colors,
            xAxis: {
                type: 'datetime',
                labels: {
                    format: this.input.xAxisLabelFormat
                        ? this.input.xAxisLabelFormat
                        : '{value:%b %e}',
                    align: 'center',
                    style: {
                        color: labelsColor,
                    },
                },
                tickWidth: 0,
                tickPositioner: this.input.xAxisPositioner,
            },
            yAxis: {
                gridLineColor: gridColor,
                opposite: true,
                reversedStacks: false,
                labels: {
                    format: !this.input.yAxisLabels && '${text}',
                    formatter:
                        this.input.yAxisLabels &&
                        function () {
                            if (this.isFirst) {
                                yLabelsItterator = -1;
                            }
                            yLabelsItterator = yLabelsItterator + 1;
                            return _this.input.yAxisLabels[yLabelsItterator];
                        },
                    style: {
                        color: labelsColor,
                    },
                },
                maxVal,
                title: {
                    enabled: false,
                },
                offset: 0,
                tickPositioner: this.input.yAxisPositioner,
            },
            legend: {
                symbolRadius: 2,
                enabled: this.input.series.length > 1,
                itemStyle: {
                    color: legendColor,
                },
                itemHiddenStyle: {
                    color: legendInactiveColor,
                },
                itemHoverStyle: {
                    color: legendHoverColor,
                },
            },
            tooltip: {
                formatter: function () {
                    let s;
                    if (_this.input.stacked) {
                        s = `<b>${Highcharts.dateFormat('%b %e, %Y', this.x, false)}</b>`;
                        _this.chartRef.series.forEach((serie) => {
                            serie.data.forEach((d) => {
                                if (d.x === this.x) {
                                    s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">${serie.name}<span style="margin-left: 16px">${d.label}</span></div>`;
                                }
                            });
                        });
                    } else {
                        s = `<b>${Highcharts.dateFormat('%b %e, %Y', this.x, false)}</b>`;
                        s += `<div><span>${this.point.label}</span></div>`;
                    }
                    return s;
                },
                useHTML: true,
                pointFormat: '{point.y}',
                backgroundColor: tooltipBackgroundColor,
                borderColor: '#000',
                borderWidth: 0,
                borderRadius: 10,
                outside: true,
                shadow: false,
                crosshairs: {
                    dashStyle: 'solid',
                },
                style: {
                    filter: tooltipShadows,
                    fontSize: '12px',
                },
                positioner:
                    this.input.stacked &&
                    function (labelWidth, labelHeight) {
                        const chartPosition = this.chart.pointer.getChartPosition();
                        const hpIndex = this.chart.hoverPoint.index;
                        const hoverPoint = this.chart.hoverPoint,
                            y =
                                chartPosition.top +
                                hoverPoint.series.yAxis.top +
                                this.chart.series[this.chart.series.length - 1].data[hpIndex]
                                    .shapeY -
                                labelHeight -
                                15;
                        let x =
                            chartPosition.left +
                            hoverPoint.dlBox.x +
                            hoverPoint.dlBox.width * 0.5 -
                            labelWidth * 0.5 +
                            3; // offset padding
                        // check left bound and adjust
                        if (x < 6) {
                            x = 6;
                        }
                        // check right bound and adjust
                        if (
                            x + hoverPoint.dlBox.width >
                            chartPosition.left + this.chart.chartWidth - 6
                        ) {
                            x =
                                chartPosition.left +
                                this.chart.chartWidth -
                                hoverPoint.dlBox.width -
                                6;
                        }
                        return { x, y };
                    },
            },
            plotOptions: {
                series: {
                    description: this.input.description,
                },
                column: {
                    events: {
                        legendItemClick: function () {
                            if (_this.input.stacked) {
                                setTimeout(() => {
                                    let topFound = false;
                                    let bottomFound = false;

                                    for (let i = 0; i < this.chart.series.length; i++) {
                                        if (!bottomFound && this.chart.series[i].visible) {
                                            this.chart.series[i].options.bottom = true;
                                            bottomFound = true;
                                        } else {
                                            this.chart.series[i].options.bottom = false;
                                        }
                                    }

                                    for (let i = this.chart.series.length - 1; i >= 0; i--) {
                                        if (!topFound && this.chart.series[i].visible) {
                                            this.chart.series[i].options.top = true;
                                            topFound = true;
                                        } else {
                                            this.chart.series[i].options.top = false;
                                        }
                                    }
                                    this.chart.redraw();
                                }, 0);
                            }
                        },
                    },
                    className: this.input.stacked
                        ? 'ebay-bar-chart-column-stacked'
                        : 'ebay-bar-chart-column',
                    stacking: this.input.stacked ? 'normal' : null,
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    borderRadius: !this.input.stacked ? 3 : null,
                    groupPadding: 0.1,
                    pointPadding: 0.15,
                    states: {
                        inactive: {
                            opacity: 1,
                        },
                    },
                    point: {
                        events: {
                            mouseOver: function () {
                                const refPoint = this;
                                const chart = this.series.chart;
                                chart.series.forEach((s) =>
                                    s.points.forEach((p) => {
                                        if (
                                            (_this.input.stacked && p.x !== refPoint.x) ||
                                            (!_this.input.stacked && p !== refPoint)
                                        ) {
                                            p.update(
                                                {
                                                    opacity: 0.2,
                                                },
                                                false
                                            );
                                        }
                                    })
                                );
                                chart.redraw();
                            },
                            mouseOut: function () {
                                const chart = this.series.chart;
                                chart.series.forEach((s) =>
                                    s.points.forEach((p) =>
                                        p.update(
                                            {
                                                opacity: 1,
                                            },
                                            false
                                        )
                                    )
                                );
                                chart.redraw();
                            },
                        },
                    },
                },
            },
            series,
            credits: {
                enabled: false,
            },
        };
        this.chartRef = Highcharts.chart(this.state.containerId, config);
    }
}
