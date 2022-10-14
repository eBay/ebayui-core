<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-page-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The `<ebay-page-notice>` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a `<p>` tag.

## ebay-page-notice Usage

```marko
<ebay-page-notice a11y-text="Attention" status="attention">
    <p>Couldn't load all the items, please try again later.</p>
</ebay-page-notice>
```

```marko
<ebay-page-notice a11y-text="Attention" status="attention" type="page">
    <@title>An Error</@title>
    <p>Couldn't load all the items, please try again later.</p>
    <@footer><ebay-fake-link>Try again</ebay-fake-link></@footer>
</ebay-page-notice>
```

```marko
<ebay-page-notice a11y-text="Attention" status="attention" type="page">
    <@title>An Error</@title>
    <p>Couldn't load all the items, please try again later.</p>
    <@footer><ebay-fake-link>Try again</ebay-fake-link></@footer>
    <@cta href="https://ebay.com">Opt In</@cta>
</ebay-page-notice>
```

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-page-notice)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-page-notice)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-page-notice/examples)
