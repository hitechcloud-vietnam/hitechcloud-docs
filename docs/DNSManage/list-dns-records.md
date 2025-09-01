# List DNS Records

List DNS records.

### HTTP Request
```
GET /domain/@id/dns
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/dns" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "records": [
        {
            "id": 1,
            "name": "test",
            "ttl": 0,
            "priority": 0,
            "type": "A",
            "content": "100.100.10.1"
        }
    ]
}
```
