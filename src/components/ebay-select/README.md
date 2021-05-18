<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

_**For Mobile only**_

The `<ebay-select>` is used to create a native `<select>` form element with default browser styling.

## ebay-select Tag

### ebay-select Usage

When no selected option is specified:

```marko
<ebay-select name="formFieldName">
    <@option value="1" text="Option 1"/>
    <@option value="2" text="Option 2"/>
    <@option value="3" text="Option 3"/>
</ebay-select>
```

When a selected option is specified:

```marko
<ebay-select name="formFieldName">
    <@option value="1" text="Option 1"/>
    <@option value="2" text="Option 2" selected/>
    <@option value="3" text="Option 3"/>
</ebay-select>
```

### ebay-select Attributes

| Name         | Required | Type    | Stateful | Description                                               |
| ------------ | -------- | ------- | -------- | --------------------------------------------------------- |
| `selected`   | n/a      | Number  | Yes      | allows you to set the selected index option to `selected` |
| `borderless` | No       | Boolean | No       | whether button has borders                                |

Note: For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `select` tag. Be sure to include typical HTML attributes for the `select` tag, like `name`.

### ebay-select Events

| Event    | Data                      | Description     |
| -------- | ------------------------- | --------------- |
| `change` | `{ el, index, selected }` | option selected |

---

## @option Tag

### @option Usage

```marko
<@option value="1" text="Option 1"/>
```

### @option Attributes

| Name       | Type    | Stateful | Required | Description                                                                                                                     |
| ---------- | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `text`     | String  | No       | No       | text to use in the option                                                                                                       |
| `selected` | Boolean | Yes      | No       | whether or not the option is selected (**Note:** use the root `ebay-select` element's `selected` property to set this property) |
| `value`    | String  | Yes      | Yes      | used for the `value` attribute of the native `<option>`                                                                         |
