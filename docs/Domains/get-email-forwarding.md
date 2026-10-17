# Lấy cấu hình chuyển tiếp email

Lấy cấu hình chuyển tiếp email của tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/emforwarding
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/emforwarding" \
   -H "Authorization: Bearer $token"
```
