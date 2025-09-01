# Apply Credit

Apply account credit to an invoice.

```bash
POST_DATA="{
    \"amount\": \"amountValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/invoice/@id/credit" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### HTTP Request
```
POST /invoice/@id/credit
```

### Query Parameters
| Parameter | Type   | Description                                                                 |
|-----------|--------|-----------------------------------------------------------------------------|
| amount    | number | Optional credit amount. If not specified, the maximum amount will be used.  |

### Example Response
```json
{
    "success": true,
    "invoice_status": "Paid",
    "applied": 2.1
}
```

