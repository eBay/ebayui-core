# ebay-success-message

## ebay-success-message Usage

```marko
<ebay-success-message full title-heading-tag="h3" title="Your first order has been placed!" icon-a11y-text="Success">
    <ebay-success-message-content>You'll get a confirmation email soon. The rest of your items are now ready to checkout.</ebay-success-message-content>
    <button class="success-message__button">Continue to Order 2</button>
</ebay-success-message>
```

## ebay-success-message Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`full` | Boolean | No | Display the message vertically centered in the full height of the container. Button floated at the bottom.
`icon-a11y-text` | String | No | Accessibility text for the icon
`title` | String | No | The message's bold title text
`title-heading-tag` | String | No | Used to specify the heading tag according to the message's placement (default: `"h2"`)
