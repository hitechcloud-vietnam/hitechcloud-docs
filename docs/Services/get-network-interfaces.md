# Get Network Interfaces

Retrieve details of a specific network interface.

### HTTP Request
```
GET /service/@id/vms/@vmid/interfaces/@iface
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |
| iface     | string | Interface name or ID |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface" \
   -H "Authorization: Bearer $token"
```
