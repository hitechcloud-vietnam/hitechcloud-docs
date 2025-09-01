# Order New Domain

Create a new order for a domain. Ensure the domain is available before proceeding.

### HTTP Request
```
POST /domain/order
```

### Query Parameters
| Parameter    | Type   | Description                     |
|--------------|--------|---------------------------------|
| name         | string | Domain name                    |
| years        | string | Number of years                |
| action       | string | register|transfer              |
| tld_id       | int    | TLD ID                         |
| pay_method   | int    | Payment method ID              |
| nameservers  | array  | Optional nameservers           |
| aff_id       | int    | Affiliate ID                   |

```bash
POST_DATA="{
    \"name\": \"example.com\",
    \"years\": \"yearsValue\",
    \"action\": \"register\",
    \"tld_id\": 42,
    \"pay_method\": 5,
    \"nameservers\": [
        "ns1.example.com",
        {
            "host": "ns2.example.com",
            "ip": "123.234.123.234"
        }
    ],
    \"aff_id\": 55
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/order" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "order_num": 563647679,
    "invoice_id": "308977",
    "total": "10.00",
    "items": {
        "id": "10",
        "type": "Domain Register",
        "name": "test.com",
        "product_id": "3"
    }
}
```
