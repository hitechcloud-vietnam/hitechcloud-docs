# Order Multiple Services

Create and submit a new order for multiple services.

### HTTP Request
```
POST /order
```

### Query Parameters
| Parameter       | Type   | Description  |
|-----------------|--------|--------------|
| pay_method      | int    | Payment method ID |
| ignore_errors   | bool   | Ignore errors     |
| items           | array  | List of order items |

```bash
POST_DATA="{
    \"pay_method\": 1,
    \"ignore_errors\": \"No error\",
    \"items\": [
        {
            \"type\": \"product\",
            \"product_id\": 1080,
            \"domain\": \"hosting.com\",
            \"cycle\": \"a\"
        },
        {
            \"type\": \"certificate\",
            \"product_id\": 840,
            \"csr\": \"-----BEGIN CERTIFICATE REQUEST----- (...)",
            \"years\": 1,
            \"approver_email\": \"admin@hosting.com\"
        }
    ]
}"

curl -X POST "https://my.photuesoftware.vn/api/order" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "order_num_list": [
        179534732,
        179534732
    ],
    "invoice_id": "503425",
    "total": "94.40",
    "items": [
        {
            "type": "Hosting",
            "id": "1025",
            "name": "hosting.com",
            "product_id": "1080"
        }
    ]
}
```

