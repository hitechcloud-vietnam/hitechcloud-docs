# List DNS

Returns a list of all DNS.

### HTTP Request
```
GET /dns
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/dns" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "service_ids": [
        "10",
        "20"
    ],
    "zones": [
        {
            "domain_id": "60",
            "name": "qwerty.com",
            "service_id": "10"
        },
        {
            "domain_id": "61",
            "name": "bgg12ooble.com",
            "service_id": "20"
        }
    ]
}
```
