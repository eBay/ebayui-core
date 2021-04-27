# ebay-checkbox

## ebay-checkbox Usage

```marko
<ebay-checkbox/>
```

## ebay-checkbox Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`disabled` | Boolean | No | No |
`size` | String | No | No | Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)

Note: For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.

## ebay-checkbox Events

Event | Data | Description
--- | --- | --
`checkbox-change` | `{ originalEvent, value, checked }` | selected value and checked status
`checkbox-focus` | `{ originalEvent, value }` |
`checkbox-keydown` | `{ originalEvent, value }` |
