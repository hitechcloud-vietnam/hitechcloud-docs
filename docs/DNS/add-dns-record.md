# Thêm bản ghi DNS

Tạo bản ghi mới trong vùng DNS.

### Yêu cầu HTTP
```
POST /service/@service_id/dns/@zone_id/records
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|--------------|
| service_id | int | ID dịch vụ |
| zone_id | int | ID vùng |
| name | string | Tên bản ghi |
| ttl | int | TTL của bản ghi |
| priority | int | Độ ưu tiên của bản ghi |
| type | string | Loại bản ghi |
| content | string | Nội dung bản ghi |

```bash
POST_DATA="{
    \"service_id\": \"service_idValue\",
    \"zone_id\": \"zone_idValue\",
    \"name\": \"example.com\",
    \"ttl\": 3600,
    \"priority\": 10,
    \"type\": \"A\",
    \"content\": \"192.168.1.2\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@service_id/dns/@zone_id/records" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "record": {
      "name": "_sip._tcp.example.com",
      "type": "SRV",
      "ttl": "3600",
      "priority": "10",
      "content": [
        10,
        5060,
        "vc01.example.com"
      ]
    },
    "info": [
        "dnsnewrecordadded",
        "SRV"
    ]
}
```
