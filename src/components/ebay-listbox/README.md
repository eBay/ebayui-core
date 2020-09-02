# ebay-listbox

## ebay-listbox Tag

Used to generate a menu portion of listbox. For use with a button which hides and shows the menu use `ebay-listbox-button` instead.

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

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`name` | String | No | Yes | used for the `name` attribute of the native `<select>`
`selected` | Number | Yes | n/a | allows you to set the selected index option to `selected`

### ebay-listbox Events

Event | Data |  Description
--- | --- | ---
`listbox-change` | `{ el, index, selected, wasClicked }` | option selected
---

## ebay-listbox-option Tag

### ebay-listbox-option Usage

```marko
<ebay-listbox-option value="1" text="Option 1"/>
```

### ebay-listbox-option Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`text` | String | No | No | string to use in the option
`selected` | Boolean | Yes | No | whether or not the option is selected (**Note:** use the root `ebay-listbox` element's `selected` property to set this property)
`value` | String | Yes | Yes | used for the `value` attribute of the native `<option>`
