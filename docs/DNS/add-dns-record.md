# Add DNS Record

Creates a new record in the DNS zone.

### HTTP Request
```
POST /service/@service_id/dns/@zone_id/records
```

### Query Parameters
| Parameter    | Type   | Description  |
|--------------|--------|--------------|
| service_id   | int    | Service ID   |
| zone_id      | int    | Zone ID      |
| name         | string | Record name  |
| ttl          | int    | Record TTL   |
| priority     | int    | Record priority |
| type         | string | Record type  |
| content      | string | Record content |

```bash
POST_DATA="{
    \"service_id\": \"service_idValue\",
    \"zone_id\": \"zone_idValue\",
    \"name\": \"example.com\",
    \"ttl\": 3600,
    \"priority\": 10,
    \"type\": \"A\",
    \"content\": \"192.168.1.2\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@service_id/dns/@zone_id/records" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "record": {
      "name": "_sip._tcp.example.com",
      "type": "SRV",
      "ttl": "3600",
      "priority": "10",
      "content": [
        10,
        5060,
        "vc01.example.com"
      ]
    },
    "info": [
        "dnsnewrecordadded",
        "SRV"
    ]
}
```
