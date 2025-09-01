# DNS Records Types

List supported DNS record types.

### HTTP Request
```
GET /domain/@id/dns/types
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/dns/types" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "types": [
        "A",
        "CNAME",
        "URL",
        "FRAME",
        "MX",
        "MXE",
        "TXT"
    ]
}
```
