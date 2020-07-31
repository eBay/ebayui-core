# ebay-page-notice

The `<ebay-page-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

## ebay-page-notice Usage

```marko
<ebay-page-notice a11y-text="Attention" status="attention">
    <p>Couldn't load all the items, please try again later.</p>
</ebay-page-notice>
```

```marko
<ebay-page-notice a11y-text="Attention" status="attention" type="page">
    <@title>An Error</@title>
    <p>Couldn't load all the items, please try again later.</p>
    <@footer>
        <ebay-button priority="secondary" transparent>Try again</ebay-button>
    </@footer>
</ebay-page-notice>
```

## ebay-page-notice Sub-tags

Tag | Required | Description
--- | --- | ---
`<@title>` | No | The title content to be displayed. Used mostly for celebration notice
`<@footer>` | No | The footer content to be displayed. Used to show a CTA button generally

## ebay-page-notice Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`status`  | String | No | No | "attention" (default for "page" and "inline"), "confirmation" "information", or "celebration".
`a11y-text` | String | No | Yes | adding description for the notice for a11y users
`icon` | String | Yes | No | "default" (matches whatever is specified by the "status") or "none"
