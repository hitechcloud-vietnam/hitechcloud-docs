# Cài lại

Bắt đầu thao tác cài lại trên máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/reinstall
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| hostname | string | Hostname mới của máy chủ |
| template | string | ID mẫu |
| recipe | string | ID công thức cấu hình (tùy chọn) |
| password | string | Mật khẩu mới (tùy chọn) |

```bash
POST_DATA="{
    \"hostname\": \"hostnameValue\",
    \"template\": \"templateValue\",
    \"recipe\": \"recipeValue\",
    \"password\": \"passwordValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/reinstall" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
