# ebay-details

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
`open` | Boolean | Yes | No | Whether details is open.
`rtl` | Boolean | Yes | No | Display details on the right side for right to left languages.

## Events

Event | Data | Description
--- | --- | ---
`details-open` |  | details opened
`details-close` |  | details closed
