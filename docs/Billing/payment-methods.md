# Payment Methods

List available payment methods.

```bash
curl -X GET "https://my.photuesoftware.vn/api/payment" \
   -H "Authorization: Bearer $token"
```

### HTTP Request
```
GET /payment
```

### Example Response
```json
{
    "payments": {
        "10": "BankTransfer",
        "9": "PayPal"
    }
}
```
