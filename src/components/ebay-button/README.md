# ebay-button

## ebay-button Usage

```marko
<ebay-button>text</ebay-button>
```

## ebay-button Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`priority` | String | No | "primary" / "secondary" (default) / "none"
`size` | String | No | "small" or "large" (default: medium)
`no-text` | Boolean | No | used to adjust padding for "expand" variant without text
`href` | String | No | for link that looks like a button
`fluid` | Boolean | No |
`disabled` | Boolean | Yes |
`partially-disabled` | Boolean | No |
`variant` | String | No | optional, to alter Skin classes: "expand" / "cta"
`fixed-height` | Boolean | No | fixes the height based on `size`; defaults to `medium` when no size is specified
`truncate` | Boolean | No | will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows
`badge-number` | Number | No | used as the number to be placed in the badge
`badge-aria-label` | String | No | passed as the `aria-label` directly to the badge

## ebay-button Events

Event | Data | Description
--- | --- | ---
`button-click` | `{ originalEvent }` | click or action key pressed (space and enter)
`button-escape` | `{ originalEvent }` | escape key pressed
