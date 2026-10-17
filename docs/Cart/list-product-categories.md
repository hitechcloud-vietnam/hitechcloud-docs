# Danh sách danh mục sản phẩm

Trả về danh sách danh mục sản phẩm.

### Yêu cầu HTTP
```
GET /category
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/category" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
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

