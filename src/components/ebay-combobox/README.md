# ebay-combobox

The `<ebay-combobox>` is a combination of a text `<input>`, and a listbox (`aria-role="listbox"`). It supports both written text by the user, as well as text selected from the listbox options.

## ebay-combobox Tag

### ebay-combobox Usage

When no selected option is specified:

```marko
<ebay-combobox name="formFieldName" autocomplete="list">
    <ebay-combobox-option text="Option 1"/>
    <ebay-combobox-option text="Option 2"/>
    <ebay-combobox-option text="Option 3"/>
</ebay-combobox>
```

When a selected option is specified:

```marko
<ebay-combobox name="formFieldName" autocomplete="list" value="Option 2">
    <ebay-combobox-option text="Option 1"/>
    <ebay-combobox-option text="Option 2"/>
    <ebay-combobox-option text="Option 3"/>
</ebay-combobox>
```

When the combobox should not filter the listbox options list:

```marko
<ebay-combobox name="formFieldName">
    <ebay-combobox-option text="Option 1"/>
    <ebay-combobox-option text="Option 2"/>
    <ebay-combobox-option text="Option 3"/>
</ebay-combobox>
```

### ebay-combobox Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`name` | String | No | Yes | used for the `name` attribute of the `<input>` element
`borderless` | Boolean | No | No | whether the input has borders
`disabled` | Boolean | Yes | No | sets the disabled attribute of the input
`expanded` | Boolean | Yes | No | sets whether the listbox is expanded
`autocomplete` | String | Yes | No | default is `none`; available values are `none` and `list`

Note: For this component, `class` is applied to the root tag, while all other HTML attributes are applied to the `input` tag.

### ebay-combobox Events

Event | Data |  Description
--- | --- | ---
`combobox-collapse` | | collapsed content
`combobox-expand` | | expanded content
`combobox-change` | `{ el, index, selected }` | same as the `onChange` event, which fires on blur
`combobox-input` | `{ el, index, selected }` | same as the `onInput` event, which fires with every keypress
`combobox-select` | `{ el, index, selected }` | similar to a `<select>`, which fires when an option is clicked or selected

## ebay-combobox-option Tag

### ebay-combobox-option Usage

```marko
<ebay-combobox-option text="Option 1"/>
```

### ebay-combobox-option Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`text` | String | No | No | string to use in the option
