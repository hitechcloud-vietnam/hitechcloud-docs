---
id: get-contact-details
title: Lấy chi tiết liên hệ
---

## Lấy chi tiết liên hệ

Lấy thông tin chi tiết của một liên hệ cụ thể.

### Yêu cầu HTTP

`GET /contact/@id`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|--------------|
| id | int | ID liên hệ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/contact/@id" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu

```json
{
    "contact": {
        "id": "49",
        "email": "mary@example.com",
        "firstname": "Mary",
        "lastname": "Sue",
        "companyname": "",
        "address1": "Pretty View Lane",
        "address2": "3194",
        "city": "Santa Rosa",
        "state": "California",
        "postcode": "95401",
        "country": "US",
        "phonenumber": "+1.24123123",
        "type": "Private",
        "privileges": {
            "support": ["tickets", "newticket"]
        }
    }
}
```