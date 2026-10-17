# Dữ liệu bổ sung cho TLD

Lấy các biểu mẫu bổ sung mà một số TLD yêu cầu.

### Yêu cầu HTTP
```
GET /domain/order/@id/form
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| tld_id | int | ID TLD |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/order/@id/form" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "forms": [
        {
            "type": "domaindnssupport",
            "title": "DNS Management",
            "id": "1424",
            "firstItemId": 9067,
            "description": "",
            "name": "custom[1424][9067]",
            "required": false,
            "multiple": false,
            "config": {
                "enableddefault": 0
            },
            "value": [],
            "textvalue": [],
            "price": 0,
            "recurring_price": 0,
            "setup": 0,
            "prorata_date": null,
            "items": [
                {
                    "title": "",
                    "value": 1,
                    "id": 9067,
                    "price": 4,
                    "setup": 0,
                    "selected": false
                }
            ]
        }
    ]
}
```
