# ebay-breadcrumb

## ebay-breadcrumb Usage
### Last item as the parent
```marko
<ebay-breadcrumb aria-label='You are here'>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```
### Last item as the current
```marko
<ebay-breadcrumb aria-label='You are here'>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...' _sp='' navsrc='{}' navsrc='{}' current='true'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
```
## ebay-breadcrumb Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`aria-label` | String | No | aria-label for nav tag

## ebay-breadcrumb-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | anchor href
`_sp` | String | No | sid tracking
`navsrc` | String | No | this is for all the click tracking with SEO friendly approach. this is mainly used for answers platform's powered pages
`current` | Boolean | No | this mark the item as current or parent
