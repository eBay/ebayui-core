<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The `ebay-filter-menu` component is used as a checkbox menu specificially styled for filtering actions. Generally it is coupled with the `ebay-filter-menu-button` to create a selectable set of items by which to filter.

## ebay-filter-menu Tag

### ebay-filter-menu Usage

```marko
<ebay-filter-menu>
    <@item value="item 1">item 1</@item>
    <@item value="item 2">item 2</@item>
    <@item value="item 3">item 3</@item>
</ebay-filter-menu>
```

### ebay-filter-menu Attributes

| Name           | Type   | Stateful | Required | Description                                                                         |
| -------------- | ------ | -------- | -------- | ----------------------------------------------------------------------------------- |
| `type`         | String | No       | No       | Can be "radio" / "checkbox"                                                         |
| `footer-text`  | String | Yes      | No       | footer button text                                                                  |
| `variant`      | String | No       | No       | "" (default) / "form"                                                               |
| `form-name`    | String | No       | No       | form's `name` attribute (used with `variant="form"`)                                |
| `form-action`  | String | No       | No       | form's `action` attribute (used with `variant="form"`)                              |
| `form-method`  | String | No       | No       | form's `method` attribute (used with `variant="form"`)                              |
| `class-prefix` | String | No       | No       | "filter-menu" (default) / modifies the base prefix for all Skin classes in the menu |

#### Additional attributes for when footer-text is set

| Name               | Type   | Stateful | Required | Description                     |
| ------------------ | ------ | -------- | -------- | ------------------------------- |
| `a11y-footer-text` | String | No       | Yes      | a11y text for the footer button |

### ebay-filter-menu Events

| Event          | Data                             | Description                  |
| -------------- | -------------------------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| `change`       | `{ el, checked, originalEvent }` | items changed/checked        |
| `footer-click` | `{ checked, originalEvent }`     | footer button clicked        |
| `form-submit`  |                                  | `{ checked, originalEvent }` | when using `variant="form"`, and form is submitted (emits current checked state) |

## @item Tag

### @item Usage

```marko
<@item>item 1</@item>
```

### @item Attributes

| Name      | Type    | Stateful | Required | Description                                                |
| --------- | ------- | -------- | -------- | ---------------------------------------------------------- |
| `checked` | Boolean | Yes      | No       | whether or not the item is checked                         |
| `value`   | Boolean | Yes      | No       | the item's value (returned in emitted events when checked) |
