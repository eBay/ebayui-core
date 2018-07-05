# ebay-combobox

The `<ebay-combobox>` is a tag used to create a custom-designed form element which matches much of the functionality of a native `<select>` menu. It uses a markup similar to a `<select>` but hides the native select in favor for better design and UX for the end user.

## ebay-combobox Tag

### ebay-combobox Usage

When no selected option is specified:

```marko
<ebay-combobox name="formFieldName">
    <ebay-combobox-option value="1" label="Option 1"/>
    <ebay-combobox-option value="2" label="Option 2"/>
    <ebay-combobox-option value="3" label="Option 3"/>
</ebay-combobox>
```

When a selected option is specified:

```marko
<ebay-combobox name="formFieldName">
    <ebay-combobox-option value="1" label="Option 1"/>
    <ebay-combobox-option value="2" label="Option 2" selected/>
    <ebay-combobox-option value="3" label="Option 3"/>
</ebay-combobox>
```

### ebay-combobox Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`class` | No | String | No | custom class
`name` | Yes | String | No | used for the `name` attribute of the native `<select>`
`selected` | n/a | Number | Yes | allows you to set the selected index option to `selected`
`borderless` | No | Boolean | No | whether button has borders

### ebay-combobox Events

Event | Data |  Description
--- | --- | ---
`combobox-collapse` | | collapse content
`combobox-expand` | | expand content
`combobox-change` | `{ el, index, selected }` | option selected

---

## ebay-combobox-option Tag

### ebay-combobox-option Usage

```marko
<ebay-combobox-option value="1">option 1</ebay-combobox-option>
```

### ebay-combobox-option Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`class` | No | String | No | custom class
`label` | No | String | No | string label for use in the button
`selected` | No | Boolean | Yes | whether or not the option is selected (**Note:** use the root `ebay-combobox` element's `selected` property to set this property)
`value` | Yes | String | Yes | used for the `value` attribute of the native `<option>`

### ebay-combobox-option Events

Event | Description
--- | ---
`combobox-option` | select one of the options
