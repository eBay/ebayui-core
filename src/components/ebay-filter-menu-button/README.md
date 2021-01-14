<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

**Note:** In previous versions of eBayUI-core this component was named `ebay-menu`. The old naming will continue to work and an automated migration will be made available in the Marko 4 version of eBayUI-core.

## ebay-filter-menu-button Tag

### ebay-filter-menu-button Usage

```marko
<ebay-filter-menu-button text="text">
    <@item value="item 1">item 1</@item>
    <@item value="item 2">item 2</@item>
    <@item value="item 3">item 3</@item>
</ebay-filter-menu-button>
```

### ebay-filter-menu-button Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`text` | String | Yes | Yes | button text
`a11y-text` | String | No | No | a11y text for the button
`footer-text` | String | Yes | No | footer button text
`pressed` | Boolean | Yes | No | whether button is pressed (default is `false`)
`expanded` | Boolean | Yes | No | whether content is expanded (Note: not supported as initial attribute)
`disabled` | Boolean | Yes | No | Will disable the entire dropdown (disables the ebay-button label) if set to true
`variant` | String | No | No | "" (default) / "form"

#### Additional attributes when footer-text is set

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-footer-text` | String | No | No | a11y text for the footer button

#### Additional attributes when variant="form"

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`form-name` | String | No | Yes | form's `name` attribute
`form-action` | String | No | No | form's `action` attribute

### ebay-filter-menu-button Events

Event | Data | Description
--- | --- | ---
`expand` | | expand content
`collapse` | `{ checked, originalEvent }` | collapse content (emits current checked state)
`change` | `{ el, checked, originalEvent }` | items changed/checked
`footer-click` | `{ checked, originalEvent }` | footer button clicked
`form-submit` |  | `{ checked, originalEvent }` | when using `variant="form"`, and form is submitted (emits current checked state)

## @item Tag

### @item Usage

```marko
<@item>item 1</@item>
```

### @item Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`checked` | Boolean | Yes | No | whether or not the item is checked
`value` | Boolean | Yes | No | the item's value (returned in emitted events when checked)
