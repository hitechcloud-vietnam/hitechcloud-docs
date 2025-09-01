# List DNS for Service

Returns a list of DNS zones under the service.

### HTTP Request
```
GET /service/@service_id/dns
```

### Query Parameters
| Parameter    | Type   | Description  |
|--------------|--------|--------------|
| service_id   | int    | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@service_id/dns" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "error": [
        "invalid method"
    ]
}
```
