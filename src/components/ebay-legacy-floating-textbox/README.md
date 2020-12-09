# ebay-textbox

## ebay-textbox Usage

Default input textbox:

```marko
<ebay-legacy-floating-textbox />
```

## ebay-textbox Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`floating-label` | String | No | Yes | The label part of the floating label
`fluid` | Boolean | No | No |
`invalid` | Boolean | No | No | indicates a field-level error with red border if true

## ebay-textbox Events

Event | Data | Description
--- | --- | ---
`change` | `{ originalEvent, value }` |
`input-change` | `{ originalEvent, value }` |
`focus` | `{ originalEvent, value }` |
`blur` | `{ originalEvent, value }` |
`keydown` | `{ originalEvent, value }` |
`keypress` | `{ originalEvent, value }` |
`keyup` | `{ originalEvent, value }` |
`floating-label-init` | `{ originalEvent: null, value: null }` |
`button-click` | `{ originalEvent, value }` | Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly
