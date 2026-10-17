# Cập nhật nameserver của tên miền

Thay đổi nameserver của tên miền. Nếu để trống `nameservers`, hệ thống sẽ dùng nameserver mặc định.

### Yêu cầu HTTP
```
PUT /domain/@id/ns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|-------------------------|
| id | int | ID tên miền |
| nameservers | array | Danh sách nameserver |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"nameservers\": ["ns1.example.com", "ns2.example.com"]
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/ns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "info": [
        "success_changes_save"
    ]
}
```
