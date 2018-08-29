# ebay-select

_**For Mobile only**_

The `<ebay-select>` is used to create a native `<select>` form element with default browser styling.

## ebay-select Tag

### ebay-select Usage

When no selected option is specified:

```marko
<ebay-select name="formFieldName">
    <ebay-select-option value="1" text="Option 1"/>
    <ebay-select-option value="2" text="Option 2"/>
    <ebay-select-option value="3" text="Option 3"/>
</ebay-select>
```

When a selected option is specified:

```marko
<ebay-select name="formFieldName">
    <ebay-select-option value="1" text="Option 1"/>
    <ebay-select-option value="2" text="Option 2" selected/>
    <ebay-select-option value="3" text="Option 3"/>
</ebay-select>
```

### ebay-select Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`selected` | n/a | Number | Yes | allows you to set the selected index option to `selected`
`borderless` | No | Boolean | No | whether button has borders

Note: For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `select` tag. Be sure to include typical HTML attributes for the `select` tag, like `name`.

### ebay-select Events

Event | Data |  Description
--- | --- | ---
`select-collapse` | | collapse content
`select-expand` | | expand content
`select-change` | `{ el, index, selected }` | option selected
---

## ebay-select-option Tag

### ebay-select-option Usage

```marko
<ebay-select-option value="1" text="Option 1"/>
```

### ebay-select-option Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`text` | No | String | No | text to use in the option
`selected` | No | Boolean | Yes | whether or not the option is selected (**Note:** use the root `ebay-select` element's `selected` property to set this property)
`value` | Yes | String | Yes | used for the `value` attribute of the native `<option>`
