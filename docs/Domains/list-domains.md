# List Domains

List domains under your account.

### HTTP Request
```
GET /domain
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain" \
   -H "Authorization: Bearer $token"
```

### Example Response
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
