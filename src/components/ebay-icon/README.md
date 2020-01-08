# ebay-icon

## ebay-icon Usage

```marko
<ebay-icon name="arrow-left"/>
```

The icon will include the actual SVG markup in the HTML and then reference the chosen icon. This is useful for applying customizations (like color). Behind the scenes, we determine all foreground icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by using internal marko transformers in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper. You must also use a string literal (not a variable) when passing the icon `name`. The static handling is only required for at least _one time_ for each icon included on the page, so that the stamper knows to stamp that markup. Each additional use of the icon in the page can then be done dynamically.

```marko
<!-- Good -->
<ebay-icon name="arrow-left"/>

<!--Ok -->
<var arrowRight="arrow-right"/>
<ebay-icon name="arrow-right"/>
<ebay-icon name=arrowRight/> <!-- arrow-right already stamped from static usage above, so this is ok. -->

<!-- Bad -->
<var arrowMove="arrow-move"/>
<ebay-icon name="arrow-right"/>
<ebay-icon name=arrowMove/> <!-- Was never statically used, so won't get stamped. -->
```

## ebay-icon Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`name` | String | No | Yes | name of the icon from Skin
`no-skin-classes` | Boolean | No | No | Used for special cases where `icon` classes from Skin should not be applied
`a11y-text` | String | No | Yes | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed
