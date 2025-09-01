# List Services

List all services under your account.

### HTTP Request
```
GET /service
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/service" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "services": [
        {
            "id": "301",
            "domain": "examplename.com",
            "total": "9.99",
            "status": "Pending",
            "billingcycle": "Monthly",
            "next_due": "2017-12-30",
            "category": "Hosting",
            "category_url": "hosting",
            "name": "Starter Hosting"
        }
    ]
}
```
