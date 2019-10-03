# ebay-listbox-button

**Note:** In previous versions of eBayUI-core this component was named `ebay-listbox`. The old naming will continue to work and an automated migration will be made available in the Marko 4 version of eBayUI-core.

## ebay-listbox-button Tag

### ebay-listbox-button Usage

When no selected option is specified:

```marko
<ebay-listbox-button name="formFieldName">
    <ebay-listbox-button-option value="1" text="Option 1"/>
    <ebay-listbox-button-option value="2" text="Option 2"/>
    <ebay-listbox-button-option value="3" text="Option 3"/>
</ebay-listbox-button>
```

When a selected option is specified:

```marko
<ebay-listbox-button name="formFieldName">
    <ebay-listbox-button-option value="1" text="Option 1"/>
    <ebay-listbox-button-option value="2" text="Option 2" selected/>
    <ebay-listbox-button-option value="3" text="Option 3"/>
</ebay-listbox-button>
```

### ebay-listbox-button Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`name` | String | No | Yes | used for the `name` attribute of the native `<select>`
`selected` | Number | Yes | n/a | allows you to set the selected index option to `selected`
`borderless` | Boolean | No | No | whether button has borders

**Note:** For this component, `class` is applied to the root tag, while all other HTML attributes are applied to the `input` tag.

### ebay-listbox-button Events

Event | Data |  Description
--- | --- | ---
`listbox-collapse` | | collapse content
`listbox-expand` | | expand content
`listbox-change` | `{ el, index, selected }` | option selected
---

## ebay-listbox-button-option Tag

### ebay-listbox-button-option Usage

```marko
<ebay-listbox-button-option value="1" text="Option 1"/>
```

### ebay-listbox-button-option Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`text` | String | No | No | string to use in the option
`selected` | Boolean | Yes | No | whether or not the option is selected (**Note:** use the root `ebay-listbox-button` element's `selected` property to set this property)
`value` | String | Yes | Yes | used for the `value` attribute of the native `<option>`
