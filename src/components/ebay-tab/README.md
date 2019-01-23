# ebay-tab

## ebay-tab Usage

```marko
<ebay-tab>
    <ebay-tab-heading>Tab 1</ebay-tab-heading>
    <ebay-tab-heading>Tab 2</ebay-tab-heading>
    <ebay-tab-heading>Tab 3</ebay-tab-heading>
    <ebay-tab-panel>Panel 1</ebay-tab-panel>
    <ebay-tab-panel>Panel 2</ebay-tab-panel>
    <ebay-tab-panel>Panel 3</ebay-tab-panel>
</ebay-tab>
```

## ebay-tab Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`index` | String | Yes | 0-based index of selected tab heading and panel
`fake` | Boolean | No | Whether to use link behavior for tab headings
`activation` | String | Yes | whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual"

## ebay-tab Events

Event | Data | Description
--- | --- | ---
`tab-select` | `{ index }` |

## ebay-tab-heading Tag

### ebay-tab-heading Usage

```marko
<ebay-tab-heading>Tab 1</ebay-tab-heading>
```

## ebay-tab-heading Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | For use with `fake` tab component

## ebay-tab-panel Tag

### ebay-tab-panel Usage

```marko
<ebay-tab-panel>Panel 1</ebay-tab-panel>
```
