# ebay-alert-dialog

Used to force the user to read an import message. The dialog will only be dismissed when the user presses the confirm button

```marko
<ebay-alert-dialog open alert-text="Confirm">
  <@header>Title</@header>
  <p>Hello some important info</p>
</ebay-alert-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`confirm-text` | String | No | Yes | Text for confirm button

## Events

Event | Data | Description
--- | --- | ---
`open` |  | dialog opened
`confirm` |  | dialog confirm button pressed
