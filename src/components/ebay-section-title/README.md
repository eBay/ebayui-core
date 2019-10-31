# ebay-section-title

## ebay-section-title Usage

```marko
<ebay-section-title>Today’s Deals – All With Free Shipping</ebay-section-title>
```

```marko
<ebay-section-title href="https://www.ebay.com" cta-text="See All">
    <ebay-section-title-title>Today’s Deals – All With Free Shipping</ebay-section-title-title>
    <ebay-section-title-subtitle>Plus, guaranteed best prices.</ebay-section-title-subtitle>
</ebay-section-title>
```

## ebay-section-title Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`cta-text` | String | No | No | URL text. Optional content to be displayed next to title. `href` is required when using this attribute.
`href` | String | No | No | URL. Title content and optional CTA content will link to this. Populating `cta-text` is optional.
`size` | String | No | No | "small", "large", or "giant" (default: medium)

## ebay-section-title Events

None.

**Note:** If you need to handle events associated with `ebay-infotip` or `ebay-menu-button`, you can place the listeners directly on `ebay-infotip` or `ebay-menu-button` tags.

## ebay-section-title Sub-tags

Tag | Required | Description
--- | --- | ---
`<ebay-section-title-title>` | No | The main title content to be displayed. Title tag is required when using other sub-tags.
`<ebay-section-title-subtitle>` | No | The subtitle content to be displayed
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

None

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
