# ebay-breadcrumb

## ebay-breadcrumb Usage
### Last item as the parent
```marko
<ebay-breadcrumb heading='Page navigation'>
    <ebay-breadcrumb-item href='https://...'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```
## ebay-breadcrumb Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`heading` | String | No | heading for breadcrumb which will be clipped
`prevent-default` | Boolean | No | this will be used for single page app. when item is clicked, `breadcrumb-click` will be emitted.

## ebay-breadcrumb Events

Event | Description
--- | ---
`breadcrumb-click` | click breadcrumb items

## ebay-breadcrumb-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | anchor href

### Examples
More examples can be found `ebay-breadcrumb/examples`