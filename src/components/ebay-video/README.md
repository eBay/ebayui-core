<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-video
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-video (*ALPHA*, some APIs might change)

Video player. Supports either MPD or M3U8 playlist formats.
Natively uses dash.js player under the hood. Loads it async after the video player is loaded on the page.
For resizing, `ebay-video` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## ebay-video Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`src` | String | No | Yes | The url path for the playlist MPD or M3U8 to use. If format is set to auto, will detect format based on file extension
`format` | String | No | No | Either `auto`, `mpd` or `m3u8`. Default is auto. The format to use. If auto, will try to detect based on file name. If mpd will trigger downloading dashjs from given CDN.
`cdn-url` | String | No | No | The full url to point to where to download dashjs. This is only used to override the default CDN path.
`cdn-version` | String | No | No | If using the default CDN path, you can override what version of dashjs to use.

## ebay-video attribute-tags
Tag | Required | Description
--- | --- | ---
`<@retry>` | No | The content for retry. Default is "Click to retry" and `<ebay-retry-icon/>`
`<@loading>` | No | The content for loading, default shows `<ebay-progress-spinner/>`
