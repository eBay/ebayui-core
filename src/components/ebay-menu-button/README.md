# ebay-menu-button

**Note:** In previous versions of eBayUI-core this component was named `ebay-menu`. The old naming will continue to work and an automated migration will be made available in the Marko 4 version of eBayUI-core.

## ebay-menu-button Tag

### ebay-menu-button Usage

```marko
<ebay-menu-button text="text">
    <ebay-menu-button-item>item 1</ebay-menu-button-item>
    <ebay-menu-button-item>item 2</ebay-menu-button-item>
    <ebay-menu-button-item>item 3</ebay-menu-button-item>
</ebay-menu-button>
```

### ebay-menu-button Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`text` | String | Yes | button text
`icon` | String | No | name of an `<ebay-icon>` to show to the left of the text
`a11y-text` | String | No | a11y text for the button, especially for cases without text
`no-toggle-icon` | Boolean | No | whether to hide the chevron toggle icon
`expanded` | Boolean | Yes | whether content is expanded (Note: not supported as initial attribute)
`type` | String | No | Can be "fake" / "radio" / "checkbox"
`reverse` | Boolean | No | expand menu flyout to the left
`fix-width` | Boolean | No | constrain items container width to button width
`borderless` | Boolean | No | whether button has borders
`size` | String | No | button size, "small" or "large" (default: medium)
`priority` | String | No | button priority, "primary" / "secondary" (default) / "none"
`checked` (radio) | Number | Yes | will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup
`disabled` | Boolean | Yes | Will disable the entire dropdown (disables the ebay-button label) if set to true
`scroll-management` | String | Yes | "checked" (default) / "none"

### ebay-menu-button Events

Event | Data | Description
--- | --- | ---
`menu-expand` |  | expand content
`menu-collapse` |  | collapse content
`menu-change` (radio) | `{ el, index, checked }` | item changed/checked
`menu-change` (checkbox) | `{ el, [indexes], [checked] }` | items changed/checked
`menu-select` (not radio or checkbox) | `{ el, index, checked }` | item clicked

### ebay-menu-button Methods

Method | Parameters | Description
--- | --- | ---
`setCheckedList()` | (Array) | Accepts an array of indexes for items, to set items' checked property. In the case of checkboxes, supplying an empty array will uncheck all checkboxes. In the case of radio, use the root level `checked` property.
`getCheckedList()` |  | Returns an array of indexes for items with the checked property set to `true`.

## ebay-menu-button-label Tag

### ebay-menu-button-label Usage
```marko
<ebay-menu-button-label><div>Custom Label</div></ebay-menu-button-label>
```

## ebay-menu-button-item Tag

### ebay-menu-button-item Usage

```marko
<ebay-menu-button-item>item 1</ebay-menu-button-item>
```

### ebay-menu-button-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` (fake menu) | String | No | for link that looks like a menu-item
`type` (fake menu) | String | No | Set to "button" for fake menu-item `<button>`
`checked` (radio or checkbox) | Boolean | Yes | whether or not the item is checked (**Note:** use the root `ebay-menu-button` element's `checked` property for radio type menus, or `setCheckedList()` method for checkbox type menus, to set this property.)
`current` (fake menu) | Boolean | No | whether or not the href is the current href of the page
`badge-number` | Number | No | used as the number to be placed in the badge
`badge-aria-label` | String | No | passed as the `aria-label` directly to the badge
