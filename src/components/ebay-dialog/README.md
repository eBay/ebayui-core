# ebay-dialog

```marko
<ebay-dialog open a11y-close-text="Close Dialog">
  <h1>Hello World</h1>
</ebay-dialog>
```

## Attributes
Name | Type | Stateful | Description
--- | --- | --- | ---
`type` | String | No | Can be "full" / "fill" / "left" / "right".
`open` | Boolean | Yes | Whether dialog is open.
`focus` | String | No | An id for an element which will receive focus when the dialog opens (defaults to close button).
`a11y-close-text` | String | No | A11y text for close button and mask.

## Events
Event | Data | Description
--- | --- | ---
`dialog-show` |  | dialog opened
`dialog-close` |  | dialog closed
