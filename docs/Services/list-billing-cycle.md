# List Billing Cycle

Get recurring billing cycle options for a service.

### HTTP Request
```
GET /service/@id/cycle
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/cycle" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "current": "m",
    "cycles": {
        "m": "14.95",
        "a": "179.40",
        "b": "358.80"
    }
}
```
