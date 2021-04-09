<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

## ebay-fake-tabs Usage

```marko
<ebay-fake-tabs>
    <@tab>Tab 1</@tab>
    <@tab>Tab 2</@tab>
    <@tab>Tab 3</@tab>
    Body Content
</ebay-fake-tabs>
```

## ebay-fake-tabs Attributes

| Name             | Type   | Stateful | Required | Description                                                             |
| ---------------- | ------ | -------- | -------- | ----------------------------------------------------------------------- |
| `selectedIndex`  | String | Yes      | No       | 0-based index of selected tab tab and panel                             |
| `tabAriaCurrent` | Enum   | No       | No       | If provided, will set aria-current to provided value. Default is "page" |

> _Note:_ When using fake tabs there is no `preventDefault` applied, and therefore the link in the tab tab will work as a normal and navigate to the URL provided in the `href`.

## @tab Tag

### @tab Usage

```marko
<@tab href="www.ebay.com">Tab 1</@tab>
```

## @tab Attributes

| Name   | Type   | Stateful | Required | Description                               |
| ------ | ------ | -------- | -------- | ----------------------------------------- |
| `href` | String | No       | Yes      | The link to take the user to for each tab |

## Body

The body content will be the visible panel of the current "selected" fake tab
