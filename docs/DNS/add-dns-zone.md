# Thêm vùng DNS

Tạo vùng DNS mới.

### Yêu cầu HTTP
```
POST /service/@service_id/dns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|--------------|
| service_id | int | ID dịch vụ |
| name | string | Tên vùng |

```bash
POST_DATA="{
    \"service_id\": \"service_idValue\",
    \"name\": \"testzone.com\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@service_id/dns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "info": [
        "Domain zone testzone.com was created successfully."
    ]
}
```
