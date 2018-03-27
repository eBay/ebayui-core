# ebay-breadcrumb

## ebay-breadcrumb Usage
### Last item as the parent
```marko
<ebay-breadcrumb aria-label='You are here'>
    <ebay-breadcrumb-item href='https://...'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```
### Last item as the current
```marko
<ebay-breadcrumb aria-label='You are here'>
    <ebay-breadcrumb-item href='https://...'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```
### Prevent-default behaviour and emit custom event (`breadcrumb-click`) onclick of items
```marko
<ebay-breadcrumb aria-label='You are here' prevent-default=true>
    <ebay-breadcrumb-item href='https://...'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```
## ebay-breadcrumb Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`aria-label` | String | No | aria-label for nav tag
`prevent-default` | Boolean | No | this will be used for single page app. Custom event `breadcrumb-click` will be emitted on click of breadcrumb items


## ebay-breadcrumb-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | anchor href
