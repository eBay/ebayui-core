<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-spark-line
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.7.0
    </span>
</h1>

```marko
<ebay-line-chart
    data=[{
        x: 1658818800000,
        y: 1855
    },{
        x: 1658818900000,
        y: 2200.04
    },{
        x: 1658819000000,
        y: 1255
    }]
/>
```

## Description

The spark line displays data points as a static svg graphic

## Attributes

| Name    | Type   | Stateful | Required | Description                                                                     |
| ------- | ------ | -------- | -------- | ------------------------------------------------------------------------------- |
| `trend` | String | No       | No       | Trend can bet set to `positive` or `negative` to change the color of the line   |
| `data`  | Array  | No       | Yes      | The data is an array of point objects, each point contains an `x` and `y` value |
