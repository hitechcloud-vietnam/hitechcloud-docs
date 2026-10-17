# Kiểm tra tên miền khả dụng

Kiểm tra tên miền có thể đăng ký hay không.

### Yêu cầu HTTP
```
POST /domain/lookup
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| name | string | Tên miền |

```bash
POST_DATA="{
    \"name\": \"example.com\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/lookup" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "available": false,
    "name": "example.com",
    "premium": false,
    "periods": [
        {
            "id": "6",
            "period": "1",
            "register": "10.00",
            "transfer": "0.00",
            "renew": "15.00",
            "redemption": "40.00"
        }
    ]
}
```
