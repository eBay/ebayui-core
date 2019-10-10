# ebay-section-title

## ebay-section-title Usage

```marko
<ebay-section-title>
    <ebay-section-title-title>Today’s Deals – All With Free Shipping</ebay-section-title-title>
    <ebay-section-title-subtitle>Plus, guaranteed best prices.</ebay-section-title-subtitle>
    <ebay-section-title-cta href="https://www.ebay.com">See All</ebay-section-title-cta>
</ebay-section-title>
```

## ebay-section-title Attributes

None

## ebay-section-title Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-section-title-title>` | Yes | The main title content to be displayed
`<ebay-section-title-subtitle>` | No | The subtitle content to be displayed
`<ebay-section-title-cta>` | No | Call to action link with optional content to be displayed
`<ebay-section-title-info>` | No | Placeholder for `<ebay-infotip>` component
`<ebay-section-title-overflow>` | No | Placeholder for `<ebay-menu-button>` component

## ebay-section-title-title

### ebay-section-title-title Usage

```marko
<ebay-section-title-title>Today’s Deals – All With Free Shipping</ebay-section-title-title>
```

### ebay-section-title-title Attributes

None

## ebay-section-title-subtitle

### ebay-section-title-subtitle Usage

```marko
 <ebay-section-title-subtitle>Plus, guaranteed best prices.</ebay-section-title-subtitle>
```

### ebay-section-title-subtitle Attributes

`size` | String | No | No | "small", "large", or "giant" (default: medium)

## ebay-section-title-cta

### ebay-section-title-cta Usage

```marko
<ebay-section-title-cta href="https://www.ebay.com">See All</ebay-section-title-cta>
```

```marko
<ebay-section-title-cta href="https://www.ebay.com"/>
```

### ebay-section-title-cta Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`href` | String | No | Yes | link target

## ebay-section-title-info

### ebay-section-title-info Usage

```marko
<ebay-section-title-info>
    <ebay-infotip a11y-close-text="Dismiss infotip" aria-label="Important information" icon="information" pointer="top-left">
        <ebay-infotip-heading>Important</ebay-infotip-heading>
        <ebay-infotip-content><p>This is some important info</p></ebay-infotip-content>
    </ebay-infotip>
</ebay-section-title-info>
```

### ebay-section-title-info Attributes

None

## ebay-section-title-overflow

### ebay-section-title-overflow Usage

```marko
<ebay-section-title-overflow>
    <ebay-menu-button variant="overflow" a11y-text="eBay Menu">
        <ebay-menu-button-item>item 1</ebay-menu-button-item>
        <ebay-menu-button-item>item 2</ebay-menu-button-item>
        <ebay-menu-button-item>item 3</ebay-menu-button-item>
    </ebay-menu-button>
</ebay-section-title-overflow>
```

### ebay-section-title-overflow Attributes

None
