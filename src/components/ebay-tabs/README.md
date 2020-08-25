# ebay-tabs

## ebay-tabs Usage

```marko
<ebay-tabs>
    <@heading>Tab 1</@heading>
    <@heading>Tab 2</@heading>
    <@heading>Tab 3</@heading>
    <@panel>Panel 1</@panel>
    <@panel>Panel 2</@panel>
    <@panel>Panel 3</@panel>
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
`select` | `{ index }` |

## @heading Tag

### @heading Usage

```marko
<@heading>Tab 1</@heading>
```

## @heading Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | ---
`href` | String | No | No | For use with `fake` tab component

## @panel Tag

### @panel Usage

```marko
<@panel>Panel 1</@panel>
```
