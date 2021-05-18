<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-switch
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## ebay-switch Usage

```marko
<ebay-switch/>
```

## ebay-switch Attributes

| Name       | Type    | Stateful | Required | Description |
| ---------- | ------- | -------- | -------- | ----------- |
| `disabled` | Boolean | No       | No       |

**Note:** For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.

## ebay-switch Events

| Event    | Data                                | Description                       |
| -------- | ----------------------------------- | --------------------------------- |
| `change` | `{ originalEvent, value, checked }` | selected value and checked status |
