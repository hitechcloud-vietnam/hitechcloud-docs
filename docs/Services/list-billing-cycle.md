# Danh sách chu kỳ thanh toán

Lấy các tùy chọn chu kỳ thanh toán định kỳ của một dịch vụ.

### Yêu cầu HTTP
```
GET /service/@id/cycle
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/cycle" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "current": "m",
    "cycles": {
        "m": "14.95",
        "a": "179.40",
        "b": "358.80"
    }
}
```
