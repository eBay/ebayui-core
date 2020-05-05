# ebay-toast

```marko
<ebay-toast open a11y-close-text="Close Toast">
  <h1>Hello World</h1>
</ebay-toast>
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
`toast-show` |  | toast opened
`toast-close` |  | toast closed
