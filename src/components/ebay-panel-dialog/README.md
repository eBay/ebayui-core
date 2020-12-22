# ebay-panel-dialog v2.0.0

```marko
<ebay-panel-dialog open a11y-close-text="Close Dialog">
  <@header>Hello World</@header>
  Body content
</ebay-panel-dialog>
```

##

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

## <@header>

Adds header content for the panel

## <@close-button>

If present will render this as the close button content. Otherwise will render a close icon (X).
This content will be rendered inside a button tag
