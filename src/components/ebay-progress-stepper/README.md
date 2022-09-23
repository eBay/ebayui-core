<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-stepper
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.1.1
    </span>
</h1>

## ebay-progress-stepper Example

```marko
<ebay-progress-stepper>
    <@step>
        <@title>Started</@title>
        July 3rd
    </@step>
    <@step>
        <@title>Shipped</@title>
        July 4th
    </@step>
    <@step current>
        <@title>Transit</@title>
        July 5th
    </@step>
    <@step>
        <@title>Delivered</@title>
        July 6th
    </@step>
</ebay-progress-stepper>
```

## Links

-   (Storybook)[https://ebay.github.io/ebayui-core/?path=/story/ebay-progress-stepper]
-   (Storybook Docs)[https://ebay.github.io/ebayui-core/?path=/docs/ebay-progress-stepper]
-   (Code Examples)[https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-stepper/examples]
