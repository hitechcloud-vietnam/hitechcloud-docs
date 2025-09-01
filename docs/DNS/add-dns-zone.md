# Add DNS Zone

Creates a new DNS zone.

### HTTP Request
```
POST /service/@service_id/dns
```

### Query Parameters
| Parameter    | Type   | Description  |
|--------------|--------|--------------|
| service_id   | int    | Service ID   |
| name         | string | Zone name    |

```bash
POST_DATA="{
    \"service_id\": \"service_idValue\",
    \"name\": \"testzone.com\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@service_id/dns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "info": [
        "Domain zone testzone.com was created successfully."
    ]
}
```
