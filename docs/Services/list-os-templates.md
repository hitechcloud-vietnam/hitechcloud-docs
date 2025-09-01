# List OS Templates

List templates that can be used to create a virtual server.

### HTTP Request
```
GET /service/@id/templates
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/templates" \
   -H "Authorization: Bearer $token"
```
