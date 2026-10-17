# Cập nhật chuyển tiếp tên miền

Cập nhật cấu hình chuyển tiếp tên miền.

### Yêu cầu HTTP
```
PUT /domain/@id/forwarding
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/forwarding" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
