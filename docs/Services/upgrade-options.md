# Upgrade Options

List upgrade options for a specific service.

### HTTP Request
```
GET /service/@id/upgrade
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "resources": [
        {
            "id": 1557,
            "name": "Bandwidth",
            "type": "select",
            "items": [
                {
                    "id": "9953",
                    "name": "100 GB",
                    "price": 1,
                    "setup_price": 0,
                    "selected": true
                }
            ]
        }
    ]
}
```
