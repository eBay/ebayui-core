# ebay-select

The `<ebay-select>` is a tag used to create a custom-designed form element which matches much of the functionality of a native `<select>` menu. It uses a markup similar to a `<select>` but hides the native select in favor for better design and UX for the end user.

## ebay-select Tag

### ebay-select Usage

When no selected option is specified:

```marko
<ebay-select name="formFieldName">
    <ebay-select-option value="1" label="Option 1"/>
    <ebay-select-option value="2" label="Option 2"/>
    <ebay-select-option value="3" label="Option 3"/>
</ebay-select>
```

When a selected option is specified:

```marko
<ebay-select name="formFieldName">
    <ebay-select-option value="1" label="Option 1"/>
    <ebay-select-option value="2" label="Option 2" selected/>
    <ebay-select-option value="3" label="Option 3"/>
</ebay-select>
```

### ebay-select Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`class` | No | String | No | custom class
`name` | Yes | String | No | used for the `name` attribute of the native `<select>`
`selected` | n/a | Number | Yes | allows you to set the selected index option to `selected`

### ebay-select Events

Event | Data |  Description
--- | --- | ---
`listbox-collapse` | | collapse content
`listbox-expand` | | expand content
`listbox-change` | `{ el, index, selected }` | option selected

---

## ebay-select-option Tag

### ebay-select-option Usage

```marko
<ebay-select-option value="1">option 1</ebay-select-option>
```

### ebay-select-option Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`class` | No | String | No | custom class
`label` | No | String | No | string label for use in the button
`selected` | No | Boolean | Yes | whether or not the option is selected (**Note:** use the root `ebay-select` element's `selected` property to set this property)
`value` | Yes | String | Yes | used for the `value` attribute of the native `<option>`

### ebay-select-option Events

Event | Description
--- | ---
`listbox-select` | select one of the options
