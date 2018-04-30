# ebay-pagination

The `<ebay-pagination>` is a tag used to create a pagination navigation.

## ebay-pagination Tag

### ebay-pagination Usage

```marko
<ebay-pagination aria-label-prev="Previous page" aria-label-next="Next page" curr-text="Results Pagination - Page 2">
    <ebay-pagination-item href="#" previous disabled/>
    <ebay-pagination-item href="#">item 1</ebay-pagination-item>
    <ebay-pagination-item href="#" current>item 2</ebay-pagination-item>
    <ebay-pagination-item href="#">item 3</ebay-pagination-item>
    <ebay-pagination-item href="#" next/>
</ebay-pagination>
```

### ebay-pagination Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`accessibility-prev` | String | No | aria-label for previous arrow button
`accessibility-next` | String | No | aria-label for next arrow button
`accessibility-current` | String | No | Description for the current page (e.g. Results of Page 1)
`hijax` | Boolean | No | Use pagination links for an ajax reload

### ebay-pagination Events

Event | Data | Description
--- | --- | ---
`pagination-previous` |  `{ event, el: event.target }`| clicked previous arrow button
`pagination-next` | `{ event, el: event.target }` | clicked next arrow button
`pagination-select` | `{ event, el: event.target , value: "Selected page" }` | page selected clicked

## ebay-pagination-item Tag

### ebay-pagination-item Usage

```marko
<ebay-pagination-item>1</ebay-pagination-item>
```

### ebay-pagination-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`disabled` | Boolean | No | Item is disabled or not (Note: should only be used in case of navigation)
`href` | String | No | for link that looks like a menu-item
`current` | Boolean | No | the current page
`next` | Boolean | No | whether or not the input is the next page (when not provided taken as `disabled`)
`previous` | Boolean | No | whether or not the input is the next page (when not provided taken as `disabled`)
