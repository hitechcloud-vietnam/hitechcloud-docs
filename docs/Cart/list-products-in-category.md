# Danh sách sản phẩm trong danh mục

Trả về danh sách sản phẩm có thể mua thuộc danh mục được yêu cầu.

### Yêu cầu HTTP
```
GET /category/@category_id/product
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|------|--------------|
| category_id | int | ID danh mục |

```bash
curl -X GET "https://my.photuesoftware.vn/api/category/@category_id/product" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "products": [
        {
            "id": "333",
            "type": "1",
            "name": "Starter Hosting",
            "stock": false,
            "paytype": "Regular",
            "description": "Disk:10GB\nMemory:2GB\nMySql:10 DB\nEmail:100 Users\n",
            "qty": "0",
            "tags": [],
            "periods": [
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
                },
                {
                    "title": "b",
                    "value": "b",
                    "price": 199.8,
                    "setup": 0,
                    "selected": false
                },
                {
                    "title": "t",
                    "value": "t",
                    "price": 299.7,
                    "setup": 0,
                    "selected": false
                }
            ]
        }
    ]
}
```

