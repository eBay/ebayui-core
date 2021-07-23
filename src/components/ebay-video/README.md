<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-video
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-video (_ALPHA_, some APIs might change)

Video player. Supports either MPD or M3U8 playlist formats.
Natively uses dash.js player under the hood. Loads it async after the video player is loaded on the page.
For resizing, `ebay-video` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## ebay-video Attributes

| Name               | Type    | Stateful | Required | Description                                                                                                                 |
| ------------------ | ------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `thumbnail`        | String  | No       | No       | The url path for the video thumbnail                                                                                        |
| `action`           | String  | Yes      | No       | Either "play" or "pause". Will programatically perform the given action                                                     |
| `volume`           | Number  | Yes      | No       | Decimal between 0 and 1. Will set the volume on the player programatically (default is 100%)                                |
| `muted`            | Boolean | Yes      | No       | True/False to mute or unmute video. Default is false                                                                        |
| `play-view`        | String  | No       | No       | Either "inline", or "fullscreen". When player strats to play, will either play "inline" (default) or switch to "fullscreen" |
| `cdn-url`          | String  | No       | No       | The full url to point to where to download shaka. This is only used to override the default CDN path.                       |
| `css-url`          | String  | No       | No       | The full url to point to where to download shaka css. This is only used to override the default CDN path.                   |
| `cdn-version`      | String  | No       | No       | If using the default CDN path, you can override what version of shaka to use.                                               |
| `a11y-load-text`   | String  | No       | Yes      | The accessibility text for the loading spinner. Default is "Loading"                                                        |
| `a11y-play-text`   | String  | No       | Yes      | The accessibility text for the play button. Default is "Click to play"                                                      |
| `error-text`       | String  | No       | Yes      | The content for error when an either the library or video cannot load. Default is "An error has occurred"                   |
| `a11y-report-text` | String  | No       | Yes      | The text for screen readers for the report menu popup. Default is "Report"                                                  |
| `report-text`      | String  | No       | Yes      | The text for report button. Default is "Report"                                                                             |
| `volume-slider`    | Boolean | Yes      | No       | True/False to keep or remove volume slider. Default is False                                                                |

## @source Tag (required)

The video source, similarly to how html source for video works. Multiple sources are supported, and at least 1 `<@source>` tag is required
If multiple sources are supplied, it will go in the order they are supplied and try to load each one.

### @source Usage

```marko
<ebay-video>
    <@source src="path-to-file.mpd" type="dash"/>
    <@source src="path-to-file.m3u8" type="hls"/>
    <@source src="path-to-file.mp4" type="video/mp4"/>
</ebay-video>
```

### @source Attributes

| Name   | Type   | Stateful | Required | Description                                                                                                                                                                                                      |
| ------ | ------ | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`  | String | No       | Yes      | The source url to load for this                                                                                                                                                                                  |
| `type` | String | Yes      | No       | The video type. Either `dash`, `hls`, or the browser supported mime-type like `video/mp4`. Only `dash` or `hls` will be loaded in the javascript player. All others will load in the native browser vide player. |

## ebay-video events

| Event           | Data                               | Description                                                                          |
| --------------- | ---------------------------------- | ------------------------------------------------------------------------------------ |
| `load-error`    | `{ originalEvent }`                | error occurred                                                                       |
| `play`          | `{ originalEvent, player }`        | play start                                                                           |
| `volume-change` | `{ originalEvent, volume, muted }` | volume is changed. Will return the values of the volume decimal and muted true/false |
| `report`        | `{ }`                              | report button clicked                                                                |
