# Danh sách máy chủ còn hàng

Liệt kê các máy chủ hiện còn hàng.

### Yêu cầu HTTP
```
GET /serverstock
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/serverstock" \
   -H "Authorization: Bearer $token"
```
