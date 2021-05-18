<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tooltip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-tooltip Example

```marko
<ebay-tooltip>
    <@host>
        <a href="https://www.ebay.com">My custom link.</a>
    </@host>
    <@content><p>Use Access Key 'S' to display settings.</p></@content>
</ebay-tooltip>
```

**Note:** You must supply the `.tooltip__host` class to the element in the `<@host>` to
which you would like to have the tooltip hover and focus event bindings. In the case that your element
is not focusable, the first focusable element will trigger the tooltip's focus events.

## ebay-tooltip Sub-tags

| Tag          | Required | Description                                          |
| ------------ | -------- | ---------------------------------------------------- |
| `<@host>`    | Yes      | The body which will be wrapped as the tooltip's host |
| `<@content>` | Yes      | The content to be displayed in the tooltip           |

## ebay-tooltip Attributes

| Name           | Type    | Stateful | Required | Description                                                                                                                                                  |
| -------------- | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pointer`      | String  | No       | No       | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top` |
| `style-top`    | String  | No       | No       | a style property for the CSS `top` rule                                                                                                                      |
| `style-left`   | String  | No       | No       | a style property for the CSS `left` rule                                                                                                                     |
| `style-right`  | String  | No       | No       | a style property for the CSS `right` rule                                                                                                                    |
| `style-bottom` | String  | No       | No       | a style property for the CSS `bottom` rule                                                                                                                   |
| `no-hover`     | Boolean | No       | No       | disable hover (and only use focus) to open the tooltip                                                                                                       |

## ebay-tooltip Events

| Event      | Data | Description                |
| ---------- | ---- | -------------------------- |
| `expand`   |      | overlay has been expanded  |
| `collapse` |      | overlay has been collapsed |
