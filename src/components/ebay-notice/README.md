# ebay-notice

## `ebay-notice` tag
The `<ebay-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

### `ebay-notice` Usage

```marko
<ebay-notice heading-tag="h3" type="priority" level="page" aria-label-text="this is a notice">
        <p>Couldn't load all the items, please try again later.</p>
</ebay-notice>
```

### `ebay-notice` Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`level` | String | No | "inline" or "page"
`type`  | String | No | "priority", "confirmation" or "information"
`aria-label-text` | String | No | adding description for the notice for a11y users
`heading-tag` | String | No| used in case of "page" level notices to specify the heading tag according to the notice's placement
