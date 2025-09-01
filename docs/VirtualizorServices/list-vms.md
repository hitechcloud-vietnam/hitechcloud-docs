# List VMs

List virtual servers.

### HTTP Request
```
GET /service/@id/vms
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token"
```
