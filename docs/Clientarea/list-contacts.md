# List Contacts

Return a list of contacts on this account.

### HTTP Request
```
GET /contact
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/contact" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "contacts": [
        {
            "email": "mary@example.com",
            "id": "49",
            "firstname": "Mary",
            "lastname": "Sue",
            "companyname": "",
            "company": "0",
            "lastlogin": "0000-00-00 00:00:00"
        }
    ]
}
```
