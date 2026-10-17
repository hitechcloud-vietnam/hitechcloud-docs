# Danh sách mẫu hệ điều hành

Liệt kê các mẫu có thể dùng để tạo máy chủ ảo.

### Yêu cầu HTTP
```
GET /service/@id/templates
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/templates" \
   -H "Authorization: Bearer $token"
```
