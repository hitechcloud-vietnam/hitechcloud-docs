# Thu hồi token

Vô hiệu hóa token xác thực và refresh token. Truyền refresh token hoặc gọi phương thức này với một access token hợp lệ.

### Yêu cầu HTTP
```
POST /revoke
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|----------------|--------|------------------------------|
| refresh_token | string | Refresh token |

```bash
POST_DATA="{
    \"refresh_token\": \"refresh_tokenValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/revoke" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "status": true
}
```
