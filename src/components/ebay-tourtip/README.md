# ebay-tooltip

The `ebay-tooltip` is a rollup of three types of tooltips: tooltip, infotip, and tourtip. These three components
have very similar styles, but have very different requirements.

## Usage

### ebay-tooltip Example

```marko
<ebay-tooltip>
    <ebay-tooltip-host>
        <a href="https://www.ebay.com">My custom link.</a>
    </ebay-tooltip-host>
    <ebay-tooltip-content><p>Use Access Key 'S' to display settings.</p></ebay-tooltip-content>
</ebay-tooltip>
```

### ebay-tooltip Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-tooltip-host>` | Yes | The body which will be wrapped as the tooltip's host
`<ebay-tooltip-content>` | Yes | The content to be displayed in the tooltip

### ebay-tooltip Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`location` | String | No | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`
`style-top` | String | No | a style property for the CSS `top` rule
`style-left` | String | No | a style property for the CSS `left` rule
`style-right` | String | No | a style property for the CSS `right` rule
`style-bottom` | String | No | a style property for the CSS `bottom` rule

### ebay-infotip Example

```marko
<ebay-infotip a11y-close-text="Dismiss infotip" aria-label="Important information">
    <ebay-infotip-heading>Important</ebay-infotip-heading>
    <ebay-infotip-content><p>This is some important info</p></ebay-infotip-content>
</ebay-infotip>
```

### ebay-infotip Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-infotip-heading>` | No | The heading to be displayed in the infotip
`<ebay-infotip-content>` | Yes | The content to be displayed in the infotip

### ebay-infotip Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`icon` | String | No | name of an `<ebay-icon>` to show for the icon button
`location` | String | No | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`
`style-top` | String | No | a style property for the CSS `top` rule
`style-left` | String | No | a style property for the CSS `left` rule
`style-right` | String | No | a style property for the CSS `right` rule
`style-bottom` | String | No | a style property for the CSS `bottom` rule
`a11y-close-text` | String | No | A11y text for close button

**IMPORTANT:** In order for the `ebay-infotip` type to meet accessibility standards you must supply an `aria-label` attribute.

### ebay-tourtip Example

```marko
<ebay-tourtip a11y-close-text="Dismiss tourtip" aria-label="Important information">
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

### ebay-tourtip Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-tourtip-host>` | Yes | The body which will be wrapped as the tourtip's host
`<ebay-tourtip-heading>` | Yes | The heading to be displayed in the tourtip
`<ebay-tourtip-content>` | Yes | The content to be displayed in the tourtip

### ebay-tourtip Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`location` | String | No | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`
`style-top` | String | No | a style property for the CSS `top` rule
`style-left` | String | No | a style property for the CSS `left` rule
`style-right` | String | No | a style property for the CSS `right` rule
`style-bottom` | String | No | a style property for the CSS `bottom` rule
`a11y-close-text` | String | No | A11y text for close button

## shared ebay-tooltip Events

Event | Data | Description
--- | --- | ---
`tooltip-expand` | | overlay has been expanded (does not fire for `<ebay-tourtip>`)
`tooltip-collapse` | | overlay has been collapsed
