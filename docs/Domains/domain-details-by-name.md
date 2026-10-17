# Chi tiết tên miền theo tên

Lấy thông tin chi tiết của tên miền theo tên.

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------|
| name | string | Tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/name/@name" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "details": [
        {
            "id": "47",
            "name": "testname.com",
            "date_created": "2016-12-30",
            "firstpayment": "10.00",
            "recurring_amount": "15.00",
            "period": "1",
            "expires": "2017-12-30",
            "status": "Active",
            "next_due": "2017-12-30",
            "next_invoice": "2017-11-30",
            "idprotection": "0",
            "nameservers": [
                "ns1.example.com",
                "ns2.example.com",
                "ns3.example.com",
                "ns4.example.com"
            ],
            "autorenew": "1"
        }
    ]
}
```

### Yêu cầu HTTP
```
GET /domain/name/@name
```
