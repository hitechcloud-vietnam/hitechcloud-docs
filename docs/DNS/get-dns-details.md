# Lấy chi tiết DNS

Trả về thông tin chi tiết của vùng DNS.

### Yêu cầu HTTP
```
GET /service/@service_id/dns/@zone_id
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|--------------|
| service_id | int | ID dịch vụ |
| zone_id | int | ID vùng |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@service_id/dns/@zone_id" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "service_id": 10,
    "name": "qwerty.com",
    "records": [
      {
        "id":"10",
        "name":"qwerty",
        "ttl":1800,
        "priority":0,
        "content":"127.0.0.1",
        "type":"A"
      },
      {
        "id":"11",
        "name":"qwerty",
        "ttl":1800,
        "priority":0,
        "content":"ns1.qwerty.com",
        "type":"NS"
      }
    ]
}
```
