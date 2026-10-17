# Danh sách dịch vụ

Liệt kê tất cả dịch vụ thuộc tài khoản của bạn.

### Yêu cầu HTTP
```
GET /service
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/service" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "services": [
        {
            "id": "301",
            "domain": "examplename.com",
            "total": "9.99",
            "status": "Pending",
            "billingcycle": "Monthly",
            "next_due": "2017-12-30",
            "category": "Hosting",
            "category_url": "hosting",
            "name": "Starter Hosting"
        }
    ]
}
```
