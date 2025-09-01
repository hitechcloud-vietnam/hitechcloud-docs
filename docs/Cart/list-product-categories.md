# List Product Categories

Return a list of product categories.

### HTTP Request
```
GET /category
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/category" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "categories": [
        {
            "id": "10",
            "name": "Hosting",
            "description": "",
            "slug": "hosting"
        },
        {
            "id": "6",
            "name": "Domains",
            "description": "",
            "slug": "domains"
        },
        {
            "id": "16",
            "name": "Dedicated",
            "description": "",
            "slug": "dedicated"
        }
    ]
}
```

