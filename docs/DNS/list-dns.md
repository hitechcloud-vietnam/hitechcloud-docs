# Danh sách DNS

Trả về danh sách tất cả DNS.

### Yêu cầu HTTP
```
GET /dns
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/dns" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "service_ids": [
        "10",
        "20"
    ],
    "zones": [
        {
            "domain_id": "60",
            "name": "qwerty.com",
            "service_id": "10"
        },
        {
            "domain_id": "61",
            "name": "bgg12ooble.com",
            "service_id": "20"
        }
    ]
}
```
