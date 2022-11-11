import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import {
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
} from '../../common/charts/colors';

const pointSize = 6;
if (typeof Highcharts === 'object') {
    accessibility(Highcharts);
}

export default class {
    onCreate() {
        this.chartRef = null;
        this.axisTicksLength = -1;
        this.activeX = -1;
        this.state = {
            containerId: `ebay-line-graph-${this.id}`,
        };
    }
    onMount() {
        const colors = [
            lineChartPrimaryColor,
            lineChartSecondaryColor,
            lineChartTertiaryColor,
            lineChartQueternaryColor,
            lineChartQuinaryColor,
        ];

        this.updateMarkers = this.updateMarkers.bind(this);
        this.debounce = this.debounce.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.mouseOut = this.debounce(() => this.handleMouseOut(), 80);
        this.mouseOver = this.debounce((e) => this.handleMouseOver(e), 85);

        const _this = this;
        const series = Array.isArray(this.input.series) ? this.input.series : [this.input.series];

        let maxVal = 0;
        series.forEach((s, i) => {
            s.marker = {
                symbol: this.getSymbol(i),
            };
            maxVal = s.data.reduce((p, c) => (c > p ? c : p), maxVal);
        });

        let baseLineColor = colors[0];
        if (this.input.trend) {
            const trend = typeof this.input.trend === 'string' && this.input.trend.toLowerCase();
            const isPositive = series[0].data[0].y < series[0].data[series[0].data.length - 1].y;
            if (
                trend === 'positive' ||
                (trend !== 'negative' && trend !== 'neutral' && isPositive)
            ) {
                baseLineColor = trendPositiveColor;
            } else if (trend === 'negative' || (trend !== 'neutral' && !isPositive)) {
                baseLineColor = trendNegativeColor;
            }
        }
        colors[0] = baseLineColor;
        let yLabelsItterator = 0;
        const config = {
            title: {
                text: this.input.title,
                align: 'left',
                useHTML: true,
                style: {
                    fontSize: '18px',
                    fontWeight: 700,
                },
            },
            chart: {
                type: 'line',
                backgroundColor: backgroundColor,
                style: {
                    fontFamily: '"Market Sans", Arial, sans-serif',
                },
                events: {
                    redraw: this.updateMarkers,
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
                enabled: this.input.series.length > 1,
                symbolRadius: 6,
                symbolWidth: 12,
                symbolHeight: 12,
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
                    let s = `<b>${Highcharts.dateFormat(
                        '%b %e, %Y',
                        this.points[0].x,
                        false
                    )}</b><br/>`;
                    this.points.forEach((p) => {
                        if (p.point.tooltip) {
                            s = p.point.tooltip;
                        } else {
                            if (_this.input.series.length > 1) {
                                s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">${p.series.name}<span style="margin-left: 16px">${p.point.label}</span></div>`;
                            } else {
                                s += ` ${p.point.label}`;
                            }
                        }
                    });
                    return s;
                },
                useHTML: true,
                pointFormat: '{point.y}',
                backgroundColor: tooltipBackgroundColor,
                borderWidth: 0,
                borderRadius: 10,
                outside: true,
                shadow: false,
                crosshairs: {
                    dashStyle: 'solid',
                },
                shared: true,
                style: {
                    filter: tooltipShadows,
                    fontSize: '12px',
                },
            },
            plotOptions: {
                line: {
                    events: {
                        mouseOut: this.mouseOut,
                    },
                },
                series: {
                    description: this.input.description,
                    lineWidth: 3,
                    pointStart: series[0].data[0].x,
                    point: {
                        events: {
                            mouseOver: this.mouseOver,
                            mouseOut: this.mouseOut,
                        },
                    },
                },
            },
            series,
        };

        this.chartRef = Highcharts.chart(this.state.containerId, config);
        this.updateMarkers();
    }
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
        this.chartRef.series.forEach((s) => {
            s.data.forEach((d) => {
                if (!d.onTick && d.className !== null) {
                    d.update(
                        {
                            className: null,
                            marker: {
                                enabled: false,
                            },
                        },
                        false,
                        false
                    );
                } else if (d.onTick && d.className === null) {
                    d.update(
                        {
                            className: 'visible',
                            onTick: d.onTick,
                            marker: {
                                enabled: true,
                                radius: pointSize,
                                lineColor: backgroundColor,
                                lineWidth: 2,
                            },
                        },
                        false,
                        false
                    );
                }
            });
        });
        this.chartRef.redraw();
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
    handleMouseOver(e) {
        this.lastX = this.activeX;
        this.activeX = e.target.x;
        this.chartRef.series.forEach((s) => {
            s.data.forEach((d) => {
                if (d.x === e.target.x) {
                    d.update(
                        {
                            className: 'visible',
                            onTick: d.onTick,
                            marker: {
                                enabled: true,
                                radius: pointSize,
                                lineColor: backgroundColor,
                                lineWidth: 2,
                            },
                        },
                        false,
                        false
                    );
                } else if (!d.onTick && d.className !== null) {
                    d.update(
                        {
                            className: null,
                            onTick: d.onTick,
                            marker: {
                                enabled: false,
                            },
                        },
                        false,
                        false
                    );
                }
            });
        });
        this.chartRef.redraw();
    }
    updateMarkers(e) {
        if (this.input.plotPoints) {
            // ticks is an object with the xaxis date values as their keys
            this.tickValues = Object.keys(this.chartRef.axes[0].ticks).map((v) => parseInt(v, 10));

            if (this.axisTicksLength !== this.tickValues.length || e === true) {
                this.axisTicksLength = this.tickValues.length;
                this.chartRef.series.forEach((s) => {
                    s.data.forEach((d) => {
                        if (d.className !== null) {
                            d.update(
                                {
                                    className: null,
                                    onTick: false,
                                    marker: {
                                        enabled: false,
                                    },
                                },
                                false,
                                false
                            );
                        }
                    });
                });

                this.chartRef.series.forEach((s) => {
                    s.data.forEach((d) => {
                        this.tickValues.forEach((t) => {
                            if (t === d.x || d.x === e) {
                                if (d.className === null) {
                                    d.update(
                                        {
                                            className: 'visible',
                                            onTick: true,
                                            marker: {
                                                enabled: true,
                                                radius: pointSize,
                                                lineColor: backgroundColor,
                                                lineWidth: 2,
                                            },
                                        },
                                        false,
                                        false
                                    );
                                }
                            }
                        });
                    });
                });
                this.chartRef.redraw();
            }
        }
    }
}
