# ebay-carousel

## ebay-carousel Usage

```marko
<ebay-carousel>
    <ebay-carousel-item>Item 1</ebay-carousel-item>
    <ebay-carousel-item>Item 2</ebay-carousel-item>
    <ebay-carousel-item>Item 3</ebay-carousel-item>
</ebay-carousel>
```

This component will bundle different resources depending on Lasso flags provided by your application.
Use `touch` for touch devices, and `no-touch` for non-touch devices. Without flags, `no-touch` is assumed.
[//]: # (TODO: `touch` should ideally be default, but currently the js behavior doesn't execute with native scrolling)

## ebay-carousel Attributes
Name | Type | Stateful | Description
--- | --- | --- | ---
`accessibility-prev` | String | No | aria-label for previous control (default: "Previous Slide")
`accessibility-next` | String | No | aria-label for next control (default: "Next Slide")
`index` | String | Yes | 0-based index position
`items-per-slide` | String | No | automatically fit a number of items for each carousel slide and enable slide controls.
`gap` | String | No | override the margin between carousel items (default: "16px")

### Additional Attributes for when items-per-slide is set.
Name | Type | Stateful | Description
--- | --- | --- | ---
`accessibility-status` | String | No | status text (default: "Showing Slide {currentSlide} of {totalSlides} - Carousel")
`accessibility-current` | String | No | pagination current slide text (default: "Current Slide {currentSlide} - Carousel")
`accessibility-other` | String | No | pagination other slide text (default: "Slide {slide} - Carousel")

## ebay-carousel Events
Event | Data | Description
--- | --- | ---
`carousel-update` | { [visibleIndexes] } | called whenever item visibility changes, including initialization
`carousel-next` | { originalEvent } | click next control
`carousel-prev` | { originalEvent } | click previous control

### Additional Events for when items-per-slide is set.
Event | Data | Description
--- | --- | ---
`carousel-slide` | `{ slide }` | new slide is navigated to (by controls, dots, or API)

Note: The `carousel` will manipulate the `tabindex` property of nested focusable elements inside `<ebay-carousel-item>`.
