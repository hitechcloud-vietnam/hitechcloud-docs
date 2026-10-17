# Danh sách mạng khả dụng

Liệt kê các mạng và dải IP có thể dùng để tạo máy ảo.

### Yêu cầu HTTP
```
GET /service/@id/networks
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/networks" \
   -H "Authorization: Bearer $token"
```
