# Get DNS Details

Returns details of the DNS zone.

### HTTP Request
```
GET /service/@service_id/dns/@zone_id
```

### Query Parameters
| Parameter    | Type   | Description  |
|--------------|--------|--------------|
| service_id   | int    | Service ID   |
| zone_id      | int    | Zone ID      |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@service_id/dns/@zone_id" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "service_id": 10,
    "name": "qwerty.com",
    "records": [
      {
        "id":"10",
        "name":"qwerty",
        "ttl":1800,
        "priority":0,
        "content":"127.0.0.1",
        "type":"A"
      },
      {
        "id":"11",
        "name":"qwerty",
        "ttl":1800,
        "priority":0,
        "content":"ns1.qwerty.com",
        "type":"NS"
      }
    ]
}
```
