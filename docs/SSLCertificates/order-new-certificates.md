# Order New Certificates

Create a new order for a certificate.

### HTTP Request
```
POST /certificate/order
```

### Query Parameters
| Parameter        | Type   | Description                     |
|------------------|--------|---------------------------------|
| product_id       | int    | Certificate product ID          |
| csr              | string | Domain name                    |
| years            | int    | Number of years                |
| pay_method       | int    | Payment method ID              |
| approver_email   | string | Email address for validation   |
| admin            | int    | Admin contact ID               |
| tech             | int    | Tech contact ID                |
| billing          | int    | Billing contact ID             |
| organization     | array  | Organization details           |
| software         | int    | Server/Software ID             |
| data             | array  | Additional data for products   |
| aff_id           | int    | Affiliate ID                   |

```bash
POST_DATA="{
    \"product_id\": \"product_idValue\",
    \"csr\": \"example.com\",
    \"years\": \"yearsValue\",
    \"pay_method\": \"pay_methodValue\",
    \"approver_email\": \"approver_emailValue\",
    \"admin\": \"adminValue\",
    \"tech\": \"techValue\",
    \"billing\": \"billingValue\",
    \"organization\": \"organizationValue\",
    \"software\": \"softwareValue\",
    \"data\": \"dataValue\",
    \"aff_id\": 55
}"

curl -X POST "https://my.photuesoftware.vn/api/certificate/order" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "order_num": 873340994,
    "invoice_id": "308978",
    "total": "27.85",
    "items": {
        "id": "10",
        "type": "Hosting",
        "name": "test.com",
        "product_id": "3"
    }
}
```
