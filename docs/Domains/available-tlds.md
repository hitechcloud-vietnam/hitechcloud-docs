# Các TLD khả dụng

Liệt kê các TLD có thể đăng ký và chuyển về.

### Yêu cầu HTTP
```
GET /domain/order
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/order" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
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
