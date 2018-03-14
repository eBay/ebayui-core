# ebay-notice

The `<ebay-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

## ebay-notice Usage

```marko
<ebay-notice heading-level="3" status="priority" type="page" aria-text="Priority">
        <p>Couldn't load all the items, please try again later.</p>
</ebay-notice>
```

## ebay-notice Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`type` | String | No | "inline" or "page" (default)
`status`  | String | No | "priority" (default), "confirmation" or "information"
`aria-text` | String | No | adding description for the notice for a11y users
`heading-level` | String | No| used in case of "page" level notices to specify the heading tag according to the notice's placement
