# Trạng thái cài lại

Lấy trạng thái của thao tác cài lại.

### Yêu cầu HTTP
```
GET /service/@id/reinstall
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/reinstall" \
   -H "Authorization: Bearer $token"
```
