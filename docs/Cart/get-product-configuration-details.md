# Get Product Configuration Details

Return product details with form configuration, addons, and subproducts if available.

### HTTP Request
```
GET /order/@product_id
```

### Query Parameters
| Parameter    | Type | Description  |
|--------------|------|--------------|
| product_id   | int  | Product ID   |
```bash
curl -X GET "https://my.photuesoftware.vn/api/order/@product_id" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "product": {
        "id": "333",
        "category_name": "Hosting",
        "category_id": "49",
        "name": "Starter Hosting",
        "price": 9.99,
        "recurring": "m",
        "setup": 0,
        "config": {
            "product": [
                {
                    "type": "select",
                    "title": "pickcycle",
                    "id": "cycle",
                    "name": "cycle",
                    "items": [
                        {
                            "title": "m",
                            "value": "m",
                            "price": 9.99,
                            "setup": 0,
                            "selected": true
                        },
                        {
                            "title": "a",
                            "value": "a",
                            "price": 109.89,
                            "setup": 0,
                            "selected": false
                        }
                    ]
                }
            ]
        }
    }
}
```

