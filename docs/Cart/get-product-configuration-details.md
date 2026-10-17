# Lấy chi tiết cấu hình sản phẩm

Trả về chi tiết sản phẩm cùng cấu hình biểu mẫu, addon và sản phẩm con (nếu có).

### Yêu cầu HTTP
```
GET /order/@product_id
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|------|--------------|
| product_id | int | ID sản phẩm |
```bash
curl -X GET "https://my.photuesoftware.vn/api/order/@product_id" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "product": {
        "id": "333",
        "category_name": "Hosting",
        "category_id": "49",
        "name": "Starter Hosting",
        "price": 9.99,
        "recurring": "m",
        "setup": 0,
        "config": {
            "product": [
                {
                    "type": "select",
                    "title": "pickcycle",
                    "id": "cycle",
                    "name": "cycle",
                    "items": [
                        {
                            "title": "m",
                            "value": "m",
                            "price": 9.99,
                            "setup": 0,
                            "selected": true
                        },
                        {
                            "title": "a",
                            "value": "a",
                            "price": 109.89,
                            "setup": 0,
                            "selected": false
                        }
                    ]
                }
            ]
        }
    }
}
```

