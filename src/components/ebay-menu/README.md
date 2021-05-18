<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## ebay-menu Tag

### ebay-menu Usage

```marko
<ebay-menu text="text">
    <@item>item 1</@item>
    <@item>item 2</@item>
    <@item>item 3</@item>
</ebay-menu>
```

### ebay-menu Attributes

| Name              | Type   | Stateful | Required | Description                                                                                             |
| ----------------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `type`            | String | No       | No       | Can be "radio" / "checkbox"                                                                             |
| `priority`        | String | No       | No       | button priority, "primary" / "secondary" (default) / "none"                                             |
| `checked` (radio) | Number | Yes      | No       | will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup |

### ebay-menu Events

| Event                            | Data                           | Description           |
| -------------------------------- | ------------------------------ | --------------------- |
| `keydown`                        | `{ el, index, checked }`       |
| `change` (radio)                 | `{ el, index, checked }`       | item changed/checked  |
| `change` (checkbox)              | `{ el, [indexes], [checked] }` | items changed/checked |
| `select` (not radio or checkbox) | `{ el, index, checked }`       | item clicked          |

## @item Tag

### @item Usage

```marko
<@item>item 1</@item>
```

### @item Attributes

| Name                          | Type    | Stateful | Required                               | Description                                                       |
| ----------------------------- | ------- | -------- | -------------------------------------- | ----------------------------------------------------------------- |
| `value` (radio or checkbox)   | String  | No       | No                                     | the value to use with event responses for for the `checked` array |
| `checked` (radio or checkbox) | Boolean | No       | No                                     | whether or not the item is checked                                |
| `badge-number`                | Number  | No       | No                                     | used as the number to be placed in the badge                      |
| `badge-aria-label`            | String  | No       | Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge                  |

### Typeahead functionality

The menu now has a typeahead feature, so after the focus goes to the menu the user can start typing,
and focus will move to the item that matches the typed string. The typed string resets to an emtpy string
after a short time (currently 1300ms but could change in the future).

## ebay-menu-separator

Adds a line separator between each menu item

### ebay-menu-separator Usage

```marko
<ebay-menu>
    <@item>Item1</@item>
    <@separator/>
    <@item>Item2</@item>
</ebay-menu>
```
