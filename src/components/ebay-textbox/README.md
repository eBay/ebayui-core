# ebay-textbox

## ebay-textbox Usage

Default input textbox:

```marko
<ebay-textbox />
```

## ebay-textbox Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`fluid` | Boolean | No | No |
`multiline` | Boolean | No | No | renders a multi-line texbox if true
`invalid` | Boolean | No | No | indicates a field-level error with red border if true
`prefix-icon` | String | No | No | name of the icon from skin to show as the prefix icon
`postfix-icon` | String | No | No | name of the icon from skin to show as the postfix icon
`button-aria-label` | String | No | No | aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`

## ebay-textbox Events

Event | Data | Description
--- | --- | ---
`textbox-change` | `{ originalEvent, value }` |
`textbox-input` | `{ originalEvent, value }` |
`textbox-focus` | `{ originalEvent, value }` |
`textbox-blur` | `{ originalEvent, value }` |
`textbox-keydown` | `{ originalEvent, value }` |
`textbox-keypress` | `{ originalEvent, value }` |
`textbox-keyup` | `{ originalEvent, value }` |
`textbox-floating-label-init` | `{ originalEvent: null, value: null }` |
`textbox-button-click` | `{ originalEvent, value }` | Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly
