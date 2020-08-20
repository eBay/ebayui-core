# ebay-section-title

## ebay-section-title Usage

```marko
<ebay-section-title>Today’s Deals – All With Free Shipping</ebay-section-title>
```

```marko
<ebay-section-title href="https://www.ebay.com" cta-text="See All">
    <@title>Today’s Deals – All With Free Shipping</@title>
    <@subtitle>Plus, guaranteed best prices.</@subtitle>
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
`<@title>` | No | The main title content to be displayed. Title tag is required when using other sub-tags.
`<@subtitle>` | No | The subtitle content to be displayed
`<@info>` | No | Placeholder for `<ebay-infotip>` component
`<@overflow>` | No | Placeholder for `<ebay-menu-button>` component

## @title

### @title Usage

```marko
<@title>Today’s Deals – All With Free Shipping</@title>
```

### @title Attributes

None

## @subtitle

### @subtitle Usage

```marko
 <@subtitle>Plus, guaranteed best prices.</@subtitle>
```

### @subtitle Attributes

None

## @info

### @info Usage

```marko
<@info>
    <ebay-infotip a11y-close-text="Dismiss infotip" aria-label="Important information" pointer="top-left">
        <@icon><ebay-icon-information/></@icon>
        <@heading>Important</@heading>
        <@content><p>This is some important info</p></@content>
    </ebay-infotip>
</@info>
```

### @info Attributes

None

## @overflow

### @overflow Usage

```marko
<@overflow>
    <ebay-menu-button variant="overflow" a11y-text="eBay Menu">
        <@item>item 1</@item>
        <@item>item 2</@item>
        <@item>item 3</@item>
    </ebay-menu-button>
</@overflow>
```

### @overflow Attributes

None
