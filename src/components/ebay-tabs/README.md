<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

## ebay-tabs Usage

```marko
<ebay-tabs>
    <@tab>Tab 1</@tab>
    <@tab>Tab 2</@tab>
    <@tab>Tab 3</@tab>
    <@panel>Panel 1</@panel>
    <@panel>Panel 2</@panel>
    <@panel>Panel 3</@panel>
</ebay-tabs>
```

## ebay-tabs Attributes

| Name            | Type   | Stateful | Required | Description                                                                                            |
| --------------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `selectedIndex` | String | Yes      | No       | 0-based index of selected tab tab and panel                                                            |
| `activation`    | String | Yes      | No       | whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual" |

## ebay-tabs Events

| Event    | Data                | Description |
| -------- | ------------------- | ----------- |
| `select` | `{ selectedIndex }` |

## @tab Tag

### @tab Usage

```marko
<@tab>Tab 1</@tab>
```

## @panel Tag

### @panel Usage

```marko
<@panel>Panel 1</@panel>
```
