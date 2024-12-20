<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-{name}-icon
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.3.0
    </span>
</h1>

## ebay-{name}-icon Usage

```marko
<ebay-arrow-left-icon/>
```

The icon will include the actual SVG markup in the HTML and then reference the chosen icon. This is useful for applying customizations (like color). Behind the scenes, we determine all foreground icons that could be used at compile-time, and then include each icon stamp a single time at the top of the `<body>`. This is done by including the markup in mark tags in conjunction with inspecting the Node.js `require` cache. With this methodology, icons must be included statically in order to work with the stamper.
video

## Examples and Documentation

- [Storybook](https://ebay.github.io/ebayui-core/?path=/story/graphics-icons-ebay-icon)
- [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/graphics-icons-ebay-icon)
- [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon/examples)
