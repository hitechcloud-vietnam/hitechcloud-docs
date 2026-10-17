# Danh sách liên hệ

Trả về danh sách các liên hệ của tài khoản này.

### Yêu cầu HTTP
```
GET /contact
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/contact" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "contacts": [
        {
            "email": "mary@example.com",
            "id": "49",
            "firstname": "Mary",
            "lastname": "Sue",
            "companyname": "",
            "company": "0",
            "lastlogin": "0000-00-00 00:00:00"
        }
    ]
}
```
