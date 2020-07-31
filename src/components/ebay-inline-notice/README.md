# ebay-inline-notice

The `<ebay-inline-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

This notice should be rendered inline in the page and should not be used at the top of the page.

## ebay-inline-notice Usage

```marko
<ebay-inline-notice a11y-text="Attention" status="attention">
    <p>Couldn't load all the items, please try again later.</p>
</ebay-inline-notice>
```

## ebay-inline-notice Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`status`  | String | No | No | "attention" (default), "confirmation", or "information"
`a11y-text` | String | No | Yes | adding description for the notice for a11y users
`icon` | String | Yes | No | "default" (matches whatever is specified by the "status") or "none"
