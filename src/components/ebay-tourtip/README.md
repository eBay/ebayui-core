# ebay-tourtip

## ebay-tourtip Example

```marko
<ebay-tourtip a11y-close-text="Dismiss tourtip">
    <ebay-tourtip-host>
        <p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
        eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
        mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
        Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
        duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
        voluptate dolore quis aliquip duis duis.</p>
    </ebay-tourtip-host>
    <ebay-tourtip-heading>Important</ebay-tourtip-heading>
    <ebay-tourtip-content><p>This new feature was added.</p></ebay-tourtip-content>
</ebay-tourtip>
```

## ebay-tourtip Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-tourtip-host>` | Yes | The body which will be wrapped as the tourtip's host
`<ebay-tourtip-heading>` | Yes | The heading to be displayed in the tourtip
`<ebay-tourtip-content>` | Yes | The content to be displayed in the tourtip

## ebay-tourtip Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`pointer` | String | No | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`
`style-top` | String | No | a style property for the CSS `top` rule
`style-left` | String | No | a style property for the CSS `left` rule
`style-right` | String | No | a style property for the CSS `right` rule
`style-bottom` | String | No | a style property for the CSS `bottom` rule
`a11y-close-text` | String | No | A11y text for close button

## ebay-tourtip Events

Event | Data | Description
--- | --- | ---
`tooltip-collapse` | | overlay has been collapsed
