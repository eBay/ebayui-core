<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-chart-legend
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

```marko
<ebay-chart-legend legendStyle="table" focusIndex=0>
    <@value value="$ 1" text="Value 1"/>
    <@value value="$ 2" text="Value 2"/>
    <@value value="$ 3" text="Value 3"/>
</ebay-chart-legend>

```

## Description

The chart legend displays a labels list, used to accompany other chart components.

## Attributes

| Name          | Type    | Stateful | Required | Description                                                                              |
| ------------- | ------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| `patternfill` | Boolean | No       | No       | default is false; set to true to display patterns in fills                               |
| `legendStyle` | String  | No       | No       | default is `minimal`; available values are `minimal` or `table`                          |
| `focusIndex`  | Number  | No       | No       | default is -1; set to the index value of the element to highlight. values are zero index |

## @value

### @value Usage

```marko
 <@value value="$ 1" text="value label 1" percentage=33.3>
```

### @value Attributes

| Name         | Type   | Stateful | Required | Description                                                                                                                |
| ------------ | ------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `value`      | String | No       | Yes      | string that must contain a value to display in the table view, for example `$10.0`                                         |
| `text`       | String | No       | Yes      | label that is displayed in the legend for the portion of the chart and used for a11y                                       |
| `percentage` | Number | No       | No       | hidden value that is part of the label for screen reads to represent the percentage of the item accepts values from 0 to 1 |
