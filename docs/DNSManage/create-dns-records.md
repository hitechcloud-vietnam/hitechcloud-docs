# Tạo bản ghi DNS

Thêm một bản ghi DNS mới.

### Yêu cầu HTTP
```
POST /domain/@id/dns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|----------------------|
| id | int | ID tên miền |
| name | string | Tên bản ghi |
| type | string | Loại bản ghi |
| priority | string | Độ ưu tiên của bản ghi |
| content | string | Nội dung bản ghi (ví dụ: địa chỉ IP cho bản ghi A) |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"name\": \"nameValue\",
    \"type\": \"typeValue\",
    \"priority\": \"priorityValue\",
    \"content\": \"contentValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/@id/dns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "info": [
        "DNS Management updated successfully"
    ]
}
```
