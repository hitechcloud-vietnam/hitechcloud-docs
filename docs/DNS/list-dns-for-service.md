# Danh sách DNS của dịch vụ

Trả về danh sách các vùng DNS thuộc dịch vụ.

### Yêu cầu HTTP
```
GET /service/@service_id/dns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|--------------|
| service_id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@service_id/dns" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "error": [
        "invalid method"
    ]
}
```
