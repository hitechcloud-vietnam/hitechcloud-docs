# Danh sách hóa đơn

Liệt kê tất cả hóa đơn thuộc tài khoản của tôi.

```bash
curl -X GET "https://my.photuesoftware.vn/api/invoice" \
   -H "Authorization: Bearer $token"
```
### Yêu cầu HTTP
```
GET /invoice
```

### Phản hồi mẫu
```json
{
    "invoices": [
        {
            "id": "308976",
            "date": "2016-12-30",
            "dateorig": "2016-12-30",
            "duedate": "2017-01-06",
            "paybefore": "2017-01-06",
            "total": "19.65",
            "datepaid": "2016-12-30 12:40:47",
            "status": "Paid",
            "merge_id": null,
            "number": "2016\/12\/1",
            "currency": "USD"
        }
    ]
}
```
