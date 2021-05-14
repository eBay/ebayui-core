<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-combobox-readonly
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

_**For Desktop only**_

The `<ebay-combobox-readonly>` is used to create a custom-designed form element which matches much of the functionality of a native `<select>` menu. It hides the native select in favor of better design and UX for the end user.

## ebay-combobox-readonly Tag

### ebay-combobox-readonly Usage

When no selected option is specified:

```marko
<ebay-combobox-readonly name="formFieldName">
    <@option value="1" text="Option 1"/>
    <@option value="2" text="Option 2"/>
    <@option value="3" text="Option 3"/>
</ebay-combobox-readonly>
```

When a selected option is specified:

```marko
<ebay-combobox-readonly name="formFieldName">
    <@option value="1" text="Option 1"/>
    <@option value="2" text="Option 2" selected/>
    <@option value="3" text="Option 3"/>
</ebay-combobox-readonly>
```

### ebay-combobox-readonly Attributes

| Name         | Type    | Stateful | Required | Description                                               |
| ------------ | ------- | -------- | -------- | --------------------------------------------------------- |
| `name`       | String  | No       | Yes      | used for the `name` attribute of the native `<select>`    |
| `selected`   | Number  | Yes      | n/a      | allows you to set the selected index option to `selected` |
| `borderless` | Boolean | No       | No       | whether button has borders                                |

Note: For this component, `class` is applied to the root tag, while all other HTML attributes are applied to the `input` tag.

### ebay-combobox-readonly Events

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

| Name       | Type    | Stateful | Required | Description                                                                                                                                |
| ---------- | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `text`     | String  | No       | No       | string to use in the option                                                                                                                |
| `selected` | Boolean | Yes      | No       | whether or not the option is selected (**Note:** use the root `ebay-combobox-readonly` element's `selected` property to set this property) |
| `value`    | String  | Yes      | Yes      | used for the `value` attribute of the native `<option>`                                                                                    |
