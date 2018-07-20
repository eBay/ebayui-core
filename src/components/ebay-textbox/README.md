# ebay-textbox

## ebay-textbox Usage


Default input textbox:

```marko
<ebay-textbox />
```

When input textbox is disabled:

```marko
<ebay-textbox disabled/>
```

When input textbox has default placeholder:

```marko
<ebay-textbox placeholder="enter value" />
```

When input textbox fills up the containing block or fluid:

```marko
<ebay-textbox fluid />
```

Default multi-line textbox:

```marko
<ebay-textbox multiline />
```


## ebay-textbox Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`class` | String | No | define custom class
`placeholder` | String | No |
`fluid` | Boolean | No | defaults to false
`disabled` | Boolean | Yes | defaults to false
`multiline` | Boolean | No | renders a multi-line texbox if true
`invalid` | Boolean | No | indicates a field-level error with red border
