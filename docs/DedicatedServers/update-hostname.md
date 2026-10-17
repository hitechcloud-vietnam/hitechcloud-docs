# Cập nhật hostname

Cập nhật hostname của máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/hostname
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| hostname | string | Hostname mới |

```bash
POST_DATA="{
    \"hostname\": \"hostnameValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/hostname" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
