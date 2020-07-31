# ebay-section-notice

The `<ebay-section-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

This notice should be used at the top of various sections to display information needed.

## ebay-section-notice Usage

```marko
<ebay-section-notice a11y-text="Attention" status="attention">
    <p>Couldn't load all the items, please try again later.</p>
</ebay-section-notice>
```

```marko
<ebay-section-notice a11y-text="Attention" status="attention">
    <p>Couldn't load all the items, please try again later.</p>
    <@footer><ebay-button priority="secondary" transparent>Try again</ebay-button></@footer>
</ebay-section-notice>
```

## ebay-section-notice Sub-tags

Tag | Required | Description
--- | --- | ---
`<@footer>` | No | The footer content (for cta button)

## ebay-section-notice Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`status`  | String | No | No | "attention"  "confirmation" "information".  The default will render with grey background and no icon
`a11y-text` | String | No | Yes | adding description for the notice for a11y users
`icon` | String | Yes | No | "default" (matches whatever is specified by the "status") or "none"
