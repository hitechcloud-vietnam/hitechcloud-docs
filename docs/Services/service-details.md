# Service Details

Return details for a specific service.

### HTTP Request
```
GET /service/@id
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id" \
   -H "Authorization: Bearer $token"
```

### Example Response
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
