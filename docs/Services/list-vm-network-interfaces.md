# List VM Network Interfaces

Get network interfaces assigned to virtual servers.

### HTTP Request
```
GET /service/@id/vms/@vmid/interfaces
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces" \
   -H "Authorization: Bearer $token"
```
