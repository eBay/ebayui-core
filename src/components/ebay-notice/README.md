# ebay-notice

The `<ebay-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

For the dismissible use case, if the parent of `<ebay-notice>` wants to close it, the property `hidden` can be used to change the state of the widget (other than the dismiss button provided).

(Note:  To use the dismiss button in `<ebay-notice>` please include `@ebay/skin/icon`)

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
`dismissible` | Boolean | No | used to specify the dismiss button in page notice
`hidden` | Boolean | Yes | whether the widget is hidden or not (Note: not supported as initial attribute)
`aria-label-close` | String | No | adding description for the button for a11y users

### ebay-notice Events

Event | Description
--- | ---
`notice-show` | the page notice was shown
`notice-hide` | the page notice was hidden
