<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-drawer-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

```marko
<ebay-drawer-dialog open a11y-close-text="Close Drawer">
  <h1>Hello World</h1>
</ebay-drawer-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`expanded` | Boolean | No | No | Whether the drawer is expanded to full height or max 50%
`open` | Boolean | Yes | No | Whether drawer is open.
`noHandle` | Boolean | Yes | No | Wheather handle will be shown or not.
`focus` | String | No | No | An id for an element which will receive focus when the drawer opens (defaults to close button).
`a11y-close-text` | String | No | Yes | A11y text for close button and mask.
`a11y-minimize-text` | String | No | Yes | A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer.
`a11y-maximize-text` | String | No | Yes | A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer.

## Events

Event | Data | Description
--- | --- | ---
`drawer-show` |  | drawer opened
`drawer-close` |  | drawer closed. Triggered also when user drags down on handle (touch only) when dialog is not expanded
`drawer-expanded` |  | drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded
`drawer-collapsed` |  | drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded
