# ebay-tab

## ebay-tab Usage

```marko
<ebay-tab>
    <ebay-tab-item>Tab 1</ebay-tab-item>
    <ebay-tab-item>Tab 2</ebay-tab-item>
    <ebay-tab-item>Tab 3</ebay-tab-item>
    <ebay-tab-panel>Panel 1</ebay-tab-panel>
    <ebay-tab-panel>Panel 2</ebay-tab-panel>
    <ebay-tab-panel>Panel 3</ebay-tab-panel>
</ebay-tab>
```

## ebay-tab Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`index` | String | Yes | 0-based index of selected tab item and panel
`fake` | Boolean | No | Whether to use link behavior of tab items

## ebay-tab Events

Event | Data | Description
--- | --- | ---
`tab-select` | `{ originalEvent }` |

## ebay-tab-item Tag

### ebay-tab-item Usage

```marko
<ebay-tab-item>Tab 1</ebay-tab-item>
```

## ebay-tab-item Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | For use with `fake` tab component

## ebay-tab-panel Tag

### ebay-tab-panel Usage

```marko
<ebay-tab-panel>Panel 1</ebay-tab-panel>
```
