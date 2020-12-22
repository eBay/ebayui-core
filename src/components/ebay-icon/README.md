# ebay-{name}-icon v1.3.0

## ebay-{name}-icon Usage

```marko
<ebay-arrow-left-icon/>
```

The icon will include the actual SVG markup in the HTML and then reference the chosen icon. This is useful for applying customizations (like color). Behind the scenes, we determine all foreground icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by including the markup in mark tags in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper.

```marko
<ebay-arrow-left-icon/>
```

As import
```marko
import arrowUp from '<ebay-arrow-up>'
import arrowDown from '<ebay-arrow-down>'

<dropdown-component icon=(isOpen ? arrowUp : arrowDown)>
```

## ebay-{name}-icon Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`no-skin-classes` | Boolean | No | No | Used for special cases where `icon` classes from Skin should not be applied
`a11y-text` | String | No | Yes | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed
