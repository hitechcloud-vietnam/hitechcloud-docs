# Đăng nhập

Tạo token xác thực mới.

### Yêu cầu HTTP
```
POST /login
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|------------------------------|
| username | string | Địa chỉ email tài khoản của bạn |
| password | string | Mật khẩu tài khoản |

```bash
POST_DATA="{
    \"username\": \"user@example.com\",
    \"password\": \"secret\"
}"

curl -X POST "https://my.photuesoftware.vn/api/login" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRw(...)5lZ9T79ft9uwOkqRRmIBbtR51_w",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzMD(...)ChwIAb3zvxBu6kvULa2AwAt9U-I"
}
```
