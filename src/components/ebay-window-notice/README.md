# ebay-window-notice

The `<ebay-window-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

Window notices always show confirmation icons

## ebay-window-notice Usage

```marko
<ebay-window-notice a11y-text="Attention" status="attention">
    <@title>Window notice</@title>
    <p>Couldn't load all the items, please try again later.</p>
    <@footer><ebay-button>Click here</ebay-button></@footer>
</ebay-window-notice>
```

## ebay-window-notice Sub-tags

Tag | Required | Description
--- | --- | ---
`<@title>` | No | The title content to be displayed.
`<@footer>` | No | The footer content to be displayed. Used for buttons or actions

## ebay-window-notice Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-text` | String | No | Yes | adding description for the notice for a11y users
`icon` | String | Yes | No | "default" (matches whatever is specified by the "status") or "none"
`fill-window` | Boolean | No | No | used to specify whether the notice should fill the full height of it's window/container (default: `false`)
