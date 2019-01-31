# ebay-icon

## ebay-icon Usage

```marko
<ebay-icon type="inline" name="arrow-left"/> (preferred)
<ebay-icon type="background" name="arrow-left"/>
```

>**Note:** If using only `inline` (foreground) SVG icons, you can avoid CSS bundle bloat by adding the `ebayui-no-bg-icons` lasso flag. This will significantly reduce your CSS footprint when working with `ebay-icon`. In v2 we will remove this flag and default to only supply the CSS for the foreground icons, with a flag for including background icon bas64 strings if needed. **Example:** `<lasso-page flags="ebayui-no-bg-icons">`.

The `inline` (foreground) icon will include the actual SVG markup in the HTML and then reference the chosen icon. This is useful for applying customizations (like color). Behind the scenes, we determine all foreground icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by using internal marko transformers in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper. You must also use a string literal (not a variable) when passing the icon `name`. The static handling is only required for at least _one time_ for each icon included on the page, so that the stamper knows to stamp that markup. Each additional use of the icon in the page can then be done dynamically.

The `background` icon will set the background image to an SVG image via CSS. This is the simplest usage available, but the tradeoff is background icons will bloat your CSS bundle with _all_ the base64 strings for _all_ available icons. Therefore we recommend using `inline` (foreground) icons whenever possible.

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
`type` | String | No | "background" via CSS (default) or "inline" via HTML
`name` | String | No | name of the icon from Skin
`no-skin-classes` | Boolean | No | Used for special cases where `icon` classes from Skin should not be applied

### Additional Attributes for type="inline"
Name | Type | Stateful | Description
--- | --- | --- | ---
`a11y-text` | String | No | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed
