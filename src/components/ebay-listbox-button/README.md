<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-listbox-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

**Note:** In previous versions of eBayUI-core this component was named `ebay-listbox`. The old naming will continue to work and an automated migration will be made available in the Marko 4 version of eBayUI-core.

## ebay-listbox-button Tag

### ebay-listbox-button Usage

When no selected option is specified:

```marko
<ebay-listbox-button name="formFieldName">
    <@option value="1" text="Option 1"/>
    <@option value="2" text="Option 2"/>
    <@option value="3" text="Option 3"/>
</ebay-listbox-button>
```

When a selected option is specified:

```marko
<ebay-listbox-button name="formFieldName">
    <@option value="1" text="Option 1"/>
    <@option value="2" text="Option 2" selected/>
    <@option value="3" text="Option 3"/>
</ebay-listbox-button>
```

### ebay-listbox-button Attributes

| Name             | Type    | Stateful | Required | Description                                                                                                                                                             |
| ---------------- | ------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`           | String  | No       | Yes      | used for the `name` attribute of the native `<select>`                                                                                                                  |
| `selected`       | Number  | Yes      | n/a      | allows you to set the selected index option to `selected`                                                                                                               |
| `borderless`     | Boolean | No       | No       | whether button has borders                                                                                                                                              |
| `fluid`          | Boolean | No       | No       | whether listbox width is 100%                                                                                                                                           |
| `buttonName`     | String  | No       | Yes      | used for the `name` attribute of the native `<button>`                                                                                                                  |
| `truncate`       | Boolean | No       | No       | will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows                                                         |
| `prefix-id`      | String  | No       | No       | The id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`                                                     |
| `prefix-label`   | String  | No       | No       | The label to add before each selected item on the button. Cannot be used with `prefix-id`                                                                               |
| `list-selection` | String  | Yes      | n/a      | either "auto" or "manual" (default). If auto when using up/down key automatically selects the item. If manual then you have to press enter/space key to select an item. |

**Note:** For this component, `class` is applied to the root tag, while all other HTML attributes are applied to the `input` tag.

### ebay-listbox-button Events

| Event      | Data                      | Description      |
| ---------- | ------------------------- | ---------------- |
| `collapse` |                           | collapse content |
| `expand`   |                           | expand content   |
| `change`   | `{ el, index, selected }` | option selected  |

---

## @option Tag

### @option Usage

```marko
<@option value="1" text="Option 1"/>
```

### @option Attributes

| Name       | Type    | Stateful | Required | Description                                                                                                                             |
| ---------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `text`     | String  | No       | No       | string to use in the option                                                                                                             |
| `selected` | Boolean | Yes      | No       | whether or not the option is selected (**Note:** use the root `ebay-listbox-button` element's `selected` property to set this property) |
| `value`    | String  | Yes      | Yes      | used for the `value` attribute of the native `<option>`                                                                                 |
