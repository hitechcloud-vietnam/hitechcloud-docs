# Change Billing Cycle

Change the recurring billing cycle for a service.

### HTTP Request
```
POST /service/@id/cycle
```

### Query Parameters
| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| cycle     | string | New billing cycle |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"cycle\": \"cycleValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/cycle" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "success": true,
    "info": [
        "changebillingcycle_ok"
    ]
}
```
