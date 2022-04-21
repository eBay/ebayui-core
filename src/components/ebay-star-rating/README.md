<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        For full stars use (rating from 0-5):
        ebay-star-rating-{rating}
        For half stars use:
        ebay-star-rating-{rating}-5
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-star-rating-{rating} Usage

```marko
<ebay-star-rating-1/>
<ebay-star-rating value="1"/>
<ebay-star-rating-1-5/>
<ebay-star-rating value="1-5"/>
```

## ebay-star-rating-{rating} Attributes

| Name              | Type    | Stateful | Required | Description                                                                                                  |
| ----------------- | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `no-skin-classes` | Boolean | No       | No       | Used for special cases where `icon` classes from Skin should not be applied                                  |
| `a11y-text`       | String  | No       | Yes      | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed                  |
| `value`           | String  | No       | Yes      | For `<ebay-star-rating/>` only, assigns the amount of stars to be filled. Can be 2-5 for 2 and a half stars. |
