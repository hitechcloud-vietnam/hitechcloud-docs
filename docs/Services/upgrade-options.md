# Tùy chọn nâng cấp

Liệt kê các tùy chọn nâng cấp của một dịch vụ cụ thể.

### Yêu cầu HTTP
```
GET /service/@id/upgrade
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "resources": [
        {
            "id": 1557,
            "name": "Bandwidth",
            "type": "select",
            "items": [
                {
                    "id": "9953",
                    "name": "100 GB",
                    "price": 1,
                    "setup_price": 0,
                    "selected": true
                }
            ]
        }
    ]
}
```
