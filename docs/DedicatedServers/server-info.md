# Thông tin máy chủ

Lấy thông tin phần cứng và hệ điều hành của máy chủ.

### Yêu cầu HTTP
```
GET /service/@id/info
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/info" \
   -H "Authorization: Bearer $token"
```
