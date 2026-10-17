# Phí phương thức thanh toán

Liệt kê các phương thức thanh toán khả dụng kèm phí.

```bash
curl -X GET "https://my.photuesoftware.vn/api/payment/fees" \
   -H "Authorization: Bearer $token"
```

### Yêu cầu HTTP
```
GET /payment/fees
```

### Phản hồi mẫu
```json
{
    "payments": [
        {
            "id": 1,
            "name": "Bank Transfer",
            "fixed_fee": "0.0",
            "percent_fee": "0.0"
        },
        {
            "id": 2,
            "name": "Stripe",
            "fixed_fee": "0.5",
            "percent_fee": "2.9"
        },
        {
            "id": 4,
            "name": "Credit Card",
            "fixed_fee": "0.1",
            "percent_fee": "2.4"
        },
        {
            "id": 5,
            "name": "PayPal",
            "fixed_fee": "0.3",
            "percent_fee": "2.9"
        }
    ]
}
```