# ebay-wizard-stepper

## ebay-wizard-stepper Example

```marko
<ebay-wizard-stepper>
    <@step>Started</@step>
    <@step>Shipped</@step>
    <@step current>Transit</@step>
    <@step>Delivered</@step>
</ebay-wizard-stepper>
```

## ebay-wizard-stepper Sub-tags

Tag | Required | Description
--- | --- | ---
`<@step>` | Yes | Each step to represented. The body will display as text next to the current state

## ebay-wizard-stepper Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`vertical` | Boolean | No | No | If true, then renders vertical version of stepper

## ebay-wizard-stepper @step Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`current` | Boolean | No | Yes | The current step. All steps before will be rendered as complete, and all after will render as upcoming.
`type` | Enumm | No | No | Either `attention` or `i This takes prescedence overnformation`. Will render the current step (and the line leading up to it) with the given icon and color
`number` | Number | No | No | Renders the current step with the number passed in badge (as well as the line leading up to it)
