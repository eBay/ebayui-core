# ebay-fullscreen-dialog

```marko
<ebay-fullscreen-dialog open a11y-close-text="Close Dialog">
  <h1>Hello World</h1>
</ebay-fullscreen-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`focus` | String | No | No | An id for an element which will receive focus when the dialog opens (defaults to close button).
`a11y-close-text` | String | No | Yes | A11y text for close button and mask.

## Events

Event | Data | Description
--- | --- | ---
`open` |  | dialog opened
`close` |  | dialog closed
