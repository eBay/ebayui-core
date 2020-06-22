# ebay-stepper

## ebay-stepper Example

```marko
<ebay-stepper>
    <@step>Started</@step>
    <@step>Shipped</@step>
    <@step current>Transit</@step>
    <@step>Delivered</@step>
</ebay-stepper>
```

## ebay-stepper Sub-tags

Tag | Required | Description
--- | --- | ---
`<@step>` | Yes | Each step to represented. The body will display as text next to the current state

## ebay-stepper Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`direction` | Enum | No | No | Either 'column' or 'row'. Will display stepper as a vertical column or horizontal row. Default is 'row'

## ebay-stepper @step Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`current` | Boolean | No | Yes | The current step. All steps before will be rendered as complete, and all after will render as upcoming.
`type` | Enumm | No | No | Either `attention` or `information`. This takes prescedence over current. Will render the current step (and the line leading up to it) with the given icon and color
`number` | Number | No | No | Renders the current step with the number passed in badge (as well as the line leading up to it)
