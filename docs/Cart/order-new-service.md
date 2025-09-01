# Order New Service

Create and submit a new order for the selected product.

### HTTP Request
```
POST /order/@product_id
```

### Query Parameters
| Parameter    | Type   | Description  |
|--------------|--------|--------------|
| product_id   | int    | Product ID   |
| domain       | string | Domain name  |
| cycle        | string | Billing cycle|
| pay_method   | int    | Payment method ID |

```bash
POST_DATA="{
    \"product_id\": 12,
    \"domain\": \"example.com\",
    \"cycle\": \"m\",
    \"pay_method\": \"1\",
    \"custom\": {
        \"1618\": {
            \"10330\": 1
        }
    },
    \"promocode\": \"T346F\",
    \"aff_id\": 55
}"

curl -X POST "https://my.photuesoftware.vn/api/order/@product_id" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "order_num": 873340995,
    "invoice_id": "308979",
    "total": "9.99",
    "items": {
        "id": "10",
        "type": "Hosting",
        "name": "test.com",
        "product_id": "3"
    }
}
```

