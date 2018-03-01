# `ebay-listbox`

The `<ebay-listbox>` is a tag used to create a custom-designed form element which matches much of the functionality of a native `<select>` menu. It uses a markup similar to a `<select>` but hides the native select in favor for better design and UX for the end user.

## `ebay-listbox` Example

When no selected option is specified:

```marko
<ebay-listbox name="name">
    <ebay-listbox-option value="1">option 1</ebay-listbox-option>
    <ebay-listbox-option value="2">option 2</ebay-listbox-option>
    <ebay-listbox-option value="3">option 3</ebay-listbox-option>
</ebay-listbox>
```

When a selected option is specified:

```marko
<ebay-listbox name="name">
    <ebay-listbox-option value="1">option 1</ebay-listbox-option>
    <ebay-listbox-option value="2" selected>option 2</ebay-listbox-option>
    <ebay-listbox-option value="3">option 3</ebay-listbox-option>
</ebay-listbox>
```

### `ebay-listbox` Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`class` | No | String | No | custom class
`name` | Yes | String | No | used for the `name` attribute of the native `<select>`
`selected` | n/a | Number | Yes | allows you to set the selected index option to `selected`

### `ebay-listbox` Events

Event | Data |  Description
--- | --- | ---
`listbox-collapse` | | collapse content
`listbox-expand` | | expand content
`listbox-change` | `{ el, index, selected }` | option selected

---

## `ebay-listbox-option` Example

```marko
<ebay-listbox-option value="1">option 1</ebay-listbox-option>
```

### `ebay-listbox-option` Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`class` | No | String | No | custom class
`label` | No | String | No | string label for use in the listbox dropdown button
`selected` | No | Boolean | Yes | whether or not the option is selected (**Note:** use the root `ebay-listbox` element's `selected` property to set this property)
`value` | Yes | String | Yes | used for the `value` attribute of the native `<option>`

### `ebay-listbox-option` Events

Event | Description
--- | ---
`listbox-select` | select one of the options
