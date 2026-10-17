# Danh sách chứng chỉ SSL

Liệt kê tất cả dịch vụ SSL thuộc tài khoản của bạn.

### Yêu cầu HTTP
```
GET /certificate
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "sslservices": [
        {
            "id": "300",
            "domain": "examplename.com",
            "total": "27.85",
            "status": "Pending",
            "billingcycle": "Annually",
            "next_due": "2017-12-30",
            "category": "GoGetSSL",
            "category_url": "gogetssl",
            "name": "Comodo InstantSSL",
            "cert_email": "admin@example.com",
            "cert_status": "",
            "cert_expires": "2017-12-30 13:43:12"
        }
    ]
}
```
