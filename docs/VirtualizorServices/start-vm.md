# Start VM

Start a virtual server.

### HTTP Request
```
POST /service/@id/vms/@vmid/start
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/start" \
   -H "Authorization: Bearer $token"
```
