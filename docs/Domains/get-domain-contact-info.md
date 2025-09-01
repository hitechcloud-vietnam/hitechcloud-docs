# Get Domain Contact Info

Retrieve the contact information for a domain.

### HTTP Request
```
GET /domain/@id/contact
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/contact" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "success": true,
    "domain_id": "428",
    "contact_info": {
        "registrant": {
            "firstname": "",
            "lastname": "",
            "companyname": "",
            "email": "",
            "phonenumber": "",
            "address1": "",
            "address2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": ""
        }
    }
}
```
