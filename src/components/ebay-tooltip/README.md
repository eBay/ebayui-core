# ebay-tooltip

## ebay-tooltip Example

```marko
<ebay-tooltip>
    <ebay-tooltip-host>
        <a href="https://www.ebay.com">My custom link.</a>
    </ebay-tooltip-host>
    <ebay-tooltip-content><p>Use Access Key 'S' to display settings.</p></ebay-tooltip-content>
</ebay-tooltip>
```

**Note:** You must supply the `.tooltip__host` class to the element in the `<ebay-tooltip-host>` to
which you would like to have the tooltip hover and focus event bindings. In the case that your element
is not focusable, the first focusable element will trigger the tooltip's focus events.

## ebay-tooltip Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-tooltip-host>` | Yes | The body which will be wrapped as the tooltip's host
`<ebay-tooltip-content>` | Yes | The content to be displayed in the tooltip

## ebay-tooltip Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`pointer` | String | No | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`
`style-top` | String | No | a style property for the CSS `top` rule
`style-left` | String | No | a style property for the CSS `left` rule
`style-right` | String | No | a style property for the CSS `right` rule
`style-bottom` | String | No | a style property for the CSS `bottom` rule
`no-hover` | Boolean | No | disable hover (and only use focus) to open the tooltip

## ebay-tooltip Events

Event | Data | Description
--- | --- | ---
`tooltip-expand` | | overlay has been expanded
`tooltip-collapse` | | overlay has been collapsed
