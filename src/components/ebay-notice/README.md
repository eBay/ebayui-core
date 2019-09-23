# ebay-notice

The `<ebay-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

For the dismissible use case, if the parent of `<ebay-notice>` wants to close it, the property `hidden` can be used to change the state of the widget (other than the dismiss button provided).

In order to provide a call to action button, the content should be wrapped in a `<ebay-notice-content>` html. Then you can provide the button by using `<ebay-button priority="secondary" transparent>`.

(Note:  To use the dismiss button in `<ebay-notice>` please include `@ebay/skin/icon`)

## ebay-notice Usage

```marko
<ebay-notice a11y-heading-text="Attention" a11y-heading-tag="h3" status="attention" type="page">
    <p>Couldn't load all the items, please try again later.</p>
</ebay-notice>
```

```marko
<ebay-notice a11y-heading-text="Attention" a11y-heading-tag="h3" status="attention" type="page">
    <ebay-notice-content>
        <p>Couldn't load all the items, please try again later.</p>
    </ebay-notice-content>
    <ebay-button priority="secondary" transparent>Try again</ebay-button>
</ebay-notice>
```

## ebay-infotip Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-notice-content>` | No | The content to be displayed in the notice (only used with `ebay-button`)

## ebay-notice Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`type` | String | No | "inline" or "page" (default)
`status`  | String | No | "attention" (default), "confirmation" or "information"
`a11y-heading-text` | String | No | adding description for the notice for a11y users
`a11y-heading-tag` | String | No| used in case of "page" level notices to specify the heading tag according to the notice's placement (default: `"h2"`)
`dismissible` | Boolean | No | used to specify the dismiss button in page notice
`hidden` | Boolean | Yes | whether the widget is hidden or not.
`a11y-close-text` | String | No | adding description for the button for a11y users

### ebay-notice Events

Event | Description
--- | ---
`notice-close` | the page notice was closed
