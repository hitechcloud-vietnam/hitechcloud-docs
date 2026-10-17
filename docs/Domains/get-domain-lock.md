# Lấy trạng thái khóa tên miền

Lấy trạng thái khóa của tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/reglock
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/reglock" \
   -H "Authorization: Bearer $token"
```
