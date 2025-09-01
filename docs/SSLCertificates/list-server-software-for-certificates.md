# List Server Software for Certificates

Return a list of software IDs required for certificates.

### HTTP Request
```
GET /certificate/order/@product_id/software
```

### Query Parameters
| Parameter    | Type | Description             |
|--------------|------|-------------------------|
| product_id   | int  | Certificate product ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate/order/@product_id/software" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "software": [
        {
            "id": 0,
            "name": "AOL"
        },
        {
            "id": 1,
            "name": "Apache-SSL (Ben-SSL, not Stronghold)"
        }
    ]
}
```
