# ebay-carousel

## ebay-carousel Usage

```marko
<ebay-carousel>
    <@item>Item 1</@item>
    <@item>Item 2</@item>
    <@item>Item 3</@item>
</ebay-carousel>
```

This component will bundle different resources depending on Lasso flags provided by your application.

## ebay-carousel Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-heading-text` | String | No | No | a11y heading text used to describe the carousel (continuous only)
`a11y-heading-tag` | String | No | No | use h1-h6 when there isn't a visible heading before the carousel (continuous only) (default: "h2")
`a11y-previous-text` | String | No | Yes | a11y text for previous control (default: "Previous Slide")
`a11y-next-text` | String | No | Yes | a11y text for next control (default: "Next Slide")
`index` | String | Yes | No | 0-based index position
`items-per-slide` | String | No | No | automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.
`gap` | String | No | No | override the margin between carousel items in pixels (default: "16")

### Additional Attributes for when items-per-slide is set

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-status-text` | String | No | Yes | status text (default: "Showing Slide {currentSlide} of {totalSlides}")
`a11y-status-tag` | String | No | Yes | use h1-h6 when there isn't a visible heading before the carousel (default: "span")
`autoplay` | Boolean or Number | No | No | automatically slides the carousel on an interval. If a number is supplied that is used as the interval in ms, defaults to 4000ms.

### Additional Attributes for when autoplay is set

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`a11y-play-text` | String | No | Yes | autoplay play button text (default: "Play")
`a11y-pause-text` | String | No | Yes | autoplay pause button text (default: "Pause")
`paused` | Boolean | Yes | No | pauses the autoplay carousel

## ebay-carousel Events

Event | Data | Description
--- | --- | ---
`carousel-update` | { [visibleIndexes] } | called whenever item visibility changes, including initialization
`next` | { originalEvent } | click next control
`previous` | { originalEvent } | click previous control

### Additional Events for when items-per-slide is set

Event | Data | Description
--- | --- | ---
`slide` | `{ slide }` | new slide is navigated to (by controls or API)

### Additional Events for when autoplay is set

Event | Data | Description
--- | --- | ---
`play` | `{ originalEvent }` | called when the autoplay play button is pressed
`pause` | `{ originalEvent }` | called when the autoplay pause button is pressed

### Additional Events for touch devices

Event | Data | Description
--- | --- | ---
`scroll` | `{ index }` | new index is navigated to by native scrolling

**Notes:**

* The carousel will use native scrolling if a sufficient implementation of the css scroll snapping api is available. Otherwise it will fall back to using a transform with manual user navigation via the controls.
* The `carousel` will manipulate the `tabindex` property of nested focusable elements inside `<@item>`.
* The `autoplay` carousel currently does not support native scrolling and will use transforms instead.
* The `items-per-slide` attribute can be set to a float such as `3.5` to show 3 items, and half of the 4th item. If `items-per-slide` are set as a whole number, it will automatically be set as a x.1 peek if carousel is not autoplay.
