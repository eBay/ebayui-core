<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-details
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

```marko
<ebay-details open text="Show me the details">
    The details
</ebay-details>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`text` | String | No | No | The text to display in the details toggle
`type` | String | No | No | Can be "regular" / "center". Default "regular"
`size` | String | No | No | Can be "regular" / "small". Default "regular"
`open` | Boolean | No | No | Whether details is open.

## Events

Event | Data | Description
--- | --- | ---
`details-toggle` | `{ originalEvent, open }` | details toggled. Open is boolean if true then details was opened, otherwise false means details closed
`details-click` | `{ originalEvent }` | details clicked
