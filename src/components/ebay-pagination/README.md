# ebay-pagination v1.1.0

The `<ebay-pagination>` is a tag used to create a pagination navigation. It will display up to 9 page links.

## ebay-pagination Tag

### ebay-pagination Usage

```marko
<ebay-pagination aria-label-prev="Previous page" aria-label-next="Next page" curr-text="Results Pagination - Page 2">
    <@item href="#" type="previous" disabled/>
    <@item href="#">item 1</@item>
    <@item href="#" current>item 2</@item>
    <@item href="#">item 3</@item>
    <@item href="#" type="next"/>
</ebay-pagination>
```

### ebay-pagination Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-previous-text` | String | No | Yes | a11y text for previous arrow button
`a11y-next-text` | String | No | Yes | a11y text for next arrow button
`a11y-current-text` | String | No | Yes | Description for the current page (e.g. Results of Page 1)

### ebay-pagination Events

Event | Data | Description
--- | --- | ---
`previous` | `{ originalEvent, el }`| clicked previous arrow button
`next` | `{ originalEvent, el }` | clicked next arrow button
`select` | `{ originalEvent, el, value }` | page selected clicked

## @item Tag

### @item Usage

```marko
<@item>1</@item>
```

### @item Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`disabled` | Boolean | No | No | Previous/next button is disabled or not
`href` | String | No | No | for link that looks like a menu-item; omitting the href will switch to a button
`href` | String | No | No | for link that looks like a menu-item; omitting the href will switch to a button
`variant` | String | No | No | "button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`
`current` | Boolean | No | No | the current page
`type` | String | No | No | "previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the `type='previous|next'` isn't provided the previous/next arrow buttons will be taken as `disabled`

**Note:** If you want to have client side or ajax based navigation then you should omit the `href` attribute on each item. This will cause each item to be `<button>` instead of an `<a>`.
