<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-donut-chart
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

```marko
<ebay-donut-chart aria-labelledby="donutChartTitle">
    <@description>Chart displaying random sample values</@description>
    <@portion value="1" text="Value 1"/>
    <@portion value="2" text="Value 2"/>
    <@portion value="3" text="Value 3"/>
</ebay-donut-chart>
```

## Description

The donut chart displays percentages as an svg with a labels list, and optional metrics and subtitle

## Attributes

| Name              | Type   | Stateful | Required | Description                                                                                |
| ----------------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------ |
| `aria-labelledby` | String | No       | Yes      | no default, this element ID is required to provide a title to the chart for screen readers |

## Sub-tags

| Tag              | Required | Description                                                               |
| ---------------- | -------- | ------------------------------------------------------------------------- |
| `<@description>` | No       | A description of what the chart is displaying                             |
| `<@portion>`     | Yes      | defines each portion of the chart and requires a value and text attribute |
| `<@metric>`      | No       | A string to display as a large metric value                               |
| `<@subtitle>`    | No       | A string displayed below the metric value                                 |

## @description

### @description Usage

```marko
 <@description>Chart displaying random sample vlaues</@description>
```

## @portion

### @portion Usage

```marko
 <@portion value="1" text="value label 1">
```

### @portion Attributes

| Name    | Type   | Stateful | Required | Description                                                                                     |
| ------- | ------ | -------- | -------- | ----------------------------------------------------------------------------------------------- |
| `value` | String | No       | Yes      | string that must contain a numeric value to be parsed for chart generation, for example `$10.0` |
| `text`  | String | No       | Yes      | label that is displayed in the legend for the portion of the chart and used for a11y            |
