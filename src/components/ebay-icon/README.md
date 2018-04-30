# ebay-icon

## ebay-icon Usage

```marko
<ebay-icon type="background" name="arrow-left"/>
<ebay-icon type="inline" name="arrow-left"/>
```

The `background` icon will set the background image to an SVG image via CSS. This is the simplest usage available.
The `inline` icon will include the actual SVG markup in the HTML and then reference that. This is useful for applying customizations (like color). Behind the scenes, we determine all inline icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. Note that this requires the icons to be included statically.

## ebay-icon Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`type` | String | No | "background" via CSS (default) or "inline" via HTML
`name` | String | No | name of the icon from Skin
