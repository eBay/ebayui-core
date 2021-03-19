<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-mixed-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## ebay-mixed-checkbox Usage

```marko
<ebay-mixed-checkbox/>
```

## ebay-checkbox Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`disabled` | Boolean | No | No |
`checked` | String | Yes | No | Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.
`skip-mixed` | Boolean | No | No | If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.
`size` | String | No | No | Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)

Note: For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.

## ebay-checkbox Events

Event | Data | Description
--- | --- | --
`change` | `{ originalEvent, value, checked }` | selected value and checked status. If mixed is true then will return "mixed" for checked, and the same as false for value
`focus` | `{ originalEvent, value }` |
