# Reset VM Password

Reset the root password for a virtual server.

### HTTP Request
```
POST /service/@id/vms/@vmid/resetpwd
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/resetpwd" \
   -H "Authorization: Bearer $token"
```
