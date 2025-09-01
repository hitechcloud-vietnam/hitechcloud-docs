# Invoice Details

Get invoice details.

```bash
curl -X GET "https://my.photuesoftware.vn/api/invoice/@id" \
   -H "Authorization: Bearer $token"
```
### HTTP Request
```
GET /invoice/@id
```

### Example Response
```json
{
    "invoice": {
        "id": "308976",
        "status": "Paid",
        "date": "2016-12-30",
        "duedate": "2017-01-06",
        "paybefore": "2017-01-06",
        "datepaid": "2016-12-30 12:40:47",
        "subtotal": 16.24,
        "credit": 0,
        "tax": 3.41,
        "taxrate": 21,
        "tax2": 0,
        "taxrate2": 0,
        "taxexempt": "0",
        "total": 19.65,
        "rate": 1,
        "rate2": 0,
        "rate3": 1,
        "notes": "",
        "items": [
            {
                "id": "12305",
                "invoice_id": "308976",
                "type": "Other",
                "item_id": "0",
                "description": "Example Service",
                "amount": "15.00",
                "taxed": "1",
                "qty": "1.00",
                "linetotal": "15.00"
            },
            {
                "id": "12309",
                "invoice_id": "308976",
                "type": "Other",
                "item_id": "-2",
                "description": "PayPal Payment Fee",
                "amount": "1.24",
                "taxed": "1",
                "qty": "1.00",
                "linetotal": "1.24"
            }
        ],
        "client": {
            "id": "26",
            "email": "api@example.com",
            "firstname": "Joe",
            "lastname": "Doe",
            "companyname": "",
            "address1": "Pretty View Lane",
            "address2": "3194",
            "city": "Santa Rosa",
            "state": "California",
            "postcode": "95401",
            "country": "US",
            "phonenumber": "+1.24123123"
        },
        "number": "2016\/12\/1",
        "currency": "USD"
    }
}
```
