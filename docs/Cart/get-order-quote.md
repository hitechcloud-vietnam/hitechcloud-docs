# Báo giá đơn hàng

Tính chi phí đơn hàng và giá định kỳ cho các mục đã chọn.

### Yêu cầu HTTP
```
POST /quote
```

```bash
POST_DATA="{
    \"pay_method\": \"pay_methodValue\",
    \"output\": \"short\",
    \"items\": [
        {
            \"type\": \"product\",
            \"product_id\": 1080,
            \"domain\": \"hosting.com\",
            \"cycle\": \"a\"
        }
    ]
}"

curl -X POST "https://my.photuesoftware.vn/api/quote" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "summary": {
        "subtotal": 72.2,
        "total": 88.81,
        "credit": 0,
        "discount": 0,
        "cost": 72.2,
        "recurring": [
            {
                "title": "Annually",
                "price": 81.18,
                "value": "a"
            }
        ]
    }
}
```
