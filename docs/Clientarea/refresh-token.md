# Làm mới token

Tạo token xác thực mới bằng refresh token.


### Yêu cầu HTTP
```
POST /token
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|----------------|--------|------------------------------|
| refresh_token | string | Refresh token đã nhận trước đó từ `POST /login` |

```bash
POST_DATA="{
    \"refresh_token\": \"refresh_tokenValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHR(...)vY2xlYiHGvauCWZD9B0VwXgHEzXDllqY",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJBQ(...)Rmivc_u3YA_kgDqOPtUuGNXOzueXYtZw"
}
```
