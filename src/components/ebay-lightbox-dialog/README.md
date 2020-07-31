# ebay-lightbox-dialog

```marko
<ebay-lightbox-dialog open a11y-close-text="Close Dialog">
  <h1>Hello World</h1>
</ebay-lightbox-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`focus` | String | No | No | An id for an element which will receive focus when the dialog opens (defaults to close button).
`mode` | String | No | No | Either "mini" or "default". Changes the dialog to be normal dialog or mini version (for use in infotip)
`a11y-close-text` | String | No | Yes | A11y text for close button and mask.

## Events

Event | Data | Description
--- | --- | ---
`lightbox-dialog-open` |  | dialog opened
`lightbox-dialog-close` |  | dialog closed
