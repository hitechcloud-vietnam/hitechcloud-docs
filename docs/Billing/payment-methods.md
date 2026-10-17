# Phương thức thanh toán

Liệt kê các phương thức thanh toán khả dụng.

```bash
curl -X GET "https://my.photuesoftware.vn/api/payment" \
   -H "Authorization: Bearer $token"
```

### Yêu cầu HTTP
```
GET /payment
```

### Phản hồi mẫu
```json
{
    "payments": {
        "10": "BankTransfer",
        "9": "PayPal"
    }
}
```
