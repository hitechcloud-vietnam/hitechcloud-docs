# Cứu hộ

Bắt đầu thao tác cứu hộ trên máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/rescue
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| template | string | ID mẫu cứu hộ |
| password | string | Mật khẩu cho thao tác cứu hộ |

```bash
POST_DATA="{
    \"template\": \"templateValue\",
    \"password\": \"passwordValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/rescue" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
