# Certificate Details

Return details for a specific certificate.

### HTTP Request
```
GET /certificate/@id
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate/@id" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "service": {
        "id": "300",
        "date_created": "2016-12-30",
        "domain": "examplename.com",
        "firstpayment": "27.85",
        "total": "27.85",
        "billingcycle": "Annually",
        "next_due": "2017-12-30",
        "next_invoice": "2017-10-31",
        "status": "Pending",
        "label": "",
        "name": "Comodo InstantSSL",
        "cert_status": "",
        "cert_expires": "2017-12-30 13:43:12",
        "csr": "-----BEGIN CERTIFICATE REQUEST----- ...",
        "cert_email": "admin@example.com",
        "software": "1"
    }
}
```
