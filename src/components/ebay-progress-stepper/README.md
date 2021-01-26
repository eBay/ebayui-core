<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-stepper
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.1.1
    </span>
</h1>

## ebay-progress-stepper Example

```marko
<ebay-progress-stepper>
    <@step>Started</@step>
    <@step>Shipped</@step>
    <@step current>Transit</@step>
    <@step>Delivered</@step>
</ebay-progress-stepper>
```

## ebay-progress-stepper Sub-tags

Tag | Required | Description
--- | --- | ---
`<@step>` | Yes | Each step to represented. The body will display as text next to the current state

## ebay-progress-stepper Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`direction` | Enum | No | No | Either 'column' or 'row'. Will display stepper as a vertical column or horizontal row. Default is 'row'
`default-state` | Enum | Yes | No | Either 'complete', 'upcoming' or 'active'. If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. Otherwise, the default (active), will change items based on the `current` item.

## ebay-progress-stepper @step Sub-tags

Tag | Required | Description
--- | --- | ---
`<@title>` | No | The bolded title for each step. Will be rendered in an `h4` by default. In order to override, pass the `as` attribute. `<@title as="h3">Title</@title>`. All other attributes will be passed through to the header tag

## ebay-progress-stepper @step Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`current` | Boolean | No | No | The current step. Only first step that has this attribute will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any item, then will render based on `default-state` attribute
`type` | Enumm | No | No | Either `attention`, `information`, or `complete`. This takes prescedence over current. Will render the current step with the given icon and color
`number` | Number | No | No | Renders the current step with the given number. Overrides the default number counting for this step
