# ebay-menu

## ebay-menu Tag

### ebay-menu Usage

```marko
<ebay-menu label="label">
    <ebay-menu-item>item 1</ebay-menu-item>
    <ebay-menu-item>item 2</ebay-menu-item>
    <ebay-menu-item>item 3</ebay-menu-item>
</ebay-menu>
```

### ebay-menu Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`label` | String | Yes | button label
`expanded` | Boolean | Yes | whether content is expanded (Note: not supported as initial attribute)
`type` | String | No | Can be "fake" / "radio" / "checkbox"
`grow` | Boolean | No | grow items container beyond menu size to the right
`grow-reverse` | Boolean | No | grow items container beyond menu size to the left
`auto-collapse` | Boolean | No | collapse automatically when focus lost
`checked` (radio) | Number | Yes | will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup

### ebay-menu Events

Event | Data | Description
--- | --- | ---
`menu-expand` |  | expand content
`menu-collapse` |  | collapse content
`menu-change` (radio) | `{ el, index, checked }` | item changed/checked
`menu-change` (checkbox) | `{ el, [indexes], [checked] }` | items changed/checked
`menu-select` (not radio or checkbox) | `{ el, index, checked }` | item clicked

### ebay-menu Methods

Method | Parameters | Description
--- | --- | ---
`setCheckedList()` | (Array) | Accepts an array of indexes for items, to set items' checked property. In the case of checkboxes, supplying an empty array will uncheck all checkboxes. In the case of radio, use the root level `checked` property.
`getCheckedList()` |  | Returns an array of indexes for items with the checked property set to `true`.

## ebay-menu-item Tag

### ebay-menu-item Usage

```marko
<ebay-menu-item>item 1</ebay-menu-item>
```

### ebay-menu-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`href` (fake menu) | String | No | for link that looks like a menu-item
`type` (fake menu) | String | No | Set to "button" for fake menu-item `<button>`
`checked` (radio or checkbox) | Boolean | Yes | whether or not the item is checked (**Note:** use the root `ebay-menu` element's `checked` property for radio type menus, or `setCheckedList()` method for checkbox type menus, to set this property.)
`current` (fake menu) | Boolean | No | whether or not the href is the current href of the page
