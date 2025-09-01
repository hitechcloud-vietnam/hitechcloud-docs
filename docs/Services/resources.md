# Resources

Show available and used resources for a service.

### HTTP Request
```
GET /service/@id/resources
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/resources" \
   -H "Authorization: Bearer $token"
```
