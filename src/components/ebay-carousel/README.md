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
`items-per-slide` | String | No | automatically fit a number of items for each carousel slide and enable slide controls
`gap` | String | No | override the margin between carousel items in pixels (default: "16")

### Additional Attributes for when items-per-slide is set.
Name | Type | Stateful | Description
--- | --- | --- | ---
`accessibility-status` | String | No | status text (default: "Showing Slide {currentSlide} of {totalSlides} - Carousel")
`accessibility-current` | String | No | pagination current slide text (default: "Current Slide {currentSlide} - Carousel")
`accessibility-other` | String | No | pagination other slide text (default: "Slide {slide} - Carousel")
`autoplay` | Boolean or Number | No | automatically slides the carousel on an interval. If a number is supplied that is used as the interval in ms, defaults to 4000ms.

### Additional Attributes for when autoplay is set.
Name | Type | Stateful | Description
--- | --- | --- | ---
`accessibility-play` | String | No | autoplay play button text (default: "Play - Carousel")
`accessibility-pause` | String | No | autoplay pause button text (default: "Pause - Carousel")
`paused` | Boolean | Yes | pauses the autoplay carousel
`no-dots` | Boolean | No | hides the slide dot controls

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

### Additional Events for when autoplay is set.
Event | Data | Description
--- | --- | ---
`carousel-play` | `{ originalEvent }` | called when the autoplay play button is pressed
`carousel-pause` | `{ originalEvent }` | called when the autoplay pause button is pressed

Note: The `carousel` will manipulate the `tabindex` property of nested focusable elements inside `<ebay-carousel-item>`.
