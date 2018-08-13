# ebay-button

## ebay-button Usage

```marko
<ebay-button>label</ebay-button>
```

## ebay-button Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`priority` | String | No | "primary" / "secondary" (default) / "none"
`size` | String | No | "small" or "large" (default: medium)
`href` | String | No | for link that looks like a button
`fluid` | Boolean | No |
`disabled` | Boolean | Yes |
`partially-disabled` | Boolean | No
`variant` | String | No | optional, to alter Skin classes: "expand" / "cta"

## ebay-button Events

Event | Data | Description
--- | --- | ---
`button-click` | `{ originalEvent }` | click
