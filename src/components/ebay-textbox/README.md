# ebay-textbox v1.1.0

## ebay-textbox Usage

Default input textbox:

```marko
<ebay-textbox />
```

## ebay-textbox Attribute tags
Tag | Required | Description
--- | --- | ---
`prefix-icon` | No | An `<ebay-{name}-icon>` to show as the prefix icon.
`postfix-icon` | No | An `<ebay-{name}-icon>` to show as the postfix icon.

## ebay-textbox Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`fluid` | Boolean | No | No |
`multiline` | Boolean | No | No | renders a multi-line texbox if true
`invalid` | Boolean | No | No | indicates a field-level error with red border if true
`button-aria-label` | String | No | No | aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`

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
