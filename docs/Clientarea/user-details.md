# User Details

Return registration details for my account.


### HTTP Request
```
GET /details
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/details" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "client": {
        "id": "26",
        "email": "api@example.com",
        "lastlogin": "2016-12-30 12:24:28",
        "ip": "172.100.2.1",
        "host": "hostname",
        "firstname": "Joe",
        "lastname": "Doe",
        "companyname": "",
        "address1": "Pretty View Lane",
        "address2": "3294",
        "city": "Santa Rosa",
        "state": "California",
        "postcode": "95401",
        "country": "US",
        "phonenumber": "+1.24123123"
    }
}
```
