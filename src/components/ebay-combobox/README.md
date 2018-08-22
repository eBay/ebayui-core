# ebay-combobox

The `<ebay-combobox>` is a tag used to create a custom-designed form element which matches much of the functionality of a native `<select>` menu. It uses a markup similar to a `<select>` but hides the native select in favor for better design and UX for the end user.

## ebay-combobox Tag

### ebay-combobox Usage

When no selected option is specified:

```marko
<ebay-combobox name="formFieldName">
    <ebay-combobox-option value="1" text="Option 1"/>
    <ebay-combobox-option value="2" text="Option 2"/>
    <ebay-combobox-option value="3" text="Option 3"/>
</ebay-combobox>
```

When a selected option is specified:

```marko
<ebay-combobox name="formFieldName">
    <ebay-combobox-option value="1" text="Option 1"/>
    <ebay-combobox-option value="2" text="Option 2" selected/>
    <ebay-combobox-option value="3" text="Option 3"/>
</ebay-combobox>
```

### ebay-combobox Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`name` | Yes | String | No | used for the `name` attribute of the native `<select>`
`selected` | n/a | Number | Yes | allows you to set the selected index option to `selected`
`borderless` | No | Boolean | No | whether button has borders

Note: For this component, `class` is applied to the root tag, while all other HTML attributes are applied to the `input` tag.

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
`text` | No | String | No | string to use in the option
`selected` | No | Boolean | Yes | whether or not the option is selected (**Note:** use the root `ebay-combobox` element's `selected` property to set this property)
`value` | Yes | String | Yes | used for the `value` attribute of the native `<option>`

### ebay-combobox-option Events

Event | Description
--- | ---
`combobox-option` | select one of the options
