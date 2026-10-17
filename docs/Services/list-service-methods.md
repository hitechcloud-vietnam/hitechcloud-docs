# Danh sách phương thức của dịch vụ

Liệt kê các phương thức khả dụng của một dịch vụ cụ thể.

### Yêu cầu HTTP
```
GET /service/@id/methods
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/methods" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "methods": [
        {
            "name": "Upgrade Request",
            "method": "POST",
            "route": "/service/@id/upgrade"
        },
        {
            "name": "Upgrade Options",
            "method": "GET",
            "route": "/service/@id/upgrade"
        }
    ]
}
```
