# Đổi nhãn dịch vụ

Đặt nhãn tùy chỉnh mới để nhận diện dịch vụ này.

### Yêu cầu HTTP
```
POST /service/@id/label
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------|
| id | int | ID dịch vụ |
| label | string | Nhãn mới |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"label\": \"labelValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/label" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "success": true,
    "info": [
        "label_updated"
    ]
}
```
