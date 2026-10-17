# Danh sách bản ghi DNS

Liệt kê các bản ghi DNS.

### Yêu cầu HTTP
```
GET /domain/@id/dns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/dns" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "records": [
        {
            "id": 1,
            "name": "test",
            "ttl": 0,
            "priority": 0,
            "type": "A",
            "content": "100.100.10.1"
        }
    ]
}
```
