# Cập nhật bản ghi DNS

Thay đổi một bản ghi DNS.

### Yêu cầu HTTP
```
PUT /domain/@id/dns/@index
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|------------|--------|----------------------|
| id | int | ID tên miền |
| record_id | int | Chỉ số bản ghi |
| name | string | Tên bản ghi |
| type | string | Loại bản ghi |
| priority | string | Độ ưu tiên của bản ghi |
| content | string | Nội dung bản ghi (ví dụ: địa chỉ IP cho bản ghi A) |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"record_id\": \"record_idValue\",
    \"name\": \"nameValue\",
    \"type\": \"typeValue\",
    \"priority\": \"priorityValue\",
    \"content\": \"contentValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/dns/@index" \
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
