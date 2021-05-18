<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-window-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The `<ebay-window-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

Window notices always show confirmation icons

## ebay-window-notice Usage

```marko
<ebay-window-notice a11y-text="Attention" status="attention">
    <@title>Window notice</@title>
    <p>Couldn't load all the items, please try again later.</p>
    <@footer><ebay-button>Click here</ebay-button></@footer>
</ebay-window-notice>
```

## ebay-window-notice Sub-tags

| Tag         | Required | Description                                                     |
| ----------- | -------- | --------------------------------------------------------------- |
| `<@title>`  | No       | The title content to be displayed.                              |
| `<@footer>` | No       | The footer content to be displayed. Used for buttons or actions |

## ebay-window-notice Attributes

| Name        | Type   | Stateful | Required | Description                                                                                                                      |
| ----------- | ------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `a11y-text` | String | No       | Yes      | adding description for the notice for a11y users                                                                                 |
| `icon`      | String | Yes      | No       | "default" (matches whatever is specified by the "status") or "none"                                                              |
| `window`    | String | No       | No       | either "fullscreen" or "lightbox" (default). If set to full screen the notice will fill the full height of it's window/container |
