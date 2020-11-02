# ebay-switch

## ebay-switch Usage

```marko
<ebay-switch/>
```

## ebay-switch Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`disabled` | Boolean | No | No |

**Note:** For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.

## ebay-switch Events

Event | Data | Description
--- | --- | ---
`change` | `{ originalEvent, value, checked }` | selected value and checked status
