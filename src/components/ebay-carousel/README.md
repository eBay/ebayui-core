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

## ebay-carousel Attributes
Name | Type | Stateful | Description
--- | --- | --- | ---
`a11y-previous-text` | String | No | a11y text for previous control (default: "Previous Slide")
`a11y-next-text` | String | No | a11y text for next control (default: "Next Slide")
`index` | String | Yes | 0-based index position
`items-per-slide` | String | No | automatically fit a number of items for each carousel slide and enable slide controls
`gap` | String | No | override the margin between carousel items in pixels (default: "16")

### Additional Attributes for when items-per-slide is set.
Name | Type | Stateful | Description
--- | --- | --- | ---
`a11y-status-text` | String | No | status text (default: "Showing Slide {currentSlide} of {totalSlides} - Carousel")
`a11y-status-tag` | String | No | use h1-h6 when there isn't a visible heading before the carousel (default: "span")
`a11y-current-text` | String | No | pagination current slide text (default: "Current Slide {currentSlide} - Carousel")
`a11y-other-text` | String | No | pagination other slide text (default: "Slide {slide} - Carousel")
`autoplay` | Boolean or Number | No | automatically slides the carousel on an interval. If a number is supplied that is used as the interval in ms, defaults to 4000ms.

### Additional Attributes for when autoplay is set.
Name | Type | Stateful | Description
--- | --- | --- | ---
`a11y-play-text` | String | No | autoplay play button text (default: "Play - Carousel")
`a11y-pause-text` | String | No | autoplay pause button text (default: "Pause - Carousel")
`paused` | Boolean | Yes | pauses the autoplay carousel
`no-dots` | Boolean | No | hides the slide dot controls

## ebay-carousel Events
Event | Data | Description
--- | --- | ---
`carousel-update` | { [visibleIndexes] } | called whenever item visibility changes, including initialization
`carousel-next` | { originalEvent } | click next control
`carousel-previous` | { originalEvent } | click previous control

### Additional Events for when items-per-slide is set.
Event | Data | Description
--- | --- | ---
`carousel-slide` | `{ slide }` | new slide is navigated to (by controls, dots, or API)

### Additional Events for when autoplay is set.
Event | Data | Description
--- | --- | ---
`carousel-play` | `{ originalEvent }` | called when the autoplay play button is pressed
`carousel-pause` | `{ originalEvent }` | called when the autoplay pause button is pressed

### Additional Events for touch devices.
Event | Data | Description
--- | --- | ---
`carousel-scroll` | `{ index }` | new index is navigated to by native scrolling

Notes:

* The carousel will use native scrolling if a sufficient implementation of the css scroll snapping api is available. Otherwise it will fall back to using a transform with manual user navigation via the controls.
* The `carousel` will manipulate the `tabindex` property of nested focusable elements inside `<ebay-carousel-item>`.
* The `autoplay` carousel currently does not support native scrolling and will use transforms instead.
* The `items-per-slide` attribute can be set to a float such as `3.5` to show 3 items, and half of the 4th item. This also automatically enables the `no-dots` attribute.
