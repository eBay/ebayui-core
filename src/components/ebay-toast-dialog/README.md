<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-toast-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

```marko
<ebay-toast-dialog open a11y-close-text="Close Toast">
    <h1>Hello World</h1>
</ebay-toast-dialog>
```

## Attributes

| Name              | Type    | Stateful | Required | Description                 |
| ----------------- | ------- | -------- | -------- | --------------------------- |
| `open`            | Boolean | Yes      | No       | Whether toast is open.      |
| `a11y-close-text` | String  | No       | Yes      | A11y text for close button. |

## Events

| Event   | Data | Description  |
| ------- | ---- | ------------ |
| `open`  |      | toast opened |
| `close` |      | toast closed |

## @header

Creates a header for the toast

### @header Usage

```marko
<ebay-toast-dialog open a11y-close-text="Close Toast">
    <@header>Title</header>
    <h1>Hello World</h1>
</ebay-toast-dialog>

```

### @header attributes

| Name | Type   | Stateful | Required | Description                                                                   |
| ---- | ------ | -------- | -------- | ----------------------------------------------------------------------------- |
| `as` | String | No       | No       | The tag to render which wraps the rest of the header content. Default is "h2" |
