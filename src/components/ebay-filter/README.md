# ebay-filter

## ebay-filter Usage

```marko
<ebay-filter>text</ebay-filter>
```

## ebay-filter Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`href` | String | No | No | for link that looks like a button
`disabled` | Boolean | No | No |
`selected` | Boolean | No | No |

### Additional attributes when using fake filters

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-selected-text` | String | No | Yes | defaults to `"Selected"`, but should be changed based on L10N or I18N

## ebay-filter Events

Event | Data | Description
--- | --- | ---
`click` | `{ originalEvent, selected }` | click or action key pressed (space and enter)
