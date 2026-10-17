# Lấy nameserver của tên miền

Lấy các nameserver của tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/ns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/ns" \
   -H "Authorization: Bearer $token"
```
