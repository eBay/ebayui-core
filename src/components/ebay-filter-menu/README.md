# ebay-filter-menu

The `ebay-filter-menu` component is used as a checkbox menu specificially styled for filtering actions. Generally it is coupled with the `ebay-filter-menu-button` to create a selectable set of items by which to filter.

## ebay-filter-menu Tag

### ebay-filter-menu Usage

```marko
<ebay-filter-menu text="text">
    <ebay-filter-menu-item value="item 1">item 1</ebay-filter-menu-item>
    <ebay-filter-menu-item value="item 2">item 2</ebay-filter-menu-item>
    <ebay-filter-menu-item value="item 3">item 3</ebay-filter-menu-item>
</ebay-filter-menu>
```

### ebay-filter-menu Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`footer-text` | String | Yes | footer button text
`a11y-footer-text` | String | No | a11y text for the footer button
`variant` | String | No | "" (default) / "form"
`form-name` | String | No | form's `name` attribute (used with `variant="form"`)
`form-action` | String | No | form's `action` attribute (used with `variant="form"`)
`form-method` | String | No | form's `method` attribute (used with `variant="form"`)

### ebay-filter-menu Events

Event | Data | Description
--- | --- | ---
`filter-menu-button-change` | `{ el, checked, originalEvent }` | items changed/checked
`filter-menu-button-footer-click` | `{ checked, originalEvent }` | footer button clicked
`filter-menu-button-form-submit` |  | `{ checked, originalEvent }` | when using `variant="form"`, and form is submitted (emits current checked state)

## ebay-filter-menu-item Tag

### ebay-filter-menu-item Usage

```marko
<ebay-filter-menu-item>item 1</ebay-filter-menu-item>
```

### ebay-filter-menu-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`checked` | Boolean | Yes | whether or not the item is checked
`value` | Boolean | Yes | the item's value (returned in emitted events when checked)
