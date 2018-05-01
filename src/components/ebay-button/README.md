# ebay-button

## ebay-button Usage

```marko
<ebay-button>label</ebay-button>
<ebay-button label="label"/>
```

## ebay-button Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`label` | String | Yes | can be used instead of a tag body
`priority` | String | No | "primary" / "secondary" (default) / "none"
`size` | String | No | "small" or "large" (default: medium)
`href` | String | No | for link that looks like a button
`fluid` | Boolean | No |
`disabled` | Boolean | Yes |
`partially-disabled` | Boolean | No

## ebay-button Events

Event | Description
--- | ---
`button-click` | click
