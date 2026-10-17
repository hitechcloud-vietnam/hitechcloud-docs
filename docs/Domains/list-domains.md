# Danh sách tên miền

Liệt kê các tên miền thuộc tài khoản của bạn.

### Yêu cầu HTTP
```
GET /domain
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "domains": [
        {
            "id": "47",
            "name": "testname.com",
            "expires": "2017-12-30",
            "recurring_amount": "15.00",
            "date_created": "2016-12-30",
            "status": "Active",
            "period": "1",
            "autorenew": "1",
            "daytoexpire": "365"
        }
    ]
}
```
