<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

```marko
<ebay-signal status="trustworthy">
    Trustworthy
</ebay-signal>
```

## Description

Signals are data-backed recommendations to help customers make more informed decisions.
There are four signal statuses, each corresponding to a specific color: trustworthy, recent, time-sensitive & neutral.

## Attributes

| Name     | Type | Stateful | Required | Description                        |
| -------- | ---- | -------- | -------- | ---------------------------------- |
| `status` | Enum | No       | Yes      | Status of signal; determines color |
