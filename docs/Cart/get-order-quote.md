# Get Order Quote

Calculate order cost and recurring prices for selected items.

### HTTP Request
```
POST /quote
```

```bash
POST_DATA="{
    \"pay_method\": \"pay_methodValue\",
    \"output\": \"short\",
    \"items\": [
        {
            \"type\": \"product\",
            \"product_id\": 1080,
            \"domain\": \"hosting.com\",
            \"cycle\": \"a\"
        }
    ]
}"

curl -X POST "https://my.photuesoftware.vn/api/quote" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "summary": {
        "subtotal": 72.2,
        "total": 88.81,
        "credit": 0,
        "discount": 0,
        "cost": 72.2,
        "recurring": [
            {
                "title": "Annually",
                "price": 81.18,
                "value": "a"
            }
        ]
    }
}
```
