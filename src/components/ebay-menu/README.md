# ebay-menu

## ebay-menu Tag

### ebay-menu Usage

```marko
<ebay-menu text="text">
    <ebay-menu-item>item 1</ebay-menu-item>
    <ebay-menu-item>item 2</ebay-menu-item>
    <ebay-menu-item>item 3</ebay-menu-item>
</ebay-menu>
```

### ebay-menu Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`type` | String | No | No | Can be "fake" / "radio" / "checkbox"
`priority` | String | No | No | button priority, "primary" / "secondary" (default) / "none"
`checked` (radio) | Number | Yes | No | will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup

### ebay-menu Events

Event | Data | Description
--- | --- | ---
`menu-keydown` | `{ el, index, checked }` |
`menu-change` (radio) | `{ el, index, checked }` | item changed/checked
`menu-change` (checkbox) | `{ el, [indexes], [checked] }` | items changed/checked
`menu-select` (not radio or checkbox) | `{ el, index, checked }` | item clicked

## ebay-menu-item Tag

### ebay-menu-item Usage

```marko
<ebay-menu-item>item 1</ebay-menu-item>
```

### ebay-menu-item Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`href` (fake menu) | String | No | No | for link that looks like a menu-item. If set to null then will disable item
`type` (fake menu) | String | No | No | Set to "button" for fake menu-item `<button>`
`value` (radio or checkbox) | String | No | No | the value to use with event responses for for the `checked` array
`checked` (radio or checkbox) | Boolean | No | No | whether or not the item is checked
`current` (fake menu) | Boolean | No | No | whether or not the href is the current href of the page
`badge-number` | Number | No | No | used as the number to be placed in the badge
`badge-aria-label` | String | No | Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge

## ebay-menu-separator

Adds a line separator between each menu item

### ebay-menu-separator Usage

```marko
<ebay-menu>
    <ebay-menu-item>Item1</ebay-menu-item>
    <ebay-menu-separator/>
    <ebay-menu-item>Item2</ebay-menu-item>
</ebay-menu>
```
