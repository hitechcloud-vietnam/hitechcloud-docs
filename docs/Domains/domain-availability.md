# Domain Availability

Check if a domain is available for registration.

### HTTP Request
```
POST /domain/lookup
```

### Query Parameters
| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| name      | string | Domain name       |

```bash
POST_DATA="{
    \"name\": \"example.com\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/lookup" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "available": false,
    "name": "example.com",
    "premium": false,
    "periods": [
        {
            "id": "6",
            "period": "1",
            "register": "10.00",
            "transfer": "0.00",
            "renew": "15.00",
            "redemption": "40.00"
        }
    ]
}
```
