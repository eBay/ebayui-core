<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-drawer-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

```marko
<ebay-drawer-dialog a11y-close-text="Close Dialog" aria-labelledby="drawer-title" open>
  <@header id="drawer-title">Heading</@header>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
      <a href="http://www.ebay.com">www.ebay.com</a>
  </p>
  <@footer>
      <ebay-button>Close</ebay-button>
  </@footer>
</ebay-drawer-dialog>
```

## Attributes

| Name                 | Type    | Stateful | Required | Description                                                                                           |
| -------------------- | ------- | -------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `expanded`           | Boolean | No       | No       | Whether the drawer is expanded to full height or max 50%                                              |
| `open`               | Boolean | Yes      | No       | Whether drawer is open.                                                                               |
| `noHandle`           | Boolean | Yes      | No       | Whether handle will be shown or not.                                                                  |
| `focus`              | String  | No       | No       | An id for an element which will receive focus when the drawer opens (defaults to close button).       |
| `a11y-close-text`    | String  | No       | Yes      | A11y text for close button and mask.                                                                  |
| `a11y-minimize-text` | String  | No       | Yes      | A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer. |
| `a11y-maximize-text` | String  | No       | Yes      | A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer. |

## Events

| Event       | Data | Description                                                                                                                                                   |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`      |      | drawer opened                                                                                                                                                 |
| `close`     |      | drawer closed. Triggered also when user drags down on handle (touch only) when dialog is not expanded                                                         |
| `expanded`  |      | drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded |
| `collapsed` |      | drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded                                    |

## <@header>

Renders the drawer-dialog heading element and content.

## <@footer>

Renders the drawer-dialog footer element and content.
