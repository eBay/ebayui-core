# ebay-carousel

## Usage

```marko
<ebay-carousel>
    <div>item 1</div>
    <div>item 2</div>
</ebay-carousel>
```

## Attributes
Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | custom class
`index` | String | Yes | zero-based starting position
`type` | String | No | "continuous" (default) or "discrete"
`aria-label-prev` | String | No | aria-label for previous control
`aria-label-next` | String | No | aria-label for next control

## Events
Event | Description
--- | ---
`carousel-next` | click next control
`carousel-prev` | click previous control
`carousel-translate` | translate carousel content
