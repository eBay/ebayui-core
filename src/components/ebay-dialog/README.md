# ebay-dialog

```marko
<ebay-dialog open a11y-close-text="Close Dialog">
  <h1>Hello World</h1>
</ebay-dialog>
```

*Note: When opening the dialog the `<body>` and `role=main` elements are modified. Please do not rely on setting styles based on `role=main` since it is changed to `role=presentation`*

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`type` | String | No | No | Can be "full" / "fill" / "left" / "right".
`open` | Boolean | Yes | No | Whether dialog is open.
`focus` | String | No | No | An id for an element which will receive focus when the dialog opens (defaults to close button).
`a11y-close-text` | String | No | Yes | A11y text for close button and mask.

## Events

Event | Data | Description
--- | --- | ---
`dialog-show` |  | dialog opened
`dialog-close` |  | dialog closed
