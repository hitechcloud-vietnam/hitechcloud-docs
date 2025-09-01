# Manual Service Renew

Generate an invoice to renew the service.

### HTTP Request
```
POST /service/@id/renew
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/renew" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "status": true,
    "invoice_id": "504426",
    "info": [
        "manualrenew_ok"
    ]
}
```
