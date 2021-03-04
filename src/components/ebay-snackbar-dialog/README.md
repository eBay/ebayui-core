<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-snackbar-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

```marko
<ebay-snackbar-dialog>
    Basic Snackbar
</ebay-snackbar-dialog>
```

## Description

A snackbar is a non-modal dialog that appears in response to a lightweight user action. It disappears automatically after a minimum of 6 seconds.

The user usually will want to manage the state of the snackbar, and so should provide the open state as a boolean as well as a function to synchronize the app state with the snackbar state when the on-close event occurs.

In the case where the application developer only wants to manage the initial state of the snackbar, the dev can choose to provide only the open state as a boolean. This is useful when a dev wants the snackbar to appear only once on initial render and then disappear.

## Attributes

| Name     | Type    | Stateful | Required | Description                                                                                                      |
| -------- | ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `open`   | Boolean | Yes      | No       | The open state must be passed into the component.                                                                |
| `layout` | Enum    | No       | No       | Direction of row or column for the text and the action button. Default is 'row'. Options are 'row' and 'column'. |
