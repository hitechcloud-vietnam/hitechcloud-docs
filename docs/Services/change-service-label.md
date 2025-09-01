# Change Service Label

Set a new custom label to identify this service.

### HTTP Request
```
POST /service/@id/label
```

### Query Parameters
| Parameter | Type   | Description |
|-----------|--------|-------------|
| id        | int    | Service ID  |
| label     | string | New label   |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"label\": \"labelValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/label" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "success": true,
    "info": [
        "label_updated"
    ]
}
```
