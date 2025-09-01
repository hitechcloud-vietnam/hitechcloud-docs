# List Available Certificates

Return a list of certificates available for purchase.

### HTTP Request
```
GET /certificate/order
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate/order" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "products": [
        {
            "id": "25",
            "name": "InstantSSL",
            "description": "",
            "periods": [
                {
                    "years": 1,
                    "price": 27.85,
                    "renew": 27.85
                },
                {
                    "years": 2,
                    "price": 48.75,
                    "renew": 48.75
                }
            ],
            "category": "SSL Certificates",
            "category_url": "sslcertificates"
        }
    ]
}
```
