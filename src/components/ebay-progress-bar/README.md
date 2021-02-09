<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-bar
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

```marko
<ebay-progress-bar value=50 min=0 max=100 />
```

## Description
The progress bar gives an immediate, real-time visualisation of the current task completion status.
The progress bar's value does not include its min and max, so giving a value <= min will set the value to min + 1,
and a value >= max will display a value of max - 1.

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | ---- | --- | ---
`value` | Integer | No | No | HTML value of progress bar
`min` | Integer | No | No | HTML min. Defaults to 0
`max` | Integer | No | No | HTML max. Defaults to 100
