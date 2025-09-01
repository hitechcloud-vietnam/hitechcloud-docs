# List VLANs

List available VLANs.

### HTTP Request
```
GET /service/@id/vlans
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vlans" \
   -H "Authorization: Bearer $token"
```
