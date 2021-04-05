<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-eek
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

## ebay-eek Usage

```marko
<ebay-eek/>
```

## ebay-eek Attributes

| Name         | Type    | Stateful | Required | Description                                                                                                                                                                              |
| ------------ | ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`   | Boolean | No       | No       |
| `size`       | String  | No       | No       | Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon) |
| `icon-style` | String  | No       | No       | Either "rounded" or "square". Will change the icon to be rounded or square (square being the legacy and deprecated version)                                                              |

Note: For this component, `class`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.
