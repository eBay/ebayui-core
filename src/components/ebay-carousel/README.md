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

Note: The `touch` carousel with type="continuous" will use native scrolling. This behavior is used instead of our controlled movement, so some functionality is limited. In this case, the carousel will not respond to `index` changes, and will not emit events.

## ebay-carousel Attributes
Name | Type | Stateful | Description
--- | --- | --- | ---
`type` | String | No | "continuous" (default) or "discrete"
`accessibility-prev` | String | No | aria-label for previous control (default: "Previous Slide")
`accessibility-next` | String | No | aria-label for next control (default: "Next Slide")

### Additional Attributes for type="continuous"
Name | Type | Stateful | Description
--- | --- | --- | ---
`index` | String | Yes | 0-based index position

### Additional Attributes for type="discrete"
Name | Type | Stateful | Description
--- | --- | --- | ---
`slide` | String | Yes | 1-based slide position
`items-per-slide` | String | No | 1 - 5 -- number of items for a single carousel slide (default: 1)
`accessibility-status` | String | No | status text (default: "Showing Slide {currentSlide} of {totalSlides} - Carousel")
`accessibility-current` | String | No | pagination current slide text (default: "Current Slide {currentSlide} - Carousel")
`accessibility-other` | String | No | pagination other slide text (default: "Slide {slide} - Carousel")

## ebay-carousel Events
Event | Data | Description
--- | --- | ---
`carousel-update` | { [visibleIndexes] } | called whenever item visibility changes, including initialization
`carousel-move` | | start of carousel content movement animation
`carousel-next` | { originalEvent } | click next control
`carousel-prev` | { originalEvent } | click previous control

### Additional Events for type="discrete"
Event | Data | Description
--- | --- | ---
`carousel-slide` | `{ slide }` | new slide is navigated to (by controls, dots, or API)

Note: The `carousel` will manipulate the `tabindex` property of nested focusable elements inside `<ebay-carousel-item>`.
