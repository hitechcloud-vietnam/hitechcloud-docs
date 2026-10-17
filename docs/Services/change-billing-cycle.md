# Đổi chu kỳ thanh toán

Thay đổi chu kỳ thanh toán định kỳ của một dịch vụ.

### Yêu cầu HTTP
```
POST /service/@id/cycle
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| cycle | string | Chu kỳ thanh toán mới |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"cycle\": \"cycleValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/cycle" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "success": true,
    "info": [
        "changebillingcycle_ok"
    ]
}
```
