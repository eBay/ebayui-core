# ebay-breadcrumbs

## ebay-breadcrumbs Usage

### Last item as the parent

```marko
<ebay-breadcrumbs a11y-heading-text='Page navigation'>
    <@item href='https://...'>eBay</@item>
    <@item href='https://...'>Auto Parts and Vehicles</@item>
    <@item href='https://...'>Motors Parts and Accessories</@item>
</ebay-breadcrumbs>
```

## ebay-breadcrumbs Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-heading-text` | String | No | Yes | heading for breadcrumb which will be clipped
`a11y-heading-tag` | String | No | No | heading tag for breadcrumb (default: `"h2"`)

## ebay-breadcrumbs Events

Event | Description | Data
--- | --- | ---
`select` | click breadcrumb items | `{ originalEvent, el }`

## @item Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`href` | String | No | No | anchor href; omitting the href will switch to a button

**Note:** If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`. Alternatively you can manually `preventDefault` the provided `originalEvent` on the `select` event.
