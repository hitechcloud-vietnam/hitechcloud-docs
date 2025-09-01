---
id: get-contact-details
title: Get Contact Details
---

## Get Contact Details

Retrieve details of a specific contact.

### HTTP Request

`GET /contact/@id`

### Query Parameters

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Contact ID   |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/contact/@id" \
   -H "Authorization: Bearer $token"
```

### Example Response

```json
{
    "contact": {
        "id": "49",
        "email": "mary@example.com",
        "firstname": "Mary",
        "lastname": "Sue",
        "companyname": "",
        "address1": "Pretty View Lane",
        "address2": "3194",
        "city": "Santa Rosa",
        "state": "California",
        "postcode": "95401",
        "country": "US",
        "phonenumber": "+1.24123123",
        "type": "Private",
        "privileges": {
            "support": ["tickets", "newticket"]
        }
    }
}
```