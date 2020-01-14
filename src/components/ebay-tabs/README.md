# ebay-tabs

## ebay-tabs Usage

```marko
<ebay-tabs>
    <ebay-tabs-heading>Tab 1</ebay-tabs-heading>
    <ebay-tabs-heading>Tab 2</ebay-tabs-heading>
    <ebay-tabs-heading>Tab 3</ebay-tabs-heading>
    <ebay-tabs-panel>Panel 1</ebay-tabs-panel>
    <ebay-tabs-panel>Panel 2</ebay-tabs-panel>
    <ebay-tabs-panel>Panel 3</ebay-tabs-panel>
</ebay-tabs>
```

## ebay-tabs Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`index` | String | Yes | No | 0-based index of selected tab heading and panel
`fake` | Boolean | No | No | Whether to use link behavior for tab headings
`activation` | String | Yes | No | whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual"

> *Note:* When using fake tabs there is no `preventDefault` applied, and therefore the link in the tab heading will work as a normal and navigate to the URL provided in the `href`.

## ebay-tabs Events

Event | Data | Description
--- | --- | ---
`tabs-select` | `{ index }` |

## ebay-tabs-heading Tag

### ebay-tabs-heading Usage

```marko
<ebay-tabs-heading>Tab 1</ebay-tabs-heading>
```

## ebay-tabs-heading Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | ---
`href` | String | No | No | For use with `fake` tab component

## ebay-tabs-panel Tag

### ebay-tabs-panel Usage

```marko
<ebay-tabs-panel>Panel 1</ebay-tabs-panel>
```
