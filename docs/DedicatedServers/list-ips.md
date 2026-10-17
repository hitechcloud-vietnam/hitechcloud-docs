# Danh sách IP

Liệt kê các IP của máy chủ.

### Yêu cầu HTTP
```
GET /service/@id/ips
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/ips" \
   -H "Authorization: Bearer $token"
```
