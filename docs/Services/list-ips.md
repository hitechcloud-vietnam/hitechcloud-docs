# List IPs

List virtual machine IPs.

### HTTP Request
```
GET /service/@id/vms/@vmid/ips
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |
| type      | string | IPv4 or IPv6        |
| iface     | int    | Interface number    |
| bridge    | string | Bridge name         |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips" \
   -H "Authorization: Bearer $token"
```
