# Đồng bộ tên miền

Đồng bộ thông tin tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/sync
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/sync" \
   -H "Authorization: Bearer $token"
```
