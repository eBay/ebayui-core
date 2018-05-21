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
`class` | String | No | custom class
`heading-text` | String | No | heading for breadcrumb which will be clipped
`heading-level` | String | No | heading level(h1-h4) for breadcrumb and default is `h2`
`hijax` | Boolean | No | Prevent link navigation; for use with ajax

## ebay-breadcrumb Events

Event | Description | Data
--- | ---
`breadcrumb-select` | click breadcrumb items | `{ originalEvent, el }`

## ebay-breadcrumb-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | anchor href
