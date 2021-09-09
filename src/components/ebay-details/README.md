<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-details
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

```marko
<ebay-details open text="Show me the details">
    The details
</ebay-details>
```

## Attributes

| Name        | Type    | Stateful | Required | Description                                    |
| ----------- | ------- | -------- | -------- | ---------------------------------------------- |
| `text`      | String  | No       | No       | The text to display in the details toggle      |
| `alignment` | String  | No       | No       | Can be "regular" / "center". Default "regular" |
| `size`      | String  | No       | No       | Can be "regular" / "small". Default "regular"  |
| `open`      | Boolean | No       | No       | Whether details is open.                       |
| `as`        | String  | No       | No       | The root element. Defaults to `<p>`            |

## Events

| Event    | Data                      | Description                                                                                            |
| -------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `toggle` | `{ originalEvent, open }` | details toggled. Open is boolean if true then details was opened, otherwise false means details closed |
| `click`  | `{ originalEvent }`       | details clicked                                                                                        |
