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

| Name             | Type            | Stateful | Required | Description                                                                                                                            |
| ---------------- | --------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `src`            | Array\[String\] | No       | Yes      | A list of all urls to use. It will try to load `src` in order. If any fails it will try the next one. Supports `mpd` `m3u8` and `mp4`. |
| `thumbnail`      | String          | No       | No       | The url path for the video thumbnail                                                                                                   |
| `play-view`      | String          | No       | No       | Either "inline", or "fullscreen". When player strats to play, will either play "inline" (default) or switch to "fullscreen"            |
| `cdn-url`        | String          | No       | No       | The full url to point to where to download shaka. This is only used to override the default CDN path.                                  |
| `cdn-version`    | String          | No       | No       | If using the default CDN path, you can override what version of shaka to use.                                                          |
| `a11y-load-text` | String          | No       | Yes      | The accessibility text for the loading spinner. Default is "Loading"                                                                   |
| `a11y-play-text` | String          | No       | Yes      | The accessibility text for the play button. Default is "Click to play"                                                                 |
| `error-text`     | String          | No       | Yes      | The content for error when an either the library or video cannot load. Default is "An error has occurred"                              |

## ebay-video events

| Event   | Data                | Description    |
| ------- | ------------------- | -------------- |
| `error` | `{ originalEvent }` | error occurred |
