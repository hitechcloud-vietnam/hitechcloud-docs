# Available TLDs

List TLDs available for registration and transfer.

### HTTP Request
```
GET /domain/order
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/order" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "tlds": [
        {
            "id": "6",
            "tld": ".com",
            "periods": [
                {
                    "period": "1",
                    "register": "10.00",
                    "transfer": "0.00",
                    "renew": "15.00",
                    "redemption": "40.00"
                }
            ]
        }
    ]
}
```
