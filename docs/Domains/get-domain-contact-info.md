# Lấy thông tin liên hệ của tên miền

Lấy thông tin liên hệ của tên miền.

### Yêu cầu HTTP
```
GET /domain/@id/contact
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/contact" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "success": true,
    "domain_id": "428",
    "contact_info": {
        "registrant": {
            "firstname": "",
            "lastname": "",
            "companyname": "",
            "email": "",
            "phonenumber": "",
            "address1": "",
            "address2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": ""
        }
    }
}
```
