# Gia hạn dịch vụ thủ công

Tạo hóa đơn để gia hạn dịch vụ.

### Yêu cầu HTTP
```
POST /service/@id/renew
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/renew" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "status": true,
    "invoice_id": "504426",
    "info": [
        "manualrenew_ok"
    ]
}
```
