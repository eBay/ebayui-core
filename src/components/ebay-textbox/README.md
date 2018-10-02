# ebay-textbox

## ebay-textbox Usage

Default input textbox:

```marko
<ebay-textbox />
```

## ebay-textbox Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`fluid` | Boolean | No |
`multiline` | Boolean | No | renders a multi-line texbox if true
`invalid` | Boolean | No | indicates a field-level error with red border if true

## ebay-textbox Events

Event | Data | Description
--- | --- | ---
`textbox-change` | `{ originalEvent, value }` |
`textbox-input` | `{ originalEvent, value }` |
`textbox-focus` | `{ originalEvent, value }` |
`textbox-blur` | `{ originalEvent, value }` |
