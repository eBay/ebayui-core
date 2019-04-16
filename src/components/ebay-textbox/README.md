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
`icon` | String | No | name of the icon from skin
`icon-position` | String | No | Can be "prefix" / "postfix". If not specified or if the value passed is neither "prefix" nor "postfix",  the `icon-position` is set by default to "prefix"

## ebay-textbox Events

Event | Data | Description
--- | --- | ---
`textbox-change` | `{ originalEvent, value }` |
`textbox-input` | `{ originalEvent, value }` |
`textbox-focus` | `{ originalEvent, value }` |
`textbox-blur` | `{ originalEvent, value }` |
`textbox-keydown` | `{ originalEvent, value }` |
`textbox-floating-label-init` | `{ originalEvent: null, value: null }` |
