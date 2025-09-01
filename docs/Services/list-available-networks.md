# List Available Networks

List networks and IP pools that can be used for VM creation.

### HTTP Request
```
GET /service/@id/networks
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/networks" \
   -H "Authorization: Bearer $token"
```
