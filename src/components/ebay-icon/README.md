# ebay-icon

## ebay-icon Usage

```marko
<ebay-icon type="background" name="arrow-left"/>
<ebay-icon type="inline" name="arrow-left"/>
```

The `background` icon will set the background image to an SVG image via CSS. This is the simplest usage available.

The `inline` icon will include the actual SVG markup in the HTML and then reference that. This is useful for applying customizations (like color). Behind the scenes, we determine all inline icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by using internal marko transformers in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper. You must also use a string literal (not a variable) when passing the icon `name`. Note that the static handling is only required for at least one time for each icon included on the page, so that the stamper knows to stamp that markup. Other usage can be done dynamically.

```marko
<!-- Good -->
<ebay-icon type="inline" name="arrow-left"/>
<ebay-icon type="inline" name="arrow-left"/>

<!--Ok -->
<var arrowRight="arrow-right"/>
<ebay-icon type="inline" name="arrow-right"/>
<ebay-icon type="inline" name=arrowRight/> <!-- arrow-right already stamped from static usage above, so this is ok. -->

<!-- Bad -->
<var arrowMove="arrow-move"/>
<ebay-icon type="inline" name="arrow-right"/>
<ebay-icon type="inline" name=arrowMove/> <!-- Was never statically used, so won't get stamped. -->
```

## ebay-icon Attributes
Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`type` | String | No | "background" via CSS (default) or "inline" via HTML
`name` | String | No | name of the icon from Skin
`no-skin-classes` | Boolean | No | Used for special cases where `icon` classes from Skin should not be applied

### Additional Attributes for type="inline"
Name | Type | Stateful | Description
--- | --- | --- | ---
`accessibility-text` | String | No | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed
