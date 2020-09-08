# ebay-lightbox-dialog

```marko
<ebay-lightbox-dialog open a11y-close-text="Close Dialog">
  <@header>Hello World</@header>
  Body content
</ebay-lightbox-dialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`focus` | String | No | No | An id for an element which will receive focus when the dialog opens (defaults to close button).
`a11y-close-text` | String | No | Yes | A11y text for close button and mask.

## Events

Event | Data | Description
--- | --- | ---
`open` |  | dialog opened
`close` |  | dialog closed

## <@header>

Will render a header content for lightbox. Will always render the header element even if this is not present

## <@footer>

Will render the footer content for lightbox. If not present then will not have any footer.
