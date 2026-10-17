# Lấy trạng thái tự động gia hạn tên miền

Lấy trạng thái tự động gia hạn của tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/autorenew
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/autorenew" \
   -H "Authorization: Bearer $token"
```
