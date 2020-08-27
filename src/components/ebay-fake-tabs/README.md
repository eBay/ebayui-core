# ebay-fake-tabs

## ebay-fake-tabs Usage

```marko
<ebay-fake-tabs>
    <@heading>Tab 1</@heading>
    <@heading>Tab 2</@heading>
    <@heading>Tab 3</@heading>
    <@panel>Panel 1</@panel>
    <@panel>Panel 2</@panel>
    <@panel>Panel 3</@panel>
</ebay-fake-tabs>
```

## ebay-fake-tabs Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`index` | String | Yes | No | 0-based index of selected tab heading and panel

> *Note:* When using fake tabs there is no `preventDefault` applied, and therefore the link in the tab heading will work as a normal and navigate to the URL provided in the `href`.

## @heading Tag

### @heading Usage

```marko
<@heading href="www.ebay.com">Tab 1</@heading>
```

## @heading Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | ---
`href` | String | No | Yes | The link to take the user to for each tab

## @panel Tag

### @panel Usage

```marko
<@panel>Panel 1</@panel>
```
