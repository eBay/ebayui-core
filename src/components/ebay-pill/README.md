# ebay-pill

## ebay-pill Usage

```marko
<ebay-pill>text</ebay-pill>
```

## ebay-pill Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`href` | String | No | No | for link that looks like a button
`disabled` | Boolean | No | No |
`pressed` | Boolean | No | No |

### Additional attributes for fake pills

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-active-text` | String | No | Yes | defaults to `"Selected"`, but should be changed based on L10N or I18N

## ebay-pill Events

Please see [`ebay-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-button#ebay-button-events).
