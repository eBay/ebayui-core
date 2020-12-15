# ebay-expand-button

## ebay-expand-button Usage

```marko
<ebay-expand-button>text</ebay-expand-button>
```

## ebay-expand-button Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`size` | String | No | No | Can be "large". If not set, defaults to default
`disabled` | Boolean | Yes | No |

## ebay-expand-button Events

Event | Data | Description
--- | --- | ---
`click` | `{ originalEvent }` | click or action key pressed (space and enter)
`escape` | `{ originalEvent }` | escape key pressed
