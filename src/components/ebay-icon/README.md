# ebay-icon

## ebay-icon Usage

```marko
<ebay-icon type="background" name="arrow-left"/>
<ebay-icon type="inline" name="arrow-left"/>
```

The `background` icon will set the background image to an SVG image via CSS. This is the simplest usage available.

The `inline` icon will include the actual SVG markup in the HTML and then reference that. This is useful for applying customizations (like color). Behind the scenes, we determine all inline icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by using internal marko transformers in conjunction with inspecting the Node.js `require` cache. With this methodology, all icon usage must be included statically. You must also use a string literal (not a variable) when passing the icon `name`.

```marko
<ebay-icon type="inline" name="arrow-left"/> <!-- Good -->
<ebay-icon type=data.iconType name="arrow-left"/> <!-- Good -->
<ebay-icon type="inline" name=data.iconName/> <!-- Bad -->
```

## ebay-icon Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`type` | String | No | "background" via CSS (default) or "inline" via HTML
`name` | String | No | name of the icon from Skin
