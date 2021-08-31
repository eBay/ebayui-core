<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-infotip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-infotip Example

```marko
<ebay-infotip a11y-close-text="Dismiss infotip" aria-label="Important information">
    <@heading>Important</@heading>
    <@content><p>This is some important info</p></@content>
</ebay-infotip>
```

## ebay-infotip Sub-tags

| Tag          | Required | Description                                         |
| ------------ | -------- | --------------------------------------------------- |
| `<@heading>` | No       | The heading to be displayed in the infotip          |
| `<@content>` | Yes      | The content to be displayed in the infotip          |
| `@icon`      | No       | An `<ebay-{name}-icon>` to show for the icon button |

## ebay-infotip Attributes

| Name                     | Type    | Stateful | Required | Description                                                                                                                                                  |
| ------------------------ | ------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variant`                | String  | No       | No       | Either modal or default. If modal will show the mobile version of infotip                                                                                    |
| `pointer`                | String  | No       | No       | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top` |
| `disabled`               | Boolean | Yes      | No       | adds a `disabled` attribute to the button                                                                                                                    |
| `style-top`              | String  | No       | No       | a style property for the CSS `top` rule                                                                                                                      |
| `style-left`             | String  | No       | No       | a style property for the CSS `left` rule                                                                                                                     |
| `style-right`            | String  | No       | No       | a style property for the CSS `right` rule                                                                                                                    |
| `style-bottom`           | String  | No       | No       | a style property for the CSS `bottom` rule                                                                                                                   |
| `a11y-close-button-text` | String  | No       | Yes      | A11y text for close button                                                                                                                                   |
| `aria-label`             | String  | No       | Yes      | A descriptive label of what the infotip button represents (e.g. "Important information")                                                                     |

**IMPORTANT:** In order for the `ebay-infotip` type to meet accessibility standards you must supply an `aria-label` attribute.

## ebay-infotip Events

| Event      | Data | Description                |
| ---------- | ---- | -------------------------- |
| `expand`   |      | overlay has been expanded  |
| `collapse` |      | overlay has been collapsed |
