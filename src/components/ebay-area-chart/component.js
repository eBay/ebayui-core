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

if (typeof Highcharts === 'object') {
    accessibility(Highcharts);
    patternFill(Highcharts);
    ebayLegend(Highcharts);
}
const pointSize = 1.5;

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

        this.debounce = this.debounce.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.mouseOut = this.debounce(() => this.handleMouseOut(), 80);
        this.mouseOver = this.debounce((e) => this.handleMouseOver(e), 85);

        const series = Array.isArray(this.input.series) ? this.input.series : [this.input.series];

        let maxVal = 0;
        series.forEach((s, i) => {
            maxVal = s.data.reduce((p, c) => (c > p ? c : p), maxVal);
            s.zIndex = series.length - i;
            s.marker = {
                symbol: 'circle',
                borderWidth: 3,
            };
        });

        const colors = setSeriesColors(series);
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
                type: 'area',
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
                crosshair: {
                    zIndex: 3,
                },
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
                enabled: this.input.series.length > 1,
                symbolRadius: 2,
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
                    let s;
                    if (_this.chartRef.series.length > 1) {
                        s = `<b>${Highcharts.dateFormat('%b %e, %Y', this.x, false)}</b></br>`;
                        _this.chartRef.series.forEach((serie) => {
                            serie.data.forEach((d) => {
                                if (d.x === this.x) {
                                    s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">${serie.name}<span style="margin-left: 16px">${d.label}</span></div>`;
                                }
                            });
                        });
                    } else {
                        s = `<b>${Highcharts.dateFormat('%b %e, %Y', this.x, false)}</b>`;
                        this.points.forEach((d) => {
                            if (d.x === this.x) {
                                s += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;"><span style="margin-left: 16px">${d.point.label}</span></div>`;
                            }
                        });
                    }
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
                series: {
                    description: this.input.description,
                    stacking: 'normal',
                    point: {
                        events: {
                            mouseOver: this.mouseOver,
                            mouseOut: this.mouseOut,
                        },
                    },
                },
                area: {
                    className: 'ebay-area-chart',
                    borderWidth: 1,
                    lineWidth: 1,
                    borderRadius: 3,
                    states: {
                        inactive: {
                            opacity: 1,
                        },
                    },
                },
            },
            series,
        };
        this.chartRef = Highcharts.chart(this.state.containerId, config);
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
                                lineWidth: 4,
                                fillColor: '#000000',
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
                                lineWidth: 4,
                                fillColor: '#000000',
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
}
