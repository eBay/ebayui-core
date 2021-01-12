<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-expand-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

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
