# Đăng xuất

Vô hiệu hóa token xác thực.

### Yêu cầu HTTP
```
POST /logout
```

```bash
curl -X POST "https://my.photuesoftware.vn/api/logout" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "status": true
}
```
