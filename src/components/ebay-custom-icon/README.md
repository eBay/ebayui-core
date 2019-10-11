# ebay-custom-icon

## ebay-custom-icon Usage

```marko
<ebay-custom-icon type="inline" name="arrow-left" path="./my-symbols"/> (preferred)
```

>**Note:** If using only `inline` (foreground) SVG icons, you can avoid CSS bundle bloat by adding the `ebayui-no-bg-icons` lasso flag. This will significantly reduce your CSS footprint when working with `ebay-custom-icon`. In v2 we will remove this flag and default to only supply the CSS for the foreground icons, with a flag for including background icon bas64 strings if needed. **Example:** `<lasso-page flags="ebayui-no-bg-icons">`.

The `inline` (foreground) icon will include the actual SVG markup in the HTML and then reference the chosen icon. This is useful for applying customizations (like color). Behind the scenes, we determine all foreground icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by using internal marko transformers in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper. You must also use a string literal (not a variable) when passing the icon `name`. The static handling is only required for at least _one time_ for each icon included on the page, so that the stamper knows to stamp that markup. Each additional use of the icon in the page can then be done dynamically.

## ebay-custom-icon Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`type` | String | No | No | "inline" via HTML
`name` | String | No | Yes | name of the icon from Skin
`path` | String | No | Yes | path to symbols
`no-skin-classes` | Boolean | No | No | Used for special cases where `icon` classes from Skin should not be applied

### Additional Attributes for type="inline"

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-text` | String | No | Yes | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed
