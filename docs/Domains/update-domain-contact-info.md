# Cập nhật thông tin liên hệ của tên miền

Cập nhật thông tin liên hệ của tên miền.

### Yêu cầu HTTP
```
PUT /domain/@id/contact
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|----------------|--------|-------------------------|
| id | int | ID tên miền |
| contact_info | array | Thông tin liên hệ |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"contact_info\": "contact_infoValue"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/contact" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "success": true,
    "domain_id": "428",
    "info": [
        "request_contacts_sent"
    ]
}
```
