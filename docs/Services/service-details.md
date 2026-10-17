# Chi tiết dịch vụ

Trả về thông tin chi tiết của một dịch vụ cụ thể.

### Yêu cầu HTTP
```
GET /service/@id
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "service": {
        "id": "301",
        "date_created": "2016-12-30",
        "domain": "examplename.com",
        "firstpayment": "9.99",
        "total": "9.99",
        "billingcycle": "Monthly",
        "next_due": "2017-12-30",
        "next_invoice": "2017-01-27",
        "status": "Active",
        "label": "",
        "username": "examplen",
        "password": "pdtzc",
        "name": "Starter Hosting"
    }
}
```
