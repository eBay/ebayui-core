<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-area-chart
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.7.0
    </span>
</h1>

```marko
<ebay-area-chart
    title="Sample chart title"
    description="Chart displaying random sample values"
    series=[{
        x: 1658818800000,
        y: 1855,
        label: '$1,855.00'
    },{
        x: 1658818900000,
        y: 2200.04,
        label: '$2,200.04'
    },{
        x: 1658819000000,
        y: 1255,
        label: '$1,255.00'
    }]
/>
```

## Description

The area chart displays one to five series of data points as an interactive stacked area chart

## Attributes

| Name               | Type     | Stateful | Required | Description                                                                                                                                                                                                                         |
| ------------------ | -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`            | String   | No       | No       | A title displayed above the graph                                                                                                                                                                                                   |
| `description`      | String   | No       | Yes      | A description of what the chart is displaying                                                                                                                                                                                       |
| `trend`            | String   | No       | No       | Trend can bet set to `true`, `positive`, or `negative` if set to true the trend is auto calculated by comparing the first and last data points y value                                                                              |
| `series`           | Array    | No       | Yes      | The series is an array of one to five arrays of point objects, each point contains an `x`, `y`, and `label`. `x` is an epoch/unix time code, `y` is a numeric value, `label` is what is displayed for the `y` value in the tool tip |
| `xAxisLabelFormat` | String   | No       | No       | Used to modify the display of the x-axis labels. Accepts a string like `{value:%Y-%m-%d}`. Refer to https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat for available format keys                                 |
| `xAxisPositioner`  | Function | No       | No       | A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed. You can access `this.dataMin` and `this.dataMax` from the function to help determine positions.                            |
| `yAxisLabels`      | Array    | No       | No       | An array of labels to use on the y-axis. Use in conjunction with yAxisPositioner. Make sure the length of the yAxisLabels match the length of the positions array returned by the yAxisPositioner function                          |
| `yAxisPositioner`  | Function | No       | No       | A custom function that returns an array of numeric values where y-axis labels will be displayed. You can access `this.dataMin` and `this.dataMax` from the function to help determine positions                                     |
| `class`            | String   | No       | No       | A class name that will be added to the main chart container                                                                                                                                                                         |
