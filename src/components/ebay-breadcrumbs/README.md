# ebay-breadcrumb

## ebay-breadcrumb Usage

### Last item as the parent

```marko
<ebay-breadcrumb a11y-heading-text='Page navigation'>
    <ebay-breadcrumb-item href='https://...'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```

## ebay-breadcrumb Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-heading-text` | String | No | Yes | heading for breadcrumb which will be clipped
`a11y-heading-tag` | String | No | No | heading tag for breadcrumb (default: `"h2"`)

## ebay-breadcrumb Events

Event | Description | Data
--- | ---
`breadcrumbs-select` | click breadcrumb items | `{ originalEvent, el }`

## ebay-breadcrumb-item Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`href` | String | No | No | anchor href; omitting the href will switch to a button

**Note:** If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`. Alternatively you can manually `preventDefault` the provided `originalEvent` on the `breadcrumbs-select` event.
