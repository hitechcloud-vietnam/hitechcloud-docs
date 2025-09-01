# List Service Methods

List methods available for a specific service.

### HTTP Request
```
GET /service/@id/methods
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/methods" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "methods": [
        {
            "name": "Upgrade Request",
            "method": "POST",
            "route": "/service/@id/upgrade"
        },
        {
            "name": "Upgrade Options",
            "method": "GET",
            "route": "/service/@id/upgrade"
        }
    ]
}
```
