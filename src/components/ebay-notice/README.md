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

## ebay-notice Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-notice-content>` | No | The content to be displayed in the notice (only used with `ebay-button`)

## ebay-notice Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`type` | String | No | No | "inline", "section", "window", or "page" (default)
`status`  | String | No | No | "attention" (default for "page" and "inline"), "confirmation" "information", or "celebration" (page notice only).  The default for "section" type will render with grey background and no icon
`a11y-heading-text` | String | No | Yes | adding description for the notice for a11y users
`dismissible` | Boolean | No | No | used to specify the dismiss button in page notice
`hidden` | Boolean | Yes | No | whether the widget is hidden or not.
`a11y-close-text` | String | No | Yes | adding description for the button for a11y users

### Additional attributes when type="page"

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-heading-tag` | String | No | Yes | used to specify the heading tag according to the notice's placement (default: `"h2"`)

### Additional attributes when type="window"

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`fill-window` | Boolean | No | No | used to specify whether the notice should fill the full height of it's window/container (default: `false`)

### ebay-notice Events

Event | Description
--- | ---
`notice-close` | the page notice was closed
