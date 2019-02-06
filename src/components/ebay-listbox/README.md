# ebay-listbox

## ebay-listbox Tag

### ebay-listbox Usage

When no selected option is specified:

```marko
<ebay-listbox name="formFieldName">
    <ebay-listbox-option value="1" text="Option 1"/>
    <ebay-listbox-option value="2" text="Option 2"/>
    <ebay-listbox-option value="3" text="Option 3"/>
</ebay-listbox>
```

When a selected option is specified:

```marko
<ebay-listbox name="formFieldName">
    <ebay-listbox-option value="1" text="Option 1"/>
    <ebay-listbox-option value="2" text="Option 2" selected/>
    <ebay-listbox-option value="3" text="Option 3"/>
</ebay-listbox>
```

### ebay-listbox Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`name` | Yes | String | No | used for the `name` attribute of the native `<select>`
`selected` | n/a | Number | Yes | allows you to set the selected index option to `selected`
`borderless` | No | Boolean | No | whether button has borders

Note: For this component, `class` is applied to the root tag, while all other HTML attributes are applied to the `input` tag.

### ebay-listbox Events

Event | Data |  Description
--- | --- | ---
`listbox-collapse` | | collapse content
`listbox-expand` | | expand content
`listbox-change` | `{ el, index, selected }` | option selected
---

## ebay-listbox-option Tag

### ebay-listbox-option Usage

```marko
<ebay-listbox-option value="1" text="Option 1"/>
```

### ebay-listbox-option Attributes

Name | Required | Type | Stateful | Description
--- | --- | --- | --- | ---
`text` | No | String | No | string to use in the option
`selected` | No | Boolean | Yes | whether or not the option is selected (**Note:** use the root `ebay-listbox` element's `selected` property to set this property)
`value` | Yes | String | Yes | used for the `value` attribute of the native `<option>`
