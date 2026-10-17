# Đăng ký nameserver cho tên miền

Đăng ký nameserver cho tên miền.

### Yêu cầu HTTP
```
POST /domain/@id/reg
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/@id/reg" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
