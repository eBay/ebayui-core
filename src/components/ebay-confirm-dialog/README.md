<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
      ebay-confirm-dialog
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        
    </span>
</h1>

Used to force the user to make a choice to either confirm or reject. Cannot be closed unless one of the two options are pressed. Pressing escape will trigger reject.

```marko
<ebay-confirm-dialog open confirm-text="Confirm" reject-text="Reject">
  <@header>Title</@header>
  <p>Hello pick one</p>
</ebay-confirm-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`confirm-text` | String | No | Yes | Text for confirm button
`reject-text` | String | No | Yes | Text for reject button

## Events

Event | Data | Description
--- | --- | ---
`open` |  | dialog opened
`confirm` |  | dialog confirm button pressed
`reject` |  | dialog reject button pressed
