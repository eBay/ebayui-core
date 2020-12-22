# ebay-toast-dialog v2.1.0

```marko
<ebay-toast-dialog open a11y-close-text="Close Toast">
  <h1>Hello World</h1>
</ebay-toast-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether toast is open.
`focus` | String | No | No | An id for an element which will receive focus when the toast opens (defaults to close button).
`a11y-close-text` | String | No | Yes | A11y text for close button.

## Events

Event | Data | Description
--- | --- | ---
`open` |  | toast opened
`close` |  | toast closed

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

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`as` | String | No | No | The tag to render which wraps the rest of the header content. Default is "h2"
