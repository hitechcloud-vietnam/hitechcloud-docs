# Lấy mã EPP của tên miền

Lấy mã EPP của tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/epp
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/epp" \
   -H "Authorization: Bearer $token"
```
