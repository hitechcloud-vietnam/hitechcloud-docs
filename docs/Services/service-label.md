# Nhãn dịch vụ

Hiển thị nhãn hiện tại của dịch vụ.

### Yêu cầu HTTP
```
GET /service/@id/label
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/label" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "label": "example"
}
```
