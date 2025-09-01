# Service Label

Show the current service label.

### HTTP Request
```
GET /service/@id/label
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/label" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "label": "example"
}
```
