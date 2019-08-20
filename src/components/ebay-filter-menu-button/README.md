# ebay-filter-menu-button

**Note:** In previous versions of eBayUI-core this component was named `ebay-menu`. The old naming will continue to work and an automated migration will be made available in the Marko 4 version of eBayUI-core.

## ebay-filter-menu-button Tag

### ebay-filter-menu-button Usage

```marko
<ebay-filter-menu-button text="text">
    <ebay-filter-menu-button-item value="item 1">item 1</ebay-filter-menu-button-item>
    <ebay-filter-menu-button-item value="item 2">item 2</ebay-filter-menu-button-item>
    <ebay-filter-menu-button-item value="item 3">item 3</ebay-filter-menu-button-item>
</ebay-filter-menu-button>
```

### ebay-filter-menu-button Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`text` | String | Yes | button text
`footer-text` | String | Yes | footer button text
`a11y-text` | String | No | a11y text for the button
`a11y-footer-text` | String | No | a11y text for the footer button
`pressed` | Boolean | Yes | whether button is pressed (default is `false`)
`expanded` | Boolean | Yes | whether content is expanded (Note: not supported as initial attribute)
`disabled` | Boolean | Yes | Will disable the entire dropdown (disables the ebay-button label) if set to true
`variant` | String | No | "" (default) / "form"
`form-name` | String | No | form's `name` attribute (used with `variant="form"`)
`form-action` | String | No | form's `action` attribute (used with `variant="form"`)

### ebay-filter-menu-button Events

Event | Data | Description
--- | --- | ---
`filter-menu-button-expand` | | expand content
`filter-menu-button-collapse` | `{ checked, originalEvent }` | collapse content (emits current checked state)
`filter-menu-button-change` | `{ el, checked, originalEvent }` | items changed/checked
`filter-menu-button-footer-click` | `{ checked, originalEvent }` | footer button clicked
`filter-menu-button-form-submit` |  | `{ checked, originalEvent }` | when using `variant="form"`, and form is submitted (emits current checked state)

## ebay-filter-menu-button-item Tag

### ebay-filter-menu-button-item Usage

```marko
<ebay-filter-menu-button-item>item 1</ebay-filter-menu-button-item>
```

### ebay-filter-menu-button-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`checked` | Boolean | Yes | whether or not the item is checked
`value` | Boolean | Yes | the item's value (returned in emitted events when checked)
