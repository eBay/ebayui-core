<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-carousel
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Discrete or Continuous carousel component. Can show items as a slide or various widths.

## Examples and Documentation

- [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-carousel)
- [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-carousel)
- [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel/examples)

## Preserving tabindex for focusable elements

When scrolling items, focusable elements that are not visible in the carousel should not be tabbable by default. When the carousel scrolls, it then removes the tabindex to allow the item to be focusable.
In order to preserve the tabindex on an item, pass `data-carousel-tabindex="-1"` attribute to a given focusable element in order to default to that tabindex instead of removing the tabindex when the item is visible.

## Reduced motion

The carousel does not autoplay by respecting the `prefers-reduced-motion` media query. Toggle your reduced motion settings to view autoplay example with the default behavior and reduced motion behavior.
