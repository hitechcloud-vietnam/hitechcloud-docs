# List IPs

List server IPs.

### HTTP Request
```
GET /service/@id/ips
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/ips" \
   -H "Authorization: Bearer $token"
```
