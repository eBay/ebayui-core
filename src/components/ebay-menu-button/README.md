<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

**Note:** In previous versions of eBayUI-core this component was named `ebay-menu`. The old naming will continue to work and an automated migration will be made available in the Marko 4 version of eBayUI-core.

## ebay-menu-button Tag

### ebay-menu-button Usage

```marko
<ebay-menu-button text="text">
    <@item>item 1</@item>
    <@item>item 2</@item>
    <@item>item 3</@item>
</ebay-menu-button>
```

## ebay-menu-buton Sub-tags

| Tag     | Required | Description                                         |
| ------- | -------- | --------------------------------------------------- |
| `@item` | No       | All items to be displayed for menu-button           |
| `@icon` | No       | An `<ebay-{name}-icon>` to show for the icon button |

### ebay-menu-button Attributes

| Name               | Type    | Stateful | Required | Description                                                                                                      |
| ------------------ | ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `text`             | String  | Yes      | Yes      | button text                                                                                                      |
| `a11y-text`        | String  | No       | No       | a11y text for the button, especially for cases without text                                                      |
| `no-toggle-icon`   | Boolean | No       | No       | whether to hide the chevron toggle icon                                                                          |
| `expanded`         | Boolean | Yes      | No       | whether content is expanded (Note: not supported as initial attribute)                                           |
| `type`             | String  | No       | No       | Can be "radio" / "checkbox"                                                                                      |
| `reverse`          | Boolean | No       | No       | expand menu flyout to the left                                                                                   |
| `fix-width`        | Boolean | No       | No       | constrain items container width to button width                                                                  |
| `borderless`       | Boolean | No       | No       | whether button has borders                                                                                       |
| `size`             | String  | No       | No       | button size, "large" (default: "none")                                                                           |
| `priority`         | String  | No       | No       | button priority, "primary" (deprecated) / "secondary" (deprecated) / "none" (default)                            |
| `checked` (radio)  | Number  | Yes      | No       | will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup          |
| `disabled`         | Boolean | Yes      | No       | Will disable the entire dropdown (disables the ebay-button label) if set to true                                 |
| `variant`          | String  | No       | No       | will change the button style, "overflow" / "default"                                                             |
| `collapseOnSelect` | Boolean | Yes      | No       | Will collapse whole menu when an item is selected in menu. Typically used in `type="radio"`                      |
| `prefix-id`        | String  | No       | No       | The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label` |
| `prefix-label`     | String  | No       | No       | The label to add before each selected item on the button. Cannot be used with `prefix-id`                        |

### ebay-menu-button Events

| Event                            | Data                                          | Description           |
| -------------------------------- | --------------------------------------------- | --------------------- |
| `expand`                         |                                               | expand content        |
| `collapse`                       |                                               | collapse content      |
| `change` (radio)                 | `{ el, index, checked, originalEvent }`       | item changed/checked  |
| `change` (checkbox)              | `{ el, [indexes], [checked], originalEvent }` | items changed/checked |
| `select` (not radio or checkbox) | `{ el, index, checked, originalEvent }`       | item clicked          |

## @label Tag

### @label Usage

```marko
<@label><div>Custom Label</div></@label>
```

## @item Tag

### @item Usage

```marko
<@item>item 1</@item>
```

### @item Attributes

| Name                          | Type    | Stateful | Required                               | Description                                      |
| ----------------------------- | ------- | -------- | -------------------------------------- | ------------------------------------------------ |
| `checked` (radio or checkbox) | Boolean | No       | No                                     | whether or not the item is checked               |
| `badge-number`                | Number  | No       | No                                     | used as the number to be placed in the badge     |
| `badge-aria-label`            | String  | No       | Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge |

## ebay-menu-button-separator

Adds a line separator between each menu button items

### ebay-menu-button-separator Usage

```marko
<ebay-menu>
    <@item>Item1</@item>
    <@item separator/>
    <@item>Item2</@item>
</ebay-menu>
```
