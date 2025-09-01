# Suspend VM

Suspend a virtual server.

### HTTP Request
```
POST /service/@id/vms/@vmid/suspend
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/suspend" \
   -H "Authorization: Bearer $token"
```
