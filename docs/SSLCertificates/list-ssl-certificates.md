# List SSL Certificates

List all SSL services under your account.

### HTTP Request
```
GET /certificate
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "sslservices": [
        {
            "id": "300",
            "domain": "examplename.com",
            "total": "27.85",
            "status": "Pending",
            "billingcycle": "Annually",
            "next_due": "2017-12-30",
            "category": "GoGetSSL",
            "category_url": "gogetssl",
            "name": "Comodo InstantSSL",
            "cert_email": "admin@example.com",
            "cert_status": "",
            "cert_expires": "2017-12-30 13:43:12"
        }
    ]
}
```
