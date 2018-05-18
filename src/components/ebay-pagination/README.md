# ebay-pagination

The `<ebay-pagination>` is a tag used to create a pagination navigation.

## ebay-pagination Tag

### ebay-pagination Usage

```marko
<ebay-pagination aria-label-prev="Previous page" aria-label-next="Next page" curr-text="Results Pagination - Page 2">
    <ebay-pagination-item href="#" type="previous" disabled/>
    <ebay-pagination-item href="#">item 1</ebay-pagination-item>
    <ebay-pagination-item href="#" current>item 2</ebay-pagination-item>
    <ebay-pagination-item href="#">item 3</ebay-pagination-item>
    <ebay-pagination-item href="#" type="next"/>
</ebay-pagination>
```

### ebay-pagination Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`accessibility-prev` | String | No | aria-label for previous arrow button
`accessibility-next` | String | No | aria-label for next arrow button
`accessibility-current` | String | No | Description for the current page (e.g. Results of Page 1)
`hijax` | Boolean | No | Prevent link navigation; for use with ajax

### ebay-pagination Events

Event | Data | Description
--- | --- | ---
`pagination-previous` | `{ originalEvent, el }`| clicked previous arrow button
`pagination-next` | `{ originalEvent, el }` | clicked next arrow button
`pagination-select` | `{ originalEvent, el, value }` | page selected clicked

## ebay-pagination-item Tag

### ebay-pagination-item Usage

```marko
<ebay-pagination-item>1</ebay-pagination-item>
```

### ebay-pagination-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`disabled` | Boolean | No | Previous/next button is disabled or not
`class` | String | No | custom class
`href` | String | No | for link that looks like a menu-item
`current` | Boolean | No | the current page
`type` | String | No | "previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the `type='previous|next'` isn't provided the previous/next arrow buttons will be taken as `disabled`
